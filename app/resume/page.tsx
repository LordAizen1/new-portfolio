import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Mohammad Kaif - Full-stack engineer with production experience across healthcare and travel tech.",
};

const ArrowUpRight = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '2px' }}>
    <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="white"/>
  </svg>
);

const IBMLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1F70C1">
    <path d="M23.544 15.993c.038 0 .06-.017.06-.053v-.036c0-.035-.022-.052-.06-.052h-.09v.14zm-.09.262h-.121v-.498h.225c.112 0 .169.066.169.157 0 .079-.036.129-.09.15l.111.19h-.133l-.092-.17h-.07zm.434-.222v-.062c0-.2-.157-.357-.363-.357a.355.355 0 00-.363.357v.062c0 .2.156.358.363.358a.355.355 0 00.363-.358zm-.838-.03c0-.28.212-.492.475-.492.264 0 .475.213.475.491 0 .279-.211.491-.475.491a.477.477 0 01-.475-.49zM16.21 8.13l-.216-.624h-3.56v.624zm.413 1.19l-.216-.623h-3.973v.624zm2.65 7.147h3.107v-.624h-3.108zm0-1.192h3.107v-.623h-3.108zm0-1.19h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-3.555l-.175.504-.175-.504h-3.555v.624h1.865v-.574l.2.574h3.33l.2-.574zm1.864-1.815h-3.142l-.217.624h3.359zm-7.46 3.006h1.865v-.624h-1.865zm0 1.19h1.865v-.623h-1.865zm-1.243 1.191h3.108v-.623h-3.108zm0 1.192h3.108v-.624h-3.108zm6.386-8.961l-.216.624h3.776v-.624zm-.629 1.815h4.19v-.624h-3.974zm-4.514 1.19h3.359l-.216-.623h-3.143zm2.482 2.383h2.496l.218-.624h-2.932zm.417 1.19h1.662l.218-.623h-2.098zm.416 1.191h.83l.218-.623h-1.266zm.414 1.192l.217-.624h-.432zm-12.433-.006l4.578.006c.622 0 1.18-.237 1.602-.624h-6.18zm4.86-3v.624h2.092c0-.216-.03-.425-.083-.624zm-3.616.624h1.865v-.624H6.217zm3.617-3.573h2.008c.053-.199.083-.408.083-.624H9.834zm-3.617 0h1.865v-.624H6.217zM9.55 7.507H4.973v.624h6.18a2.36 2.36 0 00-1.602-.624zm2.056 1.191H4.973v.624h6.884a2.382 2.382 0 00-.25-.624zm-5.39 2.382v.624h4.87c.207-.176.382-.387.519-.624zm4.87 1.191h-4.87v.624h5.389a2.39 2.39 0 00-.519-.624zm-6.114 3.006h6.634c.11-.193.196-.402.25-.624H4.973zM0 8.13h4.352v-.624H0zm0 1.191h4.352v-.624H0zm1.243 1.191h1.865v-.624H1.243zm0 1.191h1.865v-.624H1.243zm0 1.19h1.865v-.623H1.243zm0 1.192h1.865v-.624H1.243zM0 15.276h4.352v-.623H0zm0 1.192h4.352v-.624H0Z"/>
  </svg>
);

const BRAND_LOGOS: Record<string, React.FC> = { Google: GoogleLogo, IBM: IBMLogo };
const BRAND_BG: Record<string, string> = { Google: '#0d1117', IBM: '#0d1117' };

