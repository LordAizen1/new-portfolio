"use client";

import { useEffect, useLayoutEffect, useState, useRef } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Newspaper, Brain, FileMagnifyingGlass, GitPullRequest } from "@phosphor-icons/react";

const SONGS = [
  {
    title: "Mine",
    artist: "Bazzi",
    album: "Cosmic",
    art: "/images/bazzi.webp",
    src: "https://res.cloudinary.com/dt5cfqfdm/video/upload/v1779111609/Mine_by_Bazzi_hzc49s.mp3"
  },
  {
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    art: "/images/theweeknd.webp",
    src: "https://res.cloudinary.com/dt5cfqfdm/video/upload/v1779111609/Save_Your_Tears_by_The_Weeknd_qebgyu.mp3"
  },
  {
    title: "I Tread Carefully with Fate",
    artist: "JJ Lin",
    album: "Single",
    art: "/images/jjling.webp",
    src: "https://res.cloudinary.com/dt5cfqfdm/video/upload/v1779111612/I_Tread_Carefully_with_Fate_by_JJ_Lin_nhidgk.mp3"
  }
];

const FALLBACK = {
    name: 'Maintenance & Learning',
    impact: 'keeping skills sharp',
    desc: 'Code reviews, exploring new frameworks, documentation, and exploratory spikes. The unglamorous hours that make everything else possible.',
    tech: ['Various'],
};

// Curated open source contributions (external projects).
const OSS_SUMMARY =
  "9 merged pull requests into external open source projects in July 2026, mostly parser and spec-compliance fixes in Rust and Zig systems tools. Bug reports also filed on BurntSushi/ripgrep and google/osv.dev.";

const OSS = [
  {
    repo: 'reductstore/reductstore',
    pr: '#1546',
    lang: 'Rust',
    desc: "Fixed parse_forwarded_for dropping client IPs from multi-hop RFC 7239 Forwarded headers in audit logs, plus $system bucket quota handling. Three merged PRs.",
    link: 'https://github.com/reductstore/reductstore/pull/1546',
  },
  {
    repo: 'rockorager/libvaxis',
    pr: '#353',
    lang: 'Zig',
    desc: "OSC parser read past a BEL terminator and consumed the next escape sequence, which could silently kill input. Reported and fixed.",
    link: 'https://github.com/rockorager/libvaxis/pull/353',
  },
  {
    repo: 'HaoboGu/rmk',
    pr: '#964',
    lang: 'Rust',
    desc: "VIA macro buffer trusted a host-supplied size byte, so an oversized write panicked out of bounds. Reported and fixed.",
    link: 'https://github.com/HaoboGu/rmk/pull/964',
  },
  {
    repo: 'ccbrown/iocraft',
    pr: '#214',
    lang: 'Rust',
    desc: "Corrected CSI final-byte classification and stripped DCS/APC/PM escape sequences leaking into rendered output.",
    link: 'https://github.com/ccbrown/iocraft/pull/214',
  },
  {
    repo: 'tombi-toml/tombi',
    pr: '#2024',
    lang: 'Rust',
    desc: "Date-time parsing rejected the valid leap second value 60; brought it in line with the TOML and RFC 3339 specs.",
    link: 'https://github.com/tombi-toml/tombi/pull/2024',
  },
  {
    repo: 'jdx/hk',
    pr: '#1071',
    lang: 'Rust',
    desc: "Conventional-commit check accepted empty and malformed scopes; tightened parsing to reject them.",
    link: 'https://github.com/jdx/hk/pull/1071',
  },
];

