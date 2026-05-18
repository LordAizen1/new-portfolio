import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

const query = `
  query($username: String!, $since: GitTimestamp!) {
    user(login: $username) {
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
      repositories(first: 35, ownerAffiliations: OWNER, orderBy: {field: PUSHED_AT, direction: DESC}) {
        nodes {
          name
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 100, since: $since) {
                  nodes {
                    message
                    committedDate
                    oid
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
        variables: { 
          username,
          since: sinceIso
        },
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

    const calendar = calendarJson.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) {
      return NextResponse.json(
        { error: "Failed to parse calendar data from GitHub response.", raw: calendarJson },
        { status: 500 }
      );
    }

    // 3. Process Repository Commit History into Daily Commit Details Map
    const dailyCommitsMap: Record<string, any[]> = {};
    const repositories = calendarJson.data?.user?.repositories?.nodes || [];
    
    repositories.forEach((repo: any) => {
      const commits = repo.defaultBranchRef?.target?.history?.nodes || [];
      commits.forEach((commit: any) => {
        const dateStr = commit.committedDate.split("T")[0]; // YYYY-MM-DD
        if (!dailyCommitsMap[dateStr]) {
          dailyCommitsMap[dateStr] = [];
        }

        const shortSha = commit.oid.substring(0, 7);
        const exists = dailyCommitsMap[dateStr].some((c: any) => c.sha === shortSha);
        if (!exists) {
          dailyCommitsMap[dateStr].push({
            repo: repo.name,
            message: commit.message.split("\n")[0], // Keep commit message headline
            time: commit.committedDate,
            sha: shortSha,
          });
        }
      });
    });

    // 4. Process REST Events API (to overlay precise push times for recent events)
    if (Array.isArray(eventsJson)) {
      eventsJson.forEach((event: any) => {
        if (event.type === "PushEvent" && event.payload?.commits) {
          const dateStr = event.created_at.split("T")[0]; // YYYY-MM-DD
          
          if (!dailyCommitsMap[dateStr]) {
            dailyCommitsMap[dateStr] = [];
          }

          event.payload.commits.forEach((commit: any) => {
            const shortSha = commit.sha.substring(0, 7);
            const exists = dailyCommitsMap[dateStr].some((c: any) => c.sha === shortSha);
            if (!exists) {
              dailyCommitsMap[dateStr].push({
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