const experience = [
  {
    company: "Tint",
    role: "Founding Engineer · Travel Tech Startup",
    duration: "Apr 2026 – Present",
    link: null,
    bullets: [
      "Backend & Cloud Infra: Async FastAPI REST API on AWS App Runner with PostgreSQL (RDS) for storage and Redis (ElastiCache) for sessions and rate limiting.",
      "System Design & Performance: Two-step OpenAI itinerary pipeline with HTTP 202 async polling to decouple LLM calls from the client, keeping the UI responsive despite API latency.",
      "Frontend & Security: Mobile-optimized Next.js 16 UI (430px) with Zustand, custom Tailwind v4 design system, Twilio OTP auth, and AWS Amplify deployment.",
    ],
  },
  {
    company: "2070 Health",
    role: "Software Engineer (Contract) · Healthcare Platform",
    duration: "Jan 2026 – Apr 2026",
    link: "https://2070health.com/",
    bullets: [
      "Frontend engineer on EverHope (10k+ users). Built patient-facing pages across oncology, nutrition, and diagnostics from Figma with responsive layouts and content updates.",
      "Built end-to-end appointment booking (OTP, live EHR, Razorpay, Salesforce CRM sync); led SSR migration and SEO overhaul across 50+ pages; caught a Docker misconfiguration routing traffic to staging.",
    ],
  },
  {
    company: "Kuzushi Labs",
    role: "Freelance Software Engineer · AI Startup",
    duration: "Nov 2025 – Mar 2026",
    link: "https://www.kuzushilabs.ai/",
    bullets: [
      "Built Anowmly from scratch: custom hero animation (rectangle-to-cube), WebPlayer, film-strip carousel, and contact form. Migrated video assets to Cloudinary. Stack: Next.js, TypeScript, Framer Motion, Tailwind CSS.",
      "Shipped Kuzushi Labs' site with GSAP, Three.js 3D, Framer Motion, and Lenis on Next.js 16 / React 19. Rebuilt the Healthtech-Redefined design system with shadcn/ui and Tailwind CSS.",
    ],
  },
  {
    company: "Adiamara",
    role: "Freelance Frontend Engineer · E-commerce",
    duration: "Apr 2026",
    link: "https://adiamara.com",
    bullets: [
      "Delivered UI fixes and improvements for a luxury lab-grown diamond e-commerce brand based in Dubai. Replaced a broken Shopify currency converter with a free exchange-rate API with flag/currency dropdowns. Built a bulk pricing CSV tool for Matrixify to mass-update jewellery variant prices.",
    ],
  },
];

const projects = [
  {
    name: "git-newspaper",
    tag: "Self",
    duration: "Apr 2026",
    link: "https://github.com/LordAizen1/git-newspaper",
    bullets: [
      "Open-source npm CLI that trended on r/coolgithubprojects and r/node within 24 hours of launch, picking up 100+ stars and 500+ downloads with zero marketing.",
      "Detects 9 commit-pattern archetypes and renders fully typeset broadsheets with inlined fonts, SVG activity charts, and archetype-specific editorial voice. No LLM dependency, runs fully offline.",
    ],
  },
  {
    name: "CipherLens",
    tag: "Academic · IIIT-Delhi",
    duration: "2025 – 2026",
    link: "https://cipherlens-ev3x.vercel.app/",
    bullets: [
      "B.Tech project at IIIT Delhi. Built a full-stack ML web app that identifies 22 classical cipher types from raw ciphertext with no keys or plaintext required.",
      "Trained three complementary models on 550k samples - a dual-input Hybrid CNN (79.24% val accuracy), a character-level DL CNN, and a two-stage XGBoost classifier using 15 statistical features. Stack: FastAPI, PyTorch, XGBoost, Next.js 16, TypeScript, Tailwind CSS, Docker Compose.",
    ],
  },
  {
    name: "newsforge",
    tag: "Self",
    duration: "May 2026",
    link: "https://github.com/LordAizen1/newsforge",
    bullets: [
      "LangGraph agent that runs every morning via GitHub Actions, pulls ~40 AI/tech articles through Tavily, filters and categorizes them with GPT-4o-mini, and sends a clean digest to email or WhatsApp. Costs under $0.20/month.",
      "Pipeline runs as discrete nodes: Search, Filter, Categorize, Summarize, Format, and Deliver, with Jinja2-templated HTML emails. Stack: Python 3.12, LangGraph, LangChain, GPT-4o-mini, Tavily, SendGrid, Twilio, GitHub Actions.",
    ],
  },
];