// Badge label + color per GitHub activity type shown in the day tooltip.
const ACTIVITY_META: Record<string, { label: string; color: string }> = {
  commit: { label: 'commit', color: '#3dd68c' },
  pull_request: { label: 'PR', color: '#58a6ff' },
  pull_request_merged: { label: 'merged', color: '#a371f7' },
  issue: { label: 'issue', color: '#f0883e' },
  review: { label: 'review', color: '#39c5cf' },
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



// Shared inner content for both the hover tooltip and the pinned card.
function PanelBody({ panel, dayIndex }: { panel: any; dayIndex: number | null }) {
  const day = panel && dayIndex !== null ? panel.days[dayIndex] : null;
  return (
    <>
      <div className="panel-week">
        {day
          ? day.date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })
          : panel?.dateStr || '-'}
      </div>

      {day && day.commitDetails && day.commitDetails.length > 0 ? (
        <>
          <div className="panel-name" style={{ fontSize: '20px', color: 'var(--accent)' }}>
            {day.commitDetails.length} {day.commitDetails.length === 1 ? 'Activity' : 'Activities'}
          </div>
          <div className="panel-desc" style={{ marginTop: '5px', fontSize: '11px', color: 'var(--ts)' }}>
            Real-time activity log for today:
          </div>
          <div className="commit-list">
            {day.commitDetails.map((c: any, cIdx: number) => {
              const timeStr = new Date(c.time).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              });
              const meta = ACTIVITY_META[c.type] || ACTIVITY_META.commit;
              return (
                <div key={cIdx} className="commit-item">
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="commit-time">{timeStr}</span>
                    <span
                      style={{
                        fontSize: '9px', fontFamily: 'var(--font-mono)', letterSpacing: '.04em',
                        textTransform: 'uppercase', padding: '1px 5px', borderRadius: '4px',
                        color: meta.color, border: `1px solid ${meta.color}55`,
                        background: `${meta.color}14`, flexShrink: 0,
                      }}
                    >
                      {meta.label}
                    </span>
                    <span className="commit-repo">[{c.repo}]</span>
                  </div>
                  <span className="commit-msg">{c.message}</span>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="panel-name">
            {day
              ? `${day.commits} ${day.commits === 1 ? 'Contribution' : 'Contributions'}`
              : panel?.name || '-'}
          </div>
          <div className="panel-impact">
            {day
              ? (day.commits > 0 ? "pushing direct to production" : "planning and deep research")
              : panel?.impact || '-'}
          </div>
          <div className="panel-desc">
            {day
              ? (day.commits > 0
                  ? `Logged ${day.commits} contributions on GitHub on this day. Detailed commit logs are stored in private repositories or secondary archives.`
                  : `No active code pushed on this day. Time spent on architecture, planning, and system research.`)
              : panel?.desc || '-'}
          </div>
          {!day && panel?.tech && (
            <div className="panel-tags">
              {panel.tech.map((t: string) => (
                <span key={t} className="ptag">{t}</span>
              ))}
            </div>
          )}
        </>
      )}

      <div className="panel-bottom" style={{ marginTop: 'auto', paddingTop: '15px' }}>
        <div>
          <div className="panel-commits-label">
            {dayIndex !== null ? 'day activity' : 'contributions this week'}
          </div>
          <div className="mini-bars">
            {panel?.days?.map((d: any, i: number) => (
              <div
                key={i}
                className={`mbar ${i === dayIndex ? 'peak' : ''}`}
                style={{
                  height: `${Math.max(3, Math.round((d.commits / panel.maxC) * 28))}px`,
                  background: i === dayIndex ? 'var(--accent)' : undefined
                }}
              />
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="panel-count">
            {dayIndex !== null ? panel.days[dayIndex].commits : (panel?.total || '-')}
          </div>
          <div className="panel-count-sub">
            {dayIndex !== null ? 'on this day' : 'this week'}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const [graphData, setGraphData] = useState<any[]>([]);
  const [graphError, setGraphError] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<any | null>(null);
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(null);
  const [cellRect, setCellRect] = useState<DOMRect | null>(null);
  const [pinned, setPinned] = useState<{ panel: any; dayIndex: number; rect: DOMRect } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);

  // Audio Player State & Logic
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songProgress, setSongProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const [titleX, setTitleX] = useState(0);
  const marqueeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clearTimers = () => {
      if (marqueeTimer.current) clearTimeout(marqueeTimer.current);
    };

    const run = () => {
      const el = titleRef.current;
      if (!el) return;
      el.style.width = 'max-content';
      const naturalWidth = el.offsetWidth;
      el.style.width = '';
      const constrainedWidth = el.offsetWidth;
      const shift = Math.max(0, naturalWidth - constrainedWidth);
      if (shift <= 0) { setTitleX(0); return; }

      setTitleX(0);
      marqueeTimer.current = setTimeout(() => {        // pause at start
        setTitleX(-shift);
        marqueeTimer.current = setTimeout(() => {      // hold at left
          setTitleX(0);
          marqueeTimer.current = setTimeout(run, 1200); // pause then repeat
        }, 2500);
      }, 1500);
    };

    clearTimers();
    run();
    window.addEventListener('resize', run);
    return () => { clearTimers(); window.removeEventListener('resize', run); };
  }, [currentSongIndex]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(SONGS[currentSongIndex].src);
    } else {
      audioRef.current.src = SONGS[currentSongIndex].src;
    }
    
    const audio = audioRef.current;
    
    const handleTimeUpdate = () => {
      if (audio.duration) {
        setSongProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    
    const handleEnded = () => {
      setCurrentSongIndex((prev) => (prev + 1) % SONGS.length);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    if (isPlaying) {
      audio.play().catch(e => {
        console.error("Audio play failed:", e);
        setIsPlaying(false);
      });
    }

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.play().catch(e => {
        console.error("Audio play failed:", e);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Pause when the user navigates away (component unmounts) or switches tabs/minimizes the window
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % SONGS.length);
  };
  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + SONGS.length) % SONGS.length);
  };
  const selectSong = (idx: number) => {
    setCurrentSongIndex(idx);
    setIsPlaying(true);
  };
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newProgress = (clickX / width);
    setSongProgress(newProgress * 100);
    
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = newProgress * audioRef.current.duration;
    }
  };

  useEffect(() => {
    async function loadGithubData() {
      const startTime = Date.now();
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("API responded with an error status.");
        const json = await res.json();
        
        const parsedWeeks = json.weeks.map((week: any) => {
          // Initialize a 7-day array to guarantee exactly 7 cells per column
          const alignedDays = Array(7).fill(null);
          
          week.days.forEach((day: any) => {
            // Safe local timezone-agnostic date parsing
            const parts = day.date.split("-");
            const dateObj = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
            const weekday = dateObj.getDay();
            alignedDays[weekday] = {
              date: dateObj,
              level: day.level,
              commits: day.commits,
              commitDetails: day.commitDetails, // Inject real commit timeline from endpoint
            };
          });

          // Pad any missing day slots (usually in the very first week)
          let firstValidDate: Date | null = null;
          let firstValidIndex = -1;
          for (let i = 0; i < 7; i++) {
            if (alignedDays[i]) {
              firstValidDate = alignedDays[i].date;
              firstValidIndex = i;
              break;
            }
          }

          for (let i = 0; i < 7; i++) {
            if (!alignedDays[i]) {
              let extrapolatedDate = new Date();
              if (firstValidDate && firstValidIndex !== -1) {
                extrapolatedDate = new Date(firstValidDate);
                extrapolatedDate.setDate(firstValidDate.getDate() - (firstValidIndex - i));
              }
              alignedDays[i] = {
                date: extrapolatedDate,
                level: 0,
                commits: 0,
                commitDetails: null,
              };
            }
          }

          // Derive real proj from top repo in this week's commits
          const repoCount: Record<string, number> = {};
          alignedDays.forEach((day: any) => {
            day?.commitDetails?.forEach((c: any) => {
              repoCount[c.repo] = (repoCount[c.repo] || 0) + 1;
            });
          });
          const topRepos = Object.entries(repoCount).sort((a, b) => b[1] - a[1]);
          const realProj = topRepos.length > 0 ? {
            name: topRepos[0][0],
            impact: topRepos.length > 1 ? `+${topRepos.length - 1} more repo${topRepos.length > 2 ? 's' : ''}` : 'active this week',
            desc: topRepos.map(([r]) => r).join(' · '),
            tech: [],
          } : null;

          return {
            w: week.w,
            days: alignedDays,
            proj: realProj,
          };
        });
        
        const elapsed = Date.now() - startTime;
        const delay = Math.max(0, 1200 - elapsed);
        setTimeout(() => {
          setGraphError(null);
          setGraphData(parsedWeeks.slice(-35)); // Slice to last 35 weeks (approx. 8 months) for high density
        }, delay);
      } catch (err) {
        // No fabricated data: show an honest empty state instead.
        console.error("GitHub activity could not be loaded.", err);
        const elapsed = Date.now() - startTime;
        const delay = Math.max(0, 1200 - elapsed);
        setTimeout(() => {
          setGraphData([]);
          setGraphError(err instanceof Error ? err.message : "unknown error");
        }, delay);
      }
    }

    loadGithubData();

    const handleResize = () => {
      if (panelRef.current) {
        if (window.innerWidth < 900) {
          panelRef.current.style.display = 'none';
        } else {
          panelRef.current.style.display = '';
        }
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Build the panel data object for a week column.
  const buildPanel = (w: number, days: any[], proj: any) => {
    const p = proj || FALLBACK;
    const fd = days.find((d: any) => d.date) || days[0];
    const total = days.reduce((s: number, d: any) => s + d.commits, 0);
    const maxC = Math.max(...days.map((d: any) => d.commits), 1);
    return {
      week: w,
      dateStr: `Week of ${fd.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
      name: p.name,
      impact: p.impact,
      desc: p.desc,
      tech: p.tech,
      total,
      days,
      maxC,
    };
  };

  const openPanel = (w: number, days: any[], proj: any) => {
    setActivePanel(buildPanel(w, days, proj));
    setActiveDayIndex(null); // Reset day focus on new week hover
  };

  const closePanel = () => {
    setActivePanel(null);
    setActiveDayIndex(null);
    setCellRect(null);
  };

  // Position a card next to its anchor cell, flipping/clamping to stay on-screen.
  const positionCard = (el: HTMLDivElement | null, rect: DOMRect | null) => {
    if (!el || !rect) return;
    if (typeof window !== "undefined" && window.innerWidth < 900) return; // mobile: cards hidden
    const pad = 12;
    const gap = 12;
    const pw = el.offsetWidth;
    const ph = el.offsetHeight;

    let left = rect.right + gap;
    if (left + pw > window.innerWidth - pad) left = rect.left - gap - pw;
    left = Math.max(pad, Math.min(left, window.innerWidth - pw - pad));

    let top = rect.top + rect.height / 2 - ph / 2;
    top = Math.max(pad, Math.min(top, window.innerHeight - ph - pad));

    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
  };

  // Hover tooltip follows the hovered cell.
  useLayoutEffect(() => {
    if (activePanel) positionCard(panelRef.current, cellRect);
  }, [cellRect, activePanel, activeDayIndex]);

  // Pinned card is positioned once against the clicked cell's rect.
  useLayoutEffect(() => {
    if (pinned) positionCard(pinnedRef.current, pinned.rect);
  }, [pinned]);

  // Dismiss the pinned card on Escape or on a click/tap outside it.
  useEffect(() => {
    if (!pinned) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPinned(null); };
    const onDown = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (pinnedRef.current?.contains(el)) return; // clicking inside the card
      if (el?.closest?.(".cell")) return;           // clicking another cell re-pins
      setPinned(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [pinned]);

  return (
    <>
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-eyebrow">software development engineer</div>
          <h1 className="hero-name">Mohammad <em>Kaif</em></h1>
          <p className="hero-tagline">
            I build high-throughput distributed systems and clean interfaces, shipping
            reliable, well-observed software and AI agents at scale.
          </p>
          <div className="hero-stats">
            <div className="stat"><span className="stat-val">14+</span><span className="stat-label">projects shipped</span></div>
            <div className="stat">
              <Link href="/experience" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="stat-val" style={{ borderBottom: '1px dashed var(--accent)', cursor: 'pointer' }}>4</span>
              </Link>
              <span className="stat-label">paid contracts</span>
            </div>
            <div className="stat"><span className="stat-val">'26</span><span className="stat-label">CS @ IIIT-Delhi</span></div>
          </div>
        </section>

        {/* Graph */}
        <section className="graph-section" id="graph">
          <div className="sec-head">
            <span className="sec-label">245 days of shipping</span>
            <div className="sec-line"></div>
          </div>
          <p className="graph-hint">
            <span className="hint-dot"></span>
            hover any cell to preview — click to pin a card you can scroll
          </p>
          <div className="graph-scroll" onMouseLeave={closePanel}>
            <div className="graph-container">
              <div className="month-row">
                {graphData.length === 0 ? (
                  <div
                    className="month-lbl"
                    style={{
                      opacity: graphError ? 0.5 : 0.35,
                      animation: graphError ? undefined : 'pulseText 1.6s infinite',
                      textTransform: 'lowercase',
                      letterSpacing: '.06em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {graphError ? 'activity unavailable — could not load GitHub data' : 'loading shipping history...'}
                  </div>
                ) : (
                  graphData.map(({ days }, i) => {
                    const m = days[0].date.getMonth();
                    const prevM = i > 0 ? graphData[i - 1].days[0].date.getMonth() : -1;
                    const show = i === 0 || m !== prevM;
                    return (
                      <div key={i} className="month-lbl">
                        {show ? MONTHS[m] : ''}
                      </div>
                    );
                  })
                )}
              </div>
              <div className="graph-body">
                <div className="day-col">
                  <div className="day-lbl"></div>
                  <div className="day-lbl">Mon</div>
                  <div className="day-lbl"></div>
                  <div className="day-lbl">Wed</div>
                  <div className="day-lbl"></div>
                  <div className="day-lbl">Fri</div>
                  <div className="day-lbl"></div>
                </div>
                <div className="graph-grid">
                  {graphData.length === 0 ? (
                    // Loading: shimmer. Error: flat empty grid (never fabricated data).
                    Array.from({ length: 35 }).map((_, wIdx) => (
                      <div key={wIdx} className="week-col">
                        {Array.from({ length: 7 }).map((_, dIdx) => (
                          <div
                            key={dIdx}
                            className={`cell ${graphError ? '' : 'pulse-cell'}`}
                            data-l={graphError ? 0 : undefined}
                            style={graphError ? undefined : { animationDelay: `${wIdx * 35 + dIdx * 10}ms` }}
                          />
                        ))}
                      </div>
                    ))
                  ) : (
                    graphData.map(({ w, days, proj }) => (
                      <div 
                        key={w} 
                        className={`week-col ${activePanel?.week === w ? 'lit' : ''}`}
                        onMouseEnter={() => openPanel(w, days, proj)}
                      >
                        {days.map((d: any, i: number) => {
                          const isFuture = d.date > new Date();
                          return (
                            <div
                              key={i}
                              className={`cell ${((activePanel?.week === w && activeDayIndex === i) || (pinned?.panel.week === w && pinned?.dayIndex === i)) ? 'lit-day' : ''} ${isFuture ? 'future' : ''}`}
                              data-l={d.level}
                              style={isFuture ? undefined : { cursor: 'pointer' }}
                              title={isFuture ? undefined : `${d.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}: ${d.commits} commit${d.commits !== 1 ? 's' : ''}`}
                              onMouseEnter={(e) => {
                                if (isFuture) return;
                                e.stopPropagation();
                                setActiveDayIndex(i);
                                setCellRect(e.currentTarget.getBoundingClientRect());
                              }}
                              onClick={(e) => {
                                if (isFuture) return;
                                e.stopPropagation();
                                setPinned({
                                  panel: buildPanel(w, days, proj),
                                  dayIndex: i,
                                  rect: e.currentTarget.getBoundingClientRect(),
                                });
                              }}
                            />
                          );
                        })}
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="graph-footer">
                <span className="graph-range">Last 245 Days</span>
                <div className="legend">
                  <span>Less</span>
                  <div className="legend-cells">
                    <div className="lcell" style={{background: 'var(--g0)'}}></div>
                    <div className="lcell" style={{background: 'var(--g1)'}}></div>
                    <div className="lcell" style={{background: 'var(--g2)'}}></div>
                    <div className="lcell" style={{background: 'var(--g3)'}}></div>
                    <div className="lcell" style={{background: 'var(--g4)'}}></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section className="work-section" id="work">
          <div className="sec-head">
            <span className="sec-label">featured work</span>
            <div className="sec-line"></div>
          </div>
          <div className="projects-grid">
            
            <div className="pcard feat">
              <div className="pcard-top">
                <div className="pcard-icon" style={{background: '#0e4429'}}>
                  <Newspaper size={20} weight="duotone" color="#3dd68c" />
                </div>
                <div className="pcard-actions">
                  <a className="pcard-link" href="https://github.com/LordAizen1/git-newspaper" target="_blank" rel="noopener noreferrer">github →</a>
                </div>
              </div>
              <div className="pcard-name">git-newspaper</div>
              <div className="pcard-desc">CLI that turns any git repo's history into a Victorian broadsheet newspaper. Hundreds of stars and trending on Reddit within 24 hours. Zero LLM dependency.</div>
              <div className="pcard-meta">
                <div className="pcard-stack">
                  <span className="pstack-tag">Node.js</span><span className="pstack-tag">·</span>
                  <span className="pstack-tag">CLI</span><span className="pstack-tag">·</span>
                  <span className="pstack-tag">npm</span>
                </div>
              </div>
            </div>

            <div className="pcard feat">
              <div className="pcard-top">
                <div className="pcard-icon" style={{background: '#1a1035'}}>
                  <Brain size={20} weight="duotone" color="#c084fc" />
                </div>
                <div className="pcard-actions">
                  <a className="pcard-link" href="https://github.com/LordAizen1/opencode-evermemos-plugin" target="_blank" rel="noopener noreferrer">github →</a>
                </div>
              </div>
              <div className="pcard-name">EverMemOS Plugin</div>
              <div className="pcard-desc">OpenCode plugin implementing durable structured memory, featuring passive capture, automatic recall, and git-scoped episodic/profile/foresight memory across coding sessions.</div>
              <div className="pcard-meta">
                <div className="pcard-stack">
                  <span className="pstack-tag">TypeScript</span><span className="pstack-tag">·</span>
                  <span className="pstack-tag">OpenCode</span><span className="pstack-tag">·</span>
                  <span className="pstack-tag">LLMs</span>
                </div>
              </div>
            </div>

            <div className="pcard">
              <div className="pcard-top">
                <div className="pcard-icon" style={{background: '#1a0b0b'}}>
                  <FileMagnifyingGlass size={20} weight="duotone" color="#f87171" />
                </div>
                <div className="pcard-actions">
                  <a className="pcard-link" href="https://github.com/LordAizen1/llamaindex-rag-app" target="_blank" rel="noopener noreferrer">github →</a>
                </div>
              </div>
              <div className="pcard-name">LlamaIndex RAG App</div>
              <div className="pcard-desc">Document Q&A over uploaded PDF/DOCX/Markdown with expandable source citations and a hallucination guard. Hits 100% retrieval and 92-96% answer accuracy across chunking configs.</div>
              <div className="pcard-meta">
                <div className="pcard-stack">
                  <span className="pstack-tag">FastAPI</span><span className="pstack-tag">·</span>
                  <span className="pstack-tag">LlamaIndex</span><span className="pstack-tag">·</span>
                  <span className="pstack-tag">ChromaDB</span>
                </div>
              </div>
            </div>

          </div>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/projects" style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '.08em', fontFamily: 'var(--font-mono)' }}>
              view all projects →
            </Link>
          </div>
        </section>

        {/* Open Source */}
        <section className="work-section" id="open-source">
          <div className="sec-head">
            <span className="sec-label">open source</span>
            <div className="sec-line"></div>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--ts)', margin: '0 0 2rem', lineHeight: '1.8' }}>
            {OSS_SUMMARY}
          </p>
          <div className="projects-grid">
            {OSS.map((o) => (
              <div key={o.repo} className="pcard">
                <div className="pcard-top">
                  <div className="pcard-icon" style={{ background: '#1a1035' }}>
                    <GitPullRequest size={20} weight="duotone" color="#c084fc" />
                  </div>
                  <a className="pcard-link" href={o.link} target="_blank" rel="noopener noreferrer">
                    {o.pr} →
                  </a>
                </div>
                <div className="pcard-name">{o.repo}</div>
                <div className="pcard-desc">{o.desc}</div>
                <div className="pcard-meta">
                  <div className="pcard-stack">
                    <span className="pstack-tag">{o.lang}</span>
                    <span className="pstack-tag" style={{ margin: '0 4px' }}>·</span>
                    <span className="pstack-tag">merged</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="skills-section" id="skills">
          <div className="sec-head">
            <span className="sec-label">capabilities</span>
            <div className="sec-line"></div>
          </div>
          <div className="skills-grid">
            <div className="sgroup">
              <div className="sgroup-name">ai engineering</div>
              <ul className="slist">
                <li className="sitem"><span className="sdot"></span>LLM Agent Architectures</li>
                <li className="sitem"><span className="sdot"></span>RAG & Tool Planning (MCTS)</li>
                <li className="sitem"><span className="sdot"></span>OpenAI / Gemini / Claude</li>
                <li className="sitem"><span className="sdot"></span>LangGraph / LangChain</li>
              </ul>
            </div>
            <div className="sgroup">
              <div className="sgroup-name">full-stack dev</div>
              <ul className="slist">
                <li className="sitem"><span className="sdot"></span>TypeScript / Next.js / React</li>
                <li className="sitem"><span className="sdot"></span>Node.js / FastAPI</li>
                <li className="sitem"><span className="sdot"></span>Tailwind CSS / Framer Motion</li>
                <li className="sitem"><span className="sdot"></span>PostgreSQL / Prisma</li>
              </ul>
            </div>
            <div className="sgroup">
              <div className="sgroup-name">projects & os</div>
              <ul className="slist">
                <li className="sitem"><span className="sdot"></span>14+ Projects Built</li>
                <li className="sitem"><span className="sdot"></span>4 Paid Contracts Completed</li>
                <li className="sitem"><span className="sdot"></span>npm Packages Published</li>
                <li className="sitem"><span className="sdot"></span>9 Merged OSS Pull Requests</li>
              </ul>
            </div>
            <div className="sgroup">
              <div className="sgroup-name">infrastructure</div>
              <ul className="slist">
                <li className="sitem"><span className="sdot"></span>Docker</li>
                <li className="sitem"><span className="sdot"></span>GitHub Actions (CI/CD)</li>
                <li className="sitem"><span className="sdot"></span>AWS / Cloud Platforms</li>
                <li className="sitem"><span className="sdot"></span>Linux / Bash</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Behind the Code (Analog Life & Music) */}
        <section className="analog-section" id="about">
          <div className="sec-head">
            <span className="sec-label">behind the code</span>
            <div className="sec-line"></div>
          </div>
          
          <div className="analog-grid">
            <div className="analog-intro">
              <h3 className="analog-title">Building engines by day, living life by night.</h3>
              <p className="analog-text">
                I am not just an AI developer who writes code all day. Beyond the terminal, I'm a deeply curious person who loves exploring different worlds - whether that's through immersive games, spending time with friends, or just petting every cat I see.
              </p>
              <div className="personal-quirks">
                <div className="quirk">
                  <span className="q-icon">🎮</span>
                  <div className="q-content">
                    <span className="q-title">immersive gaming</span>
                    <span className="q-desc">Balancing deep narrative-driven story games, high-stakes FPS, and competitive racing simulators.</span>
                  </div>
                </div>
                <div className="quirk">
                  <span className="q-icon">🐾</span>
                  <div className="q-content">
                    <span className="q-title">feline enthusiast</span>
                    <span className="q-desc">A proud cat lover with an undeniable soft spot for every stray in the neighborhood.</span>
                  </div>
                </div>
                <div className="quirk">
                  <span className="q-icon">🌆</span>
                  <div className="q-content">
                    <span className="q-title">social exploration</span>
                    <span className="q-desc">Always down to log off, hit the city, and make great memories hanging out with friends.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Music Widget */}
            <div className="vertical-player-card">
              <div className={`vp-art-container ${isPlaying ? 'playing' : ''}`}>
                <img 
                  src={SONGS[currentSongIndex].art} 
                  alt={SONGS[currentSongIndex].title} 
                  className="vp-art"
                />
              </div>
              
              <div className="vp-body">
                <div className="vp-info">
                  <span
                    ref={titleRef}
                    className="vp-title"
                    style={{ transform: `translateX(${titleX}px)`, transition: titleX !== 0 ? 'transform 1.5s ease-in-out' : 'transform 1.2s ease-in-out' }}
                  >{SONGS[currentSongIndex].title}</span>
                  <span className="vp-artist">{SONGS[currentSongIndex].artist}</span>
                </div>
                
                <div className="vp-controls">
                  <button className="vp-btn" onClick={prevSong} aria-label="Previous">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="19 20 9 12 19 4 19 20" fill="currentColor"/>
                      <line x1="5" y1="5" x2="5" y2="19"/>
                    </svg>
                  </button>
                  <button className="vp-btn vp-play" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
                    {isPlaying ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                        <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "2px" }}>
                        <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
                      </svg>
                    )}
                  </button>
                  <button className="vp-btn" onClick={nextSong} aria-label="Next">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 4 15 12 5 20 5 4" fill="currentColor"/>
                      <line x1="19" y1="5" x2="19" y2="19"/>
                    </svg>
                  </button>
                </div>
                
                <div className="vp-progress-bar-container" onClick={handleProgressClick}>
                  <div className="vp-progress-fill" style={{ width: `${songProgress}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact-section" id="contact">
          <div className="sec-head">
            <span className="sec-label">get in touch</span>
            <div className="sec-line"></div>
          </div>
          <div className="contact-inner">
            <h2 className="contact-heading">Let's build<br/><em>something</em> together.</h2>
            <p className="contact-sub">Open to internships, full-time roles, and interesting projects.</p>
            <div className="contact-links">
              <a className="clink" href="mailto:mohdkaif2003@gmail.com">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
                mohdkaif2003@gmail.com
              </a>
              <a className="clink" href="https://github.com/LordAizen1" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
              <a className="clink" href="https://www.linkedin.com/in/mohammadkaif007/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Hover tooltip (non-interactive preview) */}
      <div
        ref={panelRef}
        className={`panel ${activePanel ? 'open' : ''}`}
        id="panel"
      >
        <PanelBody panel={activePanel} dayIndex={activeDayIndex} />
      </div>

      {/* Pinned card (opens on click, interactive & scrollable) */}
      <div
        ref={pinnedRef}
        className={`panel panel-pinned ${pinned ? 'open' : ''}`}
      >
        <button className="panel-close" aria-label="Close" onClick={() => setPinned(null)}>×</button>
        {pinned && <PanelBody panel={pinned.panel} dayIndex={pinned.dayIndex} />}
      </div>
    </>
  );
}
