"use client";

import { 
  Newspaper,
  Brain,
  Robot,
  GitBranch,
  Cat,
  LockKey,
  GraduationCap,
  Chats,
  Buildings,
  Heartbeat,
  Palette,
  Microphone,
  EyeSlash,
  HouseLine,
  TrendUp,
  DeviceMobile,
  DiamondsFour,
  FileMagnifyingGlass,
} from "@phosphor-icons/react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Newspaper,
  Brain,
  Robot,
  GitBranch,
  Cat,
  LockKey,
  GraduationCap,
  Chats,
  Buildings,
  Heartbeat,
  Palette,
  Microphone,
  EyeSlash,
  HouseLine,
  TrendUp,
  DeviceMobile,
  DiamondsFour,
  FileMagnifyingGlass,
};

const projects = [
  {
    title: "git-newspaper",
    organization: "Self",
    description:
      "CLI that generates a Victorian broadsheet newspaper from any git repository's history. Gained hundreds of stars and trending on Reddit within 24 hours of launch. Detects repo archetypes, renders typeset HTML with inlined fonts and SVG charts. Zero LLM dependency.",
    tags: ["Node.js", "HTML/CSS/JS"],
    link: "https://github.com/LordAizen1/git-newspaper",
    type: "self",
    feat: true,
    icon: "Newspaper",
  },
  {
    title: "EverMemOS Plugin",
    organization: "Self",
    description:
      "OpenCode plugin implementing durable structured memory across coding sessions. Passive capture, automatic recall via system transform, and git-scoped episodic/profile/foresight memory with vector-based retrieval and privacy sanitization.",
    tags: ["TypeScript", "Node.js", "Zod", "OpenCode Plugin"],
    link: "https://github.com/LordAizen1/opencode-evermemos-plugin",
    type: "self",
    feat: true,
    icon: "Brain",
  },
  {
    title: "LlamaIndex RAG App",
    organization: "Self",
    description:
      "Document Q&A system that answers questions from uploaded PDF, DOCX, or Markdown files with expandable source citations, and refuses to hallucinate when the answer isn't in the docs. Configurable chunking, streaming SSE responses, per-IP rate limiting with daily LLM spend caps, and an eval harness hitting 100% retrieval and 92-96% answer accuracy across chunking configs.",
    tags: ["FastAPI", "LlamaIndex", "ChromaDB", "OpenAI API", "Next.js", "TypeScript", "Redis (Upstash)", "Docker", "Railway"],
    link: "https://github.com/LordAizen1/llamaindex-rag-app",
    type: "self",
    feat: true,
    icon: "FileMagnifyingGlass",
  },
  {
    title: "NewsForge",
    organization: "Self",
    description:
      "Autonomous AI agent that wakes up daily, fetches and filters ~40 articles from real-time web searches, categorizes them across AI/tech topics, and delivers a curated digest via email or WhatsApp. Runs on GitHub Actions for under $0.20/month.",
    tags: ["Python", "LangGraph", "GPT-4o-mini", "Tavily", "SendGrid", "Twilio", "GitHub Actions"],
    link: "https://github.com/LordAizen1/newsforge",
    type: "self",
    icon: "Robot",
  },
  {
    title: "ToolTree",
    organization: "Self",
    description:
      "Open-source pip-installable Python library for LLM agent tool planning. Dual-feedback MCTS with bidirectional pruning, call caching, and support for OpenAI, Gemini, and Anthropic.",
    tags: ["Python", "MCTS", "Pydantic", "OpenAI API", "Gemini API", "Anthropic API"],
    link: "https://github.com/LordAizen1/ToolTree",
    type: "self",
    icon: "GitBranch",
  },
  {
    title: "Clowder - A Love Letter to Cats",
    organization: "Hobby",
    description:
      "Cinematic scroll-driven experience. Photographic preloader, GSAP scroll animations, pinned panel stacking, horizontal filmstrip gallery, and masonry cat photo grid.",
    tags: ["HTML/CSS/JS", "Tailwind CSS", "GSAP", "Lenis", "SplitType"],
    link: "https://clowder-eosin.vercel.app/",
    type: "self",
    icon: "Cat",
  },
  {
    title: "Classical Cipher Identification",
    organization: "IIIT-Delhi",
    description:
      "BTP under Dr. Ravi Anand. Training ML models to automatically identify classical cipher types from ciphertext using statistical and structural patterns.",
    tags: ["Machine Learning", "Cryptography", "Python"],
    link: "https://iiitd.ac.in/",
    type: "academic",
    icon: "LockKey",
  },
  {
    title: "GradeDash",
    organization: "Self",
    description:
      "AI-powered academic dashboard for IIIT-Delhi students. GPT-4o transcript parsing, RAG chatbot for B.Tech regulations, SGPA/CGPA visualization, and graduation tracker across 7 branches.",
    tags: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "OpenAI API", "Tailwind CSS 4", "Docker"],
    link: "https://grade-dash.vercel.app/",
    type: "self",
    icon: "GraduationCap",
  },
  {
    title: "Adiamara",
    organization: "Freelance (Dubai)",
    description:
      "Lab-grown diamond e-commerce site for a Dubai client. Replaced a broken Shopify marketplace currency converter with a reliable free API, building a polished dropdown with country flag and currency icons. Also built an HTML-based bulk pricing tool that generates Matrixify-compatible CSVs for mass-updating jewellery variant prices - cutting hours of manual Shopify edits down to minutes.",
    tags: ["Shopify", "JavaScript", "HTML/CSS", "Currency API", "Matrixify"],
    link: "https://adiamara.com",
    type: "work",
    icon: "DiamondsFour",
  },
  {
    title: "Chitchat",
    organization: "Kuzushi Labs",
    description:
      "Real-time AI companion platform with immersive 3D avatar interactions and low-latency voice communication, optimized for seamless user/AI interaction.",
    tags: ["React 19", "Tailwind CSS", "Three.js", "wawa-lipsync", "LiveKit", "Framer Motion", "Zustand", "TanStack Query"],
    link: "#",
    type: "work",
    icon: "Chats",
  },
  {
    title: "Kuzushi Labs",
    organization: "Kuzushi Labs",
    description:
      "Corporate website with an Industrial Luxury design system, custom animated backgrounds, scroll-triggered animations, and Google Sheets contact form.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Lenis", "Cloudinary"],
    link: "https://www.kuzushilabs.ai/",
    type: "work",
    icon: "Buildings",
  },
  {
    title: "Cordia",
    organization: "Kuzushi Labs",
    description:
      "Cardiology Risk Score application providing real-time patient data analysis with critical STS integration for automated risk score calculation.",
    tags: ["React", "Tailwind CSS", "STS Integration"],
    link: "https://cordia.kuzushilabs.xyz/login",
    type: "work",
    icon: "Heartbeat",
  },
  {
    title: "Anowmly Studio",
    organization: "Kuzushi Labs",
    description:
      "Creative platform merging human artistry with AI precision. Immersive 3D experience with complex animations and a custom design system.",
    tags: ["Next.js", "Tailwind CSS", "Three.js", "React Three Fiber", "OGL", "Framer Motion"],
    link: "https://www.anowmly.com/",
    type: "work",
    icon: "Palette",
  },
  {
    title: "Audio Sales Evaluator",
    organization: "Kuzushi Labs",
    description:
      "AI sales coaching tool that transcribes dealer audio calls via OpenAI Whisper and evaluates them across 11 performance parameters using GPT-4o with speaker diarization.",
    tags: ["Next.js", "TypeScript", "MongoDB", "OpenAI API", "Agenda.js", "Tailwind CSS"],
    link: "https://audio-evaluator.vercel.app/",
    type: "work",
    icon: "Microphone",
  },
  {
    title: "Document Privacy (DP-Fusion)",
    organization: "Alpine Privacy",
    description:
      "Enterprise-grade document sanitization platform that automatically removes sensitive information from business documents while maintaining integrity.",
    tags: ["React 18.3", "TypeScript", "Vite", "Redux Toolkit", "Tailwind CSS", "Node.js", "PyTorch", "Transformers", "FastAPI", "Docker"],
    link: "https://www.documentprivacy.com/",
    type: "work",
    icon: "EyeSlash",
  },
  {
    title: "AI For Architects",
    organization: "Alpine Privacy",
    description:
      "AI-powered platform transforming architectural visualization through intelligent design generation and dynamic video creation.",
    tags: ["React 18", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Google Veo API", "FFmpeg", "JWT"],
    link: "https://ai-for-architects.com",
    type: "work",
    icon: "HouseLine",
  },
  {
    title: "FinSight-NLP-App",
    organization: "Self",
    description:
      "Web app performing NLP on financial text using a custom-trained spaCy model - identifies Stocks, Financial Events, and analyzes sentiment with VADER.",
    tags: ["Python", "Flask", "spaCy", "VADER"],
    link: "https://finsight-app-md6v.onrender.com/",
    type: "self",
    icon: "TrendUp",
  },
  {
    title: "Multi-Scan App",
    organization: "Self",
    description:
      "Android application combining document scanning with real-time landmark recognition using on-device machine learning.",
    tags: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "CameraX", "ML Kit"],
    link: "https://github.com/LordAizen1/Multi-Scan-App",
    type: "self",
    icon: "DeviceMobile",
  },
];

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      {/* Header */}
      <div className="sec-head">
        <span className="sec-label">all projects</span>
        <div className="sec-line"></div>
      </div>

      <p style={{ fontSize: '12px', color: 'var(--ts)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
        A complete log of software projects, open source packages, academic works, and production products built for companies and communities. 
      </p>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map((project) => {
          const isFeat = project.feat;
          const iconBg = project.type === "self" ? "#0e4429" : project.type === "work" ? "#1a1035" : "#1a0b0b";
          const iconColor = project.type === "self" ? "#3dd68c" : project.type === "work" ? "#c084fc" : "#f87171";
          
          const IconComponent = iconMap[project.icon] || Robot;

          return (
            <div key={project.title} className={`pcard ${isFeat ? 'feat' : ''}`}>
              <div className="pcard-top">
                <div className="pcard-icon" style={{ background: iconBg }}>
                  <IconComponent size={20} weight="duotone" color={iconColor} />
                </div>
                <a className="pcard-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  github →
                </a>
              </div>
              <div className="pcard-name">{project.title}</div>
              <div className="pcard-desc">{project.description}</div>
              <div className="pcard-meta">
                <div className="pcard-stack">
                  {project.tags.map((tag, idx) => (
                    <span key={tag}>
                      <span className="pstack-tag">{tag}</span>
                      {idx < project.tags.length - 1 && <span className="pstack-tag" style={{ margin: '0 4px' }}>·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