const skills = [
  { label: "Languages", items: "C++, Python, JavaScript, TypeScript, HTML/CSS, SQL" },
  { label: "Frameworks", items: "React.js, Next.js, FastAPI, Node.js, TailwindCSS, Framer Motion, GSAP, Three.js" },
  { label: "AWS & DevOps", items: "App Runner, RDS, ElastiCache, Amplify, Docker, Nginx, GCP, PM2, Git/GitHub" },
  { label: "Databases", items: "PostgreSQL, MongoDB, Redis, Firebase" },
];

const openSource = [
  {
    title: "Open Source Contributor | IIITD-PYQs",
    org: "IIITD-PYQs",
    duration: "May 2025",
    description: "Contributed past year course materials for Design Research to a widely-used IIITD repository, enhancing resources for thousands of students. Submitted and merged PR #44, my first open-source contribution.",
    link: "https://github.com/NalishJain/IIITD-PYQs/pull/44",
  },
];

const achievements = [
  {
    title: "Google Advanced Data Analytics Certificate",
    brand: "Google",
    description: "Mastered advanced data analysis and ML techniques including logistic regression, random forest, and decision trees through hands-on projects with real-world datasets.",
    link: "https://www.credly.com/badges/6badd752-6eb5-4921-8d4e-2fc5bb36c14c/linked_in_profile",
  },
  {
    title: "IBM Qiskit Global Summer School",
    brand: "IBM",
    description: "Selected from thousands of global applicants for IBM's quantum computing program. Completed 4 advanced quantum computing tasks using IBM's cloud quantum computers.",
    link: "https://www.credly.com/badges/fc613fda-7639-42ad-b4c6-6316cf0afeaf/public_url",
  },
  {
    title: "IBM Artificial Intelligence Fundamentals",
    brand: "IBM",
    description: "Demonstrated proficiency in core AI concepts, machine learning principles, and practical applications with IBM Watson AI Studio.",
    link: "https://www.credly.com/badges/6badd752-6eb5-4921-8d4e-2fc5bb36c14c/linked_in_profile",
  },
];

