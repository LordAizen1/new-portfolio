import type { Metadata } from "next";
import { ExternalLink, FileCode } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Mohammad Kaif's software projects — from AI-powered platforms and 3D web experiences to mobile apps and NLP tools.",
};

const tagDescriptions: Record<string, string> = {
  "Machine Learning": "AI algorithms that improve automatically through experience",
  Cryptography: "Techniques for secure communication in the presence of adversaries",
  Python: "High-level programming language",
  "React 18": "JavaScript library for building user interfaces",
  TailwindCSS: "Utility-first CSS framework",
  "Node.js": "JavaScript runtime built on Chrome's V8 engine",
  "Express.js": "Minimal web framework for Node.js",
  MongoDB: "Document-oriented NoSQL database",
  "OpenAI API": "AI models for natural language processing",
  "Google Veo API": "AI video generation API",
  FFmpeg: "Multimedia framework for audio/video processing",
  JWT: "JSON Web Tokens for authentication",
  "Next.js": "React framework for production applications",
  TypeScript: "Typed superset of JavaScript",
  ShadCN: "Re-usable components built with Radix UI and Tailwind CSS",
  Vite: "Fast build tool for modern web projects",
  "Redux Toolkit": "Predictable state container for JavaScript apps",
  "Tailwind CSS": "Utility-first CSS framework",
  PyTorch: "Machine learning framework",
  Transformers: "Library for state-of-the-art NLP",
  FastAPI: "Modern web framework for building APIs",
  Docker: "Containerization platform",
  Flask: "Lightweight web framework for Python",
  spaCy: "Library for advanced NLP",
  VADER: "Sentiment analysis tool",
  "OpenCode Plugin": "Extension for the OpenCode AI coding assistant",
  "LLM Memory": "Persistent memory system for large language model agents",
  MCTS: "Monte Carlo Tree Search for exploring and scoring decision paths",
  Pydantic: "Data validation library for Python using type hints",
  "Gemini API": "Google's API for Gemini models",
  "Anthropic API": "API for Anthropic Claude models",
  Kotlin: "Cross-platform programming language",
  "Jetpack Compose": "Modern toolkit for building native UI in Android",
  "TensorFlow Lite": "Lightweight solution for mobile and embedded devices",
  CameraX: "Android library for camera functionality",
  "ML Kit": "Mobile SDK for on-device ML",
  "Three.js": "JavaScript 3D library",
  "React Three Fiber": "React renderer for Three.js",
  OGL: "Minimal WebGL library",
  "Framer Motion": "Motion library for React",
  "React 19": "Latest version of React",
  "wawa-lipsync": "Lip sync library for 3D characters",
  LiveKit: "Real-time video and audio infrastructure",
  Zustand: "Small, fast and scalable state-management solution",
  "TanStack Query": "Powerful asynchronous state management",
  "STS Integration": "Society of Thoracic Surgeons risk calculator integration",
  "Next.js 16": "Latest React framework for production applications",
  "Tailwind CSS 4": "Next-generation utility-first CSS framework",
  Lenis: "Smooth scrolling library",
  Cloudinary: "Cloud-based image and video management",
  PostgreSQL: "Open-source relational database management system",
  Prisma: "Next-generation ORM for Node.js and TypeScript",
  "Auth.js": "Authentication library for modern web applications",
  "Agenda.js": "Lightweight job scheduling library for Node.js",
  "HTML/CSS/JS": "Core web technologies for building websites",
  "CLI": "Command-line interface tool",
  "npm": "Node.js package manager and public registry",
  GSAP: "Professional-grade animation library for the web",
  SplitType: "JavaScript library for splitting text into characters, words, and lines",
  LangGraph: "Graph-based framework for building stateful, multi-step LLM agents",
  "GPT-4o-mini": "OpenAI's efficient small language model",
  Tavily: "AI-powered web search API for real-time data retrieval",
  SendGrid: "Cloud-based email delivery service",
  Twilio: "Cloud communications platform for messaging and calls",
  "GitHub Actions": "CI/CD and automation platform built into GitHub",
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
  },
  {
    title: "EverMemOS Plugin",
    organization: "Self",
    description:
      "OpenCode plugin implementing durable structured memory across coding sessions. Passive capture, automatic recall via system transform, and git-scoped episodic/profile/foresight memory with vector-based retrieval and privacy sanitization.",
    tags: ["TypeScript", "Node.js", "Zod", "OpenCode Plugin"],
    link: "https://github.com/LordAizen1/opencode-evermemos-plugin",
    type: "self",
  },
  {
    title: "NewsForge",
    organization: "Self",
    description:
      "Autonomous AI agent that wakes up daily, fetches and filters ~40 articles from real-time web searches, categorizes them across AI/tech topics, and delivers a curated digest via email or WhatsApp. Runs on GitHub Actions for under $0.20/month.",
    tags: ["Python", "LangGraph", "GPT-4o-mini", "Tavily", "SendGrid", "Twilio", "GitHub Actions"],
    link: "https://github.com/LordAizen1/newsforge",
    type: "self",
  },
  {
    title: "ToolTree",
    organization: "Self",
    description:
      "Open-source pip-installable Python library for LLM agent tool planning. Dual-feedback MCTS with bidirectional pruning, call caching, and support for OpenAI, Gemini, and Anthropic.",
    tags: ["Python", "MCTS", "Pydantic", "OpenAI API", "Gemini API", "Anthropic API"],
    link: "https://github.com/LordAizen1/ToolTree",
    type: "self",
  },
  {
    title: "Clowder — A Love Letter to Cats",
    organization: "Hobby",
    description:
      "Cinematic scroll-driven experience. Photographic preloader, GSAP scroll animations, pinned panel stacking, horizontal filmstrip gallery, and masonry cat photo grid.",
    tags: ["HTML/CSS/JS", "Tailwind CSS", "GSAP", "Lenis", "SplitType"],
    link: "https://clowder-eosin.vercel.app/",
    type: "self",
  },
  {
    title: "Classical Cipher Identification",
    organization: "IIIT-Delhi",
    description:
      "BTP under Dr. Ravi Anand. Training ML models to automatically identify classical cipher types from ciphertext using statistical and structural patterns.",
    tags: ["Machine Learning", "Cryptography", "Python"],
    link: "https://iiitd.ac.in/",
    type: "academic",
  },
  {
    title: "GradeDash",
    organization: "Self",
    description:
      "AI-powered academic dashboard for IIIT-Delhi students. GPT-4o transcript parsing, RAG chatbot for B.Tech regulations, SGPA/CGPA visualization, and graduation tracker across 7 branches.",
    tags: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "OpenAI API", "Tailwind CSS 4", "Docker"],
    link: "https://grade-dash.vercel.app/",
    type: "self",
  },
  {
    title: "Chitchat",
    organization: "Kuzushi Labs",
    description:
      "Real-time AI companion platform with immersive 3D avatar interactions and low-latency voice communication, optimized for seamless user/AI interaction.",
    tags: ["React 19", "Tailwind CSS", "Three.js", "wawa-lipsync", "LiveKit", "Framer Motion", "Zustand", "TanStack Query"],
    link: "#",
    type: "work",
  },
  {
    title: "Kuzushi Labs",
    organization: "Kuzushi Labs",
    description:
      "Corporate website with an Industrial Luxury design system, custom animated backgrounds, scroll-triggered animations, and Google Sheets contact form.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Lenis", "Cloudinary"],
    link: "https://www.kuzushilabs.ai/",
    type: "work",
  },
  {
    title: "Cordia",
    organization: "Kuzushi Labs",
    description:
      "Cardiology Risk Score application providing real-time patient data analysis with critical STS integration for automated risk score calculation.",
    tags: ["React", "Tailwind CSS", "STS Integration"],
    link: "https://cordia.kuzushilabs.xyz/login",
    type: "work",
  },
  {
    title: "Anowmly Studio",
    organization: "Kuzushi Labs",
    description:
      "Creative platform merging human artistry with AI precision. Immersive 3D experience with complex animations and a custom design system.",
    tags: ["Next.js", "Tailwind CSS", "Three.js", "React Three Fiber", "OGL", "Framer Motion"],
    link: "https://www.anowmly.com/",
    type: "work",
  },
  {
    title: "Audio Sales Evaluator",
    organization: "Kuzushi Labs",
    description:
      "AI sales coaching tool that transcribes dealer audio calls via OpenAI Whisper and evaluates them across 11 performance parameters using GPT-4o with speaker diarization.",
    tags: ["Next.js", "TypeScript", "MongoDB", "OpenAI API", "Agenda.js", "Tailwind CSS"],
    link: "https://audio-evaluator.vercel.app/",
    type: "work",
  },
  {
    title: "Document Privacy (DP-Fusion)",
    organization: "Alpine Privacy",
    description:
      "Enterprise-grade document sanitization platform that automatically removes sensitive information from business documents while maintaining integrity.",
    tags: ["React 18.3", "TypeScript", "Vite", "Redux Toolkit", "Tailwind CSS", "Node.js", "PyTorch", "Transformers", "FastAPI", "Docker"],
    link: "https://www.documentprivacy.com/",
    type: "work",
  },
  {
    title: "AI For Architects",
    organization: "Alpine Privacy",
    description:
      "AI-powered platform transforming architectural visualization through intelligent design generation and dynamic video creation.",
    tags: ["React 18", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Google Veo API", "FFmpeg", "JWT"],
    link: "https://ai-for-architects.com",
    type: "work",
  },
  {
    title: "FinSight-NLP-App",
    organization: "Self",
    description:
      "Web app performing NLP on financial text using a custom-trained spaCy model — identifies Stocks, Financial Events, and analyzes sentiment with VADER.",
    tags: ["Python", "Flask", "spaCy", "VADER"],
    link: "https://finsight-app-md6v.onrender.com/",
    type: "self",
  },
  {
    title: "Multi-Scan App",
    organization: "Self",
    description:
      "Android application combining document scanning with real-time landmark recognition using on-device machine learning.",
    tags: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "CameraX", "ML Kit"],
    link: "https://github.com/LordAizen1/Multi-Scan-App",
    type: "self",
  },
];

