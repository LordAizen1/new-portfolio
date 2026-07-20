import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

// Run per-request. Without this, Next.js can statically render this route at build
// time and cache the result, so a build without a valid GITHUB_TOKEN would serve a
// baked-in error forever even after the env var is set.
export const dynamic = "force-dynamic";

const query = `
  query($since: GitTimestamp!) {
    viewer {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
      repositories(first: 50, ownerAffiliations: [OWNER, COLLABORATOR], orderBy: {field: PUSHED_AT, direction: DESC}) {
        nodes {
          name
          isPrivate
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 100, since: $since) {
                  nodes {
                    message
                    committedDate
                    oid
                    author {
                      user {
                        login
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// GitHub's contribution calendar buckets days in the account's local timezone,
// but commit/event timestamps come back in UTC. Convert to the local zone before
// deriving the YYYY-MM-DD bucket so tooltips line up with the lit calendar cell.
const TIMEZONE = process.env.GITHUB_TIMEZONE || "Asia/Kolkata";

function toLocalDateStr(iso: string): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(iso));
}

function mapLevel(level: string): number {
  switch (level) {
    case "FIRST_QUARTILE":
      return 1;
    case "SECOND_QUARTILE":
      return 2;
    case "THIRD_QUARTILE":
      return 3;
    case "FOURTH_QUARTILE":
      return 4;
    case "NONE":
    default:
      return 0;
  }
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || "LordAizen1";

  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN is not configured in environment variables." },
      { status: 400 }
    );
  }

  try {
    // Calculate the date exactly 1 year ago to filter GraphQL history
    const sinceDate = new Date();
    sinceDate.setFullYear(sinceDate.getFullYear() - 1);
    const sinceIso = sinceDate.toISOString();

    // 1. Fetch Calendar and Repository Commit History via GraphQL (filtering for last 12 months)
    const calendarPromise = fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { since: sinceIso },
      }),
      next: { revalidate: 600 }, // Cache calendar for 10 minutes
    }).then(async (res) => {
      if (!res.ok) throw new Error(`Calendar API status: ${res.status}`);
      return res.json();
    });

    // 2. Fetch Recent Public Events via REST (to get actual precise push timestamps for public activity)
    const eventsPromise = fetch(`https://api.github.com/users/${username}/events`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 300 }, // Cache events for 5 minutes
    }).then(async (res) => {
      if (!res.ok) throw new Error(`Events API status: ${res.status}`);
      return res.json();
    });

    // Run fetches concurrently
    const [calendarJson, eventsJson] = await Promise.all([calendarPromise, eventsPromise]);

    const calendar = calendarJson.data?.viewer?.contributionsCollection?.contributionCalendar;
    if (!calendar) {
      return NextResponse.json(
        { error: "Failed to parse calendar data from GitHub response.", raw: calendarJson },
        { status: 500 }
      );
    }

    // 3. Process Repository Commit History into Daily Commit Details Map
    const dailyCommitsMap: Record<string, any[]> = {};
    const repositories = calendarJson.data?.viewer?.repositories?.nodes || [];
    
    repositories.forEach((repo: any) => {
      const commits = repo.defaultBranchRef?.target?.history?.nodes || [];
      commits.forEach((commit: any) => {
        // Only count commits authored by the user. Forks / collaborator repos
        // (e.g. reductstore) carry upstream commits by other people on their own
        // dates; without this filter they pollute the graph on the wrong days.
        const authorLogin = commit.author?.user?.login;
        if (!authorLogin || authorLogin.toLowerCase() !== username.toLowerCase()) {
          return;
        }

        const dateStr = toLocalDateStr(commit.committedDate); // local YYYY-MM-DD
        if (!dailyCommitsMap[dateStr]) {
          dailyCommitsMap[dateStr] = [];
        }

        const shortSha = commit.oid.substring(0, 7);
        const exists = dailyCommitsMap[dateStr].some((c: any) => c.sha === shortSha);
        if (!exists) {
          dailyCommitsMap[dateStr].push({
            type: "commit",
            repo: repo.name,
            message: commit.message.split("\n")[0], // Keep commit message headline
            time: commit.committedDate,
            sha: shortSha,
          });
        }
      });
    });

    // Helper: record a non-commit activity (PR, merge, issue, review) on its day.
    const pushActivity = (event: any, kind: string, message: string) => {
      const dateStr = toLocalDateStr(event.created_at); // local YYYY-MM-DD
      if (!dailyCommitsMap[dateStr]) dailyCommitsMap[dateStr] = [];
      const repo = event.repo?.name?.split("/")[1] || event.repo?.name || "";
      const dup = dailyCommitsMap[dateStr].some(
        (c: any) => c.type === kind && c.message === message
      );
      if (!dup) {
        dailyCommitsMap[dateStr].push({ type: kind, repo, message, time: event.created_at });
      }
    };

    // 4. Process REST Events API (to overlay precise push times for recent events,
    //    plus non-commit activity: PRs opened/merged, issues opened, reviews).
    if (Array.isArray(eventsJson)) {
      eventsJson.forEach((event: any) => {
        if (event.type === "PushEvent" && event.payload?.commits) {
          const dateStr = toLocalDateStr(event.created_at); // local YYYY-MM-DD

          if (!dailyCommitsMap[dateStr]) {
            dailyCommitsMap[dateStr] = [];
          }

          event.payload.commits.forEach((commit: any) => {
            const shortSha = commit.sha.substring(0, 7);
            const exists = dailyCommitsMap[dateStr].some((c: any) => c.sha === shortSha);
            if (!exists) {
              dailyCommitsMap[dateStr].push({
                type: "commit",
                repo: event.repo.name.split("/")[1] || event.repo.name,
                message: commit.message.split("\n")[0],
                time: event.created_at, // Precise REST push time
                sha: shortSha,
              });
            } else {
              // Update with more precise push time from REST feed if available
              const existingIndex = dailyCommitsMap[dateStr].findIndex((c: any) => c.sha === shortSha);
              if (existingIndex !== -1) {
                dailyCommitsMap[dateStr][existingIndex].time = event.created_at;
              }
            }
          });
        } else if (event.type === "PullRequestEvent") {
          // PRs opened and PRs merged.
          const action = event.payload?.action;
          const pr = event.payload?.pull_request;
          const num = event.payload?.number ?? pr?.number;
          if (!pr || num == null) return;

          let kind: string | null = null;
          if (action === "opened" || action === "reopened") {
            kind = "pull_request";
          } else if (action === "merged" || (action === "closed" && pr.merged)) {
            // The user events feed reports merges as action "merged" (and returns a
            // slim PR object); the classic REST shape is action "closed" + merged=true.
            kind = "pull_request_merged";
          }
          if (!kind) return;

          // PR title is often absent for cross-repo PRs in the events feed; fall back to just "#num".
          pushActivity(event, kind, `#${num} ${pr.title || ""}`.trim());
        } else if (event.type === "IssuesEvent") {
          // Issues opened.
          const action = event.payload?.action;
          const issue = event.payload?.issue;
          if ((action === "opened" || action === "reopened") && issue) {
            pushActivity(event, "issue", `#${issue.number} ${issue.title || ""}`.trim());
          }
        } else if (event.type === "PullRequestReviewEvent") {
          // PR reviews submitted.
          const pr = event.payload?.pull_request;
          if (pr) {
            pushActivity(event, "review", `#${pr.number} ${pr.title || ""}`.trim());
          }
        }
      });
    }

    // 5. Sort each day's commits chronologically
    Object.keys(dailyCommitsMap).forEach((dateStr) => {
      dailyCommitsMap[dateStr].sort((a: any, b: any) => new Date(a.time).getTime() - new Date(b.time).getTime());
    });

    // 6. Map GraphQL weeks and inject real commit details
    const rawWeeks = calendar.weeks.slice(-52);
    const processedWeeks = rawWeeks.map((week: any, wIndex: number) => {
      const days = week.contributionDays.map((day: any) => {
        const dateStr = day.date; // "YYYY-MM-DD"
        return {
          date: dateStr,
          level: mapLevel(day.contributionLevel),
          commits: day.contributionCount,
          commitDetails: dailyCommitsMap[dateStr] || null, // Inject real commit times/messages!
        };
      });

      return {
        w: wIndex,
        days,
        totalContributions: days.reduce((sum: number, d: any) => sum + d.commits, 0),
      };
    });

    return NextResponse.json({
      total: calendar.totalContributions,
      weeks: processedWeeks,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error occurred." },
      { status: 500 }
    );
  }
}