export default function ResumePage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '120px' }}>

      {/* ── Header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 600, color: 'var(--tp)', fontFamily: 'var(--font-serif)', letterSpacing: '-0.01em' }}>
            Mohammad Kaif
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem', fontSize: '11px', color: 'var(--ts)', fontFamily: 'var(--font-mono)', letterSpacing: '.06em' }}>
            <a href="mailto:mohdkaif2003@gmail.com" style={{ color: 'var(--ts)', textDecoration: 'none' }}>mohdkaif2003@gmail.com</a>
            <span>+91-9999066784</span>
            <span>Delhi</span>
            <a href="https://www.linkedin.com/in/mohammadkaif007/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              LinkedIn<ArrowUpRight />
            </a>
          </div>
        </div>
        <a
          href="/Md_Kaif_Resume.pdf"
          download
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.6rem 1.25rem',
            border: '1px solid var(--accent)', borderRadius: '6px',
            color: 'var(--accent)', fontSize: '11px',
            fontFamily: 'var(--font-mono)', letterSpacing: '.08em',
            textDecoration: 'none', whiteSpace: 'nowrap',
            background: 'rgba(57,211,83,0.06)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M3 6l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          download pdf
        </a>
      </div>

      {/* ── Summary ── */}
      <section style={{ marginBottom: '3rem' }}>
        <div className="sec-head"><span className="sec-label">summary</span><div className="sec-line"></div></div>
        <p style={{ marginTop: '1.5rem', fontSize: '13px', color: 'var(--ts)', lineHeight: 1.9 }}>
          Full-stack engineer with production experience across healthcare and travel tech. Currently Founding Engineer at Tint, building a FastAPI + Next.js platform on AWS with an OpenAI-powered itinerary generation pipeline. IIIT Delhi CSE 2026 grad with a side interest in quantum computing (IBM Qiskit Global Summer School 2024) who likes shipping things that work.
        </p>
      </section>

      {/* ── Experience ── */}
      <section style={{ marginBottom: '3rem' }}>
        <div className="sec-head"><span className="sec-label">experience</span><div className="sec-line"></div></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
          {experience.map((exp) => (
            <div key={exp.company}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--tp)', fontFamily: 'var(--font-mono)' }}>
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--tp)', textDecoration: 'none' }}>
                        {exp.company}<ArrowUpRight />
                      </a>
                    ) : exp.company}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--ts)', marginLeft: '0.5rem' }}>· {exp.role}</span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--tm)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{exp.duration}</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '12px', color: 'var(--ts)', lineHeight: 1.8 }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.1em' }}>▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section style={{ marginBottom: '3rem' }}>
        <div className="sec-head"><span className="sec-label">projects</span><div className="sec-line"></div></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '1.5rem' }}>
          {projects.map((proj) => (
            <div key={proj.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--tp)', fontFamily: 'var(--font-mono)' }}>
                    {proj.link ? (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--tp)', textDecoration: 'none' }}>
                        {proj.name}<ArrowUpRight />
                      </a>
                    ) : proj.name}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--tm)', marginLeft: '0.75rem', fontFamily: 'var(--font-mono)' }}>{proj.tag}</span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--tm)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{proj.duration}</span>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {proj.bullets.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '12px', color: 'var(--ts)', lineHeight: 1.8 }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.1em' }}>▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="sec-head"><span className="sec-label">skills</span><div className="sec-line"></div></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
          {skills.map((s) => (
            <div key={s.label} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', fontFamily: 'var(--font-mono)', letterSpacing: '.06em', minWidth: '100px', flexShrink: 0 }}>
                {s.label}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--ts)', lineHeight: 1.8 }}>{s.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Open Source ── */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="sec-head"><span className="sec-label">open source</span><div className="sec-line"></div></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '2rem' }}>
          {openSource.map((item) => (
            <div key={item.title} className="pcard" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 className="pcard-name" style={{ margin: 0 }}>{item.title}</h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '.06em', fontFamily: 'var(--font-mono)' }}
                  >
                    {item.org} <ArrowUpRight />
                  </a>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--tm)', fontFamily: 'var(--font-mono)' }}>{item.duration}</span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--ts)', lineHeight: '1.8' }}>{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="sec-head"><span className="sec-label">education</span><div className="sec-line"></div></div>
        <div style={{ marginTop: '2rem' }}>
          <div className="pcard" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
              <img src="/images/favicon_io/style1coloricon.png" alt="IIIT-Delhi" style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block' }} />
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <div className="pcard-name" style={{ fontSize: '16px', marginBottom: '2px' }}>Bachelor of Technology, Computer Science</div>
                <div className="pcard-desc" style={{ fontSize: '11px', lineHeight: '1.6', marginBottom: 0 }}>
                  Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi)
                </div>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--tm)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>2022 – 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Achievements & Certifications ── */}
      <section style={{ marginBottom: '40px' }}>
        <div className="sec-head"><span className="sec-label">achievements & certifications</span><div className="sec-line"></div></div>
        <div className="projects-grid" style={{ marginTop: '2rem' }}>
          {achievements.map((ach) => {
            const Logo = BRAND_LOGOS[ach.brand];
            return (
              <div key={ach.title} className="pcard">
                <div className="pcard-top" style={{ alignItems: 'center' }}>
                  <div className="pcard-icon" style={{ background: BRAND_BG[ach.brand], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {Logo && <Logo />}
                  </div>
                  <a className="pcard-link" href={ach.link} target="_blank" rel="noopener noreferrer">
                    credential <ArrowUpRight />
                  </a>
                </div>
                <div className="pcard-name" style={{ fontSize: '18px' }}>{ach.title}</div>
                <div className="pcard-desc" style={{ fontSize: '11px', lineHeight: '1.7', marginTop: '10px' }}>{ach.description}</div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}
