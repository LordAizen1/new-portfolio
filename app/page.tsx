"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Newspaper, Brain, FileMagnifyingGlass } from "@phosphor-icons/react";

// --- Data ---
const PROJECTS = [
  {
    name: 'git-newspaper',
    impact: 'trending on Reddit within 24 hours',
    desc: 'CLI that turns any git repo\'s history into a Victorian broadsheet newspaper. Hundreds of stars. Zero LLM dependency.',
    tech: ['Node.js', 'CLI', 'npm'],
    weeks: [0, 1, 2, 3, 4, 5, 6, 7], hi: 4
  },
  {
    name: 'EverMemOS Plugin',
    impact: 'durable structured memory for OpenCode',
    desc: 'OpenCode plugin implementing durable structured memory, featuring passive capture, automatic recall, and git-scoped episodic/profile/foresight memory across coding sessions.',
    tech: ['TypeScript', 'OpenCode', 'LLM Memory'],
    weeks: [8, 9, 10, 11, 12, 13, 14, 15], hi: 3
  },
  {
    name: 'LlamaIndex RAG App',
    impact: '100% retrieval, 92-96% answer accuracy',
    desc: 'Document Q&A over uploaded PDF/DOCX/Markdown with expandable source citations, streaming responses, and a hallucination guard that admits when the answer isn\'t in the docs.',
    tech: ['FastAPI', 'LlamaIndex', 'ChromaDB'],
    weeks: [16, 17, 18, 19, 20, 21, 22], hi: 4
  },
  {
    name: 'AI Engineering & Agents',
    impact: 'RAG & Tool Planning',
    desc: 'Deep dives into LLM Agent Architectures, MCTS for tool planning, and building custom autonomous workflows using various APIs.',
    tech: ['OpenAI', 'Gemini', 'LangChain'],
    weeks: [23, 24, 25, 26, 27, 28, 29, 30], hi: 3
  },
  {
    name: 'Full-Stack Applications',
    impact: 'High-performance interactive web',
    desc: 'Building responsive, beautifully animated frontend applications using React and Next.js, backed by robust FastAPI and PostgreSQL services.',
    tech: ['React', 'Next.js', 'FastAPI'],
    weeks: [31, 32, 33, 34, 35, 36, 37, 38], hi: 3
  },
  {
    name: 'Open Source Contributions',
    impact: '14+ Projects Built',
    desc: 'Publishing npm packages, fixing upstream bugs, and maintaining a healthy open source presence.',
    tech: ['OSS', 'TypeScript', 'Python'],
    weeks: [39, 40, 41, 42, 43, 44, 45], hi: 2
  },
  {
    name: 'IIIT-Delhi Academics',
    impact: 'CS Class of 2026',
    desc: 'Core computer science coursework, research projects, and university assignments.',
    tech: ['C++', 'Python', 'Algorithms'],
    weeks: [46, 47, 48, 49, 50, 51], hi: 3
  },
];

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

const weekMap: Record<number, any> = {};
PROJECTS.forEach(p => p.weeks.forEach(w => weekMap[w] = p));

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function genData() {
    const data = [];
    const now = new Date();
    const start = new Date();
    start.setFullYear(start.getFullYear() - 1);
    // backtrack to nearest Sunday
    while (start.getDay() !== 0) start.setDate(start.getDate() - 1);

    for (let w = 0; w < 52; w++) {
        const proj = weekMap[w];
        const hi = proj ? proj.hi : 1;
        const days = [];
        for (let d = 0; d < 7; d++) {
            const date = new Date(start);
            date.setDate(date.getDate() + w * 7 + d);
            if (date > now) { days.push({ date, level: 0, commits: 0, commitDetails: null }); continue; }
            const isWE = d === 0 || d === 6;
            const r = Math.random();
            let level;
            if (isWE) {
                level = r < .45 ? 0 : r < .72 ? 1 : r < .9 ? 2 : 3;
            } else {
                level = r < .06 ? 0 : r < .22 ? 1 : r < .48 ? 2 : r < .78 ? 3 : 4;
            }
            if (proj && level > 0) level = Math.min(4, level + Math.floor(hi / 2));
            const commits = level === 0 ? 0 : level * 3 + Math.floor(Math.random() * 6);
            
            const commitDetails = [];
            if (commits > 0) {
              const projName = proj ? proj.name : 'Maintenance';
              for (let c = 0; c < commits; c++) {
                const hour = Math.floor(Math.random() * 12) + 9; // 9 AM to 9 PM
                const min = Math.floor(Math.random() * 60);
                const mockDate = new Date(date);
                mockDate.setHours(hour, min);
                commitDetails.push({
                  repo: projName.toLowerCase().replace(/\s+/g, '-'),
                  message: c === 0 ? `feat: initialize core pipeline for ${projName}` : `refactor: optimize ${projName} modules`,
                  time: mockDate.toISOString(),
                  sha: Math.random().toString(16).substring(2, 9)
                });
              }
            }

            days.push({ date, level, commits, commitDetails });
        }
        data.push({ w, days, proj });
    }
    return data;
}

