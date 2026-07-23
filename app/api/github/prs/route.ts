import { NextResponse } from "next/server";

// Run per-request so env vars are read at request time, never baked in at build.
export const dynamic = "force-dynamic";

// Latest merged pull requests authored by the user on EXTERNAL repos
// (their own repos are excluded via -user:<username>).
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
    const q = `is:pr author:${username} is:merged -user:${username}`;
    const res = await fetch(
      `https://api.github.com/search/issues?q=${encodeURIComponent(q)}&sort=updated&order=desc&per_page=3`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 1800 }, // Cache for 30 minutes
      }
    );
    if (!res.ok) throw new Error(`Search API status: ${res.status}`);
    const json = await res.json();

    const prs = (json.items || []).map((it: any) => ({
      repo: it.repository_url.replace("https://api.github.com/repos/", ""),
      number: it.number,
      title: it.title,
      url: it.html_url,
      mergedAt: it.pull_request?.merged_at || it.closed_at || null,
    }));

    return NextResponse.json({ total: json.total_count ?? prs.length, prs });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error occurred." },
      { status: 500 }
    );
  }
}