const accentMap: Record<string, string> = {
  self: "border-primary/30 hover:border-primary",
  work: "border-secondary/30 hover:border-secondary",
  academic: "border-white/20 hover:border-white/60",
};

const tagColorMap: Record<string, string> = {
  self: "text-primary",
  work: "text-secondary",
  academic: "text-gray-400",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-12">
      {/* File tab */}
      <div className="hidden md:flex space-x-[2px] mb-8">
        <div className="bg-[#0e0e0e] px-4 py-2 flex items-center space-x-2 border-t-2 border-primary">
          <FileCode size={12} className="text-primary" />
          <span className="font-mono text-xs">projects.git</span>
          <span className="text-[10px] text-gray-600 hover:text-white cursor-pointer ml-1">✕</span>
        </div>
      </div>

      {/* Section header */}
      <div className="mb-8">
        <div className="font-mono text-[10px] text-secondary mb-2">// PROJECTS_ARCHIVE</div>
        <div className="mt-3 flex items-center gap-6 font-mono text-[10px] text-gray-600">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-px bg-primary inline-block" />
            Personal
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-px bg-secondary inline-block" />
            Work
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-px bg-gray-500 inline-block" />
            Academic
          </span>
        </div>
      </div>

      <TooltipProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col bg-[#1a1919] p-6 border-l-2 transition-all duration-300 ${accentMap[project.type]}`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="font-sans font-bold text-sm text-white uppercase tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-[9px] text-gray-600 bg-[#262626] px-2 py-0.5 uppercase">
                      {project.organization}
                    </span>
                    <ExternalLink
                      size={11}
                      className="text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[11px] leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Tooltip key={tag}>
                      <TooltipTrigger asChild>
                        <span
                          className={`bg-[#262626] px-2 py-0.5 text-[9px] font-mono uppercase cursor-default ${tagColorMap[project.type]}`}
                        >
                          {tag}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#1a1919] border-white/10 text-gray-300 font-mono text-[10px]">
                        <p>{tagDescriptions[tag] || tag}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </TooltipProvider>

      {/* Footer count */}
      <div className="mt-10 pt-6 border-t border-white/5">
        <p className="font-mono text-[10px] text-gray-700 uppercase tracking-widest">
          // {projects.length} entries logged
        </p>
      </div>
    </div>
  );
}