export default function Home() {
  const [graphData, setGraphData] = useState<any[]>([]);
  const [activePanel, setActivePanel] = useState<any | null>(null);
  const [activeDayIndex, setActiveDayIndex] = useState<number | null>(null);
  const [panelSide, setPanelSide] = useState<'left' | 'right'>('right');
  const panelRef = useRef<HTMLDivElement>(null);

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
          setGraphData(parsedWeeks.slice(-35)); // Slice to last 35 weeks (approx. 8 months) for high density
        }, delay);
      } catch (err) {
        console.warn("GitHub API not configured or failed. Falling back to simulated data.", err);
        const elapsed = Date.now() - startTime;
        const delay = Math.max(0, 1200 - elapsed);
        setTimeout(() => {
          setGraphData(genData().slice(-35));
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

  const openPanel = (w: number, days: any[], proj: any) => {
    const p = proj || FALLBACK;
    const fd = days.find((d: any) => d.date) || days[0];
    const total = days.reduce((s: number, d: any) => s + d.commits, 0);
    const maxC = Math.max(...days.map((d: any) => d.commits), 1);
    
    setActivePanel({
      week: w,
      dateStr: `Week of ${fd.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
      name: p.name,
      impact: p.impact,
      desc: p.desc,
      tech: p.tech,
      total,
      days,
      maxC
    });
    setActiveDayIndex(null); // Reset day focus on new week hover
    
    // Slide panel in from left if cursor is on the right half, preventing cursor overlap & flickering!
    if (w > 26) {
      setPanelSide('left');
    } else {
      setPanelSide('right');
    }
  };

  const closePanel = () => {
    setActivePanel(null);
    setActiveDayIndex(null);
  };

  const activeDay = activePanel && activeDayIndex !== null ? activePanel.days[activeDayIndex] : null;

  return (
    <>
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-eyebrow">software engineer</div>
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
            hover any cell to see exactly what shipped each day
          </p>
          <div className="graph-scroll" onMouseLeave={closePanel}>
            <div className="graph-container">
              <div className="month-row">
                {graphData.length === 0 ? (
                  <div className="month-lbl" style={{ opacity: 0.35, animation: 'pulseText 1.6s infinite', textTransform: 'lowercase', letterSpacing: '.06em' }}>
                    loading shipping history...
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
                    Array.from({ length: 35 }).map((_, wIdx) => (
                      <div key={wIdx} className="week-col">
                        {Array.from({ length: 7 }).map((_, dIdx) => (
                          <div 
                            key={dIdx} 
                            className="cell pulse-cell" 
                            style={{ 
                              animationDelay: `${wIdx * 35 + dIdx * 10}ms` 
                            }}
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
                              className={`cell ${activePanel?.week === w && activeDayIndex === i ? 'lit-day' : ''} ${isFuture ? 'future' : ''}`} 
                              data-l={d.level}
                              title={isFuture ? undefined : `${d.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}: ${d.commits} commit${d.commits !== 1 ? 's' : ''}`}
                              onMouseEnter={(e) => {
                                if (isFuture) return;
                                e.stopPropagation();
                                setActiveDayIndex(i);
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
                <li className="sitem"><span className="sdot"></span>Open Source Contributor</li>
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

      {/* Floating info panel */}
      <div 
        ref={panelRef} 
        className={`panel ${activePanel ? 'open' : ''} ${panelSide}`} 
        id="panel"
      >
        <div className="panel-week">
          {activeDay 
            ? activeDay.date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }) 
            : activePanel?.dateStr || '-'}
        </div>
        
        {activeDay && activeDay.commitDetails && activeDay.commitDetails.length > 0 ? (
          <>
            <div className="panel-name" style={{ fontSize: '20px', color: 'var(--accent)' }}>
              {activeDay.commits} {activeDay.commits === 1 ? 'Commit' : 'Commits'} Shipped
            </div>
            <div className="panel-desc" style={{ marginTop: '5px', fontSize: '11px', color: 'var(--ts)' }}>
              Real-time activity log for today:
            </div>
            <div className="commit-list">
              {activeDay.commitDetails.map((c: any, cIdx: number) => {
                const timeStr = new Date(c.time).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                });
                return (
                  <div key={cIdx} className="commit-item">
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span className="commit-time">{timeStr}</span>
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
              {activeDay 
                ? `${activeDay.commits} ${activeDay.commits === 1 ? 'Commit' : 'Commits'}`
                : activePanel?.name || '-'}
            </div>
            <div className="panel-impact">
              {activeDay 
                ? (activeDay.commits > 0 ? "pushing direct to production" : "planning and deep research")
                : activePanel?.impact || '-'}
            </div>
            <div className="panel-desc">
              {activeDay 
                ? (activeDay.commits > 0 
                    ? `Logged ${activeDay.commits} contributions on GitHub on this day. Detailed commit logs are stored in private repositories or secondary archives.` 
                    : `No active code pushed on this day. Time spent on architecture, planning, and system research.`)
                : activePanel?.desc || '-'}
            </div>
            {!activeDay && activePanel?.tech && (
              <div className="panel-tags">
                {activePanel.tech.map((t: string) => (
                  <span key={t} className="ptag">{t}</span>
                ))}
              </div>
            )}
          </>
        )}

        <div className="panel-bottom" style={{ marginTop: 'auto', paddingTop: '15px' }}>
          <div>
            <div className="panel-commits-label">
              {activeDayIndex !== null ? 'hovering day activity' : 'commits this week'}
            </div>
            <div className="mini-bars">
              {activePanel?.days?.map((d: any, i: number) => (
                <div 
                  key={i} 
                  className={`mbar ${i === activeDayIndex ? 'peak' : ''}`}
                  style={{ 
                    height: `${Math.max(3, Math.round((d.commits / activePanel.maxC) * 28))}px`,
                    background: i === activeDayIndex ? 'var(--accent)' : undefined
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{textAlign: 'right'}}>
            <div className="panel-count">
              {activeDayIndex !== null ? activePanel.days[activeDayIndex].commits : (activePanel?.total || '-')}
            </div>
            <div className="panel-count-sub">
              {activeDayIndex !== null ? 'on this day' : 'this week'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
