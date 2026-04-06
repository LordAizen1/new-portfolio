import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Mohammad Kaif's software projects — from AI-powered platforms and 3D web experiences to mobile apps and NLP tools.",
};
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Map of technology tags to their descriptions
const tagDescriptions: Record<string, string> = {
  "Machine Learning": "AI algorithms that improve automatically through experience",
  "Cryptography": "Techniques for secure communication in the presence of adversaries",
  "Python": "High-level programming language",
  "React 18": "JavaScript library for building user interfaces",
  "TailwindCSS": "Utility-first CSS framework",
  "Node.js": "JavaScript runtime built on Chrome's V8 engine",
  "Express.js": "Minimal web framework for Node.js",
  "MongoDB": "Document-oriented NoSQL database",
  "OpenAI API": "AI models for natural language processing",
  "Google Veo API": "AI video generation API",
  "FFmpeg": "Multimedia framework for audio/video processing",
  "JWT": "JSON Web Tokens for authentication",
  "Next.js": "React framework for production applications",
  "TypeScript": "Typed superset of JavaScript",
  "ShadCN": "Re-usable components built with Radix UI and Tailwind CSS",
  "Vite": "Fast build tool for modern web projects",
  "Redux Toolkit": "Predictable state container for JavaScript apps",
  "Tailwind CSS": "Utility-first CSS framework",
  "PyTorch": "Machine learning framework",
  "Transformers": "Library for state-of-the-art NLP",
  "FastAPI": "Modern web framework for building APIs",
  "Docker": "Containerization platform",
  "Flask": "Lightweight web framework for Python",
  "spaCy": "Library for advanced NLP",
  "VADER": "Sentiment analysis tool",
  "MCTS": "Monte Carlo Tree Search for exploring and scoring decision paths",
  "Pydantic": "Data validation library for Python using type hints",
  "Gemini API": "Google's API for Gemini models",
  "Anthropic API": "API for Anthropic Claude models",

  "Kotlin": "Cross-platform programming language",
  "Jetpack Compose": "Modern toolkit for building native UI in Android",
  "TensorFlow Lite": "Lightweight solution for mobile and embedded devices",
  "CameraX": "Android library for camera functionality",
  "ML Kit": "Mobile SDK for on-device ML",
  "Three.js": "JavaScript 3D library",
  "React Three Fiber": "React renderer for Three.js",
  "OGL": "Minimal WebGL library",
  "Framer Motion": "Motion library for React",
  "React 19": "Latest version of React",
  "wawa-lipsync": "Lip sync library for 3D characters",
  "LiveKit": "Real-time video and audio infrastructure",
  "Zustand": "Small, fast and scalable bearbones state-management solution",
  "TanStack Query": "Powerful asynchronous state management",
  "STS Integration": "Society of Thoracic Surgeons risk calculator integration",
  "Next.js 16": "Latest React framework for production applications",
  "Tailwind CSS 4": "Next-generation utility-first CSS framework",
  "Lenis": "Smooth scrolling library",
  "Cloudinary": "Cloud-based image and video management",
  "PostgreSQL": "Open-source relational database management system",
  "Prisma": "Next-generation ORM for Node.js and TypeScript",
  "Auth.js": "Authentication library for modern web applications",
  "Agenda.js": "Lightweight job scheduling library for Node.js",
  "HTML/CSS/JS": "Core web technologies for building websites",
  "GSAP": "Professional-grade animation library for the web",
  "SplitType": "JavaScript library for splitting text into characters, words, and lines",
};

const projects = [
  {
    title: "GradeDash",
    organization: "Self",
    description: "An AI-powered academic dashboard for IIIT-Delhi students. Features AI transcript parsing using GPT-4o, a RAG-powered chatbot for querying B.Tech regulations, interactive SGPA/CGPA visualization, and a graduation requirements tracker across 7 branches — all backed by PostgreSQL, Prisma ORM, and Auth.js authentication.",
    tags: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "OpenAI API", "Tailwind CSS 4", "Docker"],
    link: "https://grade-dash.vercel.app/",
  },
  {
    title: "ToolTree",
    organization: "Self",
    description: "An open-source, pip-installable Python implementation of the ToolTree paper for LLM agent tool planning. Uses dual-feedback Monte Carlo Tree Search with bidirectional pruning to explore multi-step tool sequences, prune weak branches early, cache duplicate tool calls, and support OpenAI, Gemini, and Anthropic providers.",
    tags: ["Python", "MCTS", "Pydantic", "OpenAI API", "Gemini API", "Anthropic API"],
    link: "https://github.com/LordAizen1/ToolTree",
  },
  {
    title: "Kuzushi Labs",
    organization: "Kuzushi Labs",
    description: "Designed and developed the complete corporate website featuring an \"Industrial Luxury\" design system, custom animated backgrounds, scroll-triggered animations, and rich UI components. Integrated Google Sheets contact form, Cloudinary optimization, and global audio.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Lenis", "Cloudinary"],
    link: "https://www.kuzushilabs.ai/",
  },
  {
    title: "Anowmly Studio",
    organization: "Kuzushi Labs",
    description: "A creative platform merging human artistry with AI precision. Features an immersive 3D experience with complex animations and a custom design system.",
    tags: ["Next.js", "Tailwind CSS", "Three.js", "React Three Fiber", "OGL", "Framer Motion"],
    link: "https://www.anowmly.com/",
  },
  {
    title: "Audio Sales Evaluator",
    organization: "Kuzushi Labs",
    description: "An AI-powered sales coaching tool that transcribes dealer audio calls using OpenAI Whisper and evaluates them across 11 performance parameters using GPT-4o. Features speaker diarization, evidence-based scoring, and asynchronous background job processing.",
    tags: ["Next.js", "TypeScript", "MongoDB", "OpenAI API", "Agenda.js", "Tailwind CSS"],
    link: "https://audio-evaluator.vercel.app/",
  },
  {
    title: "Chitchat",
    organization: "Kuzushi Labs",
    description: "A real-time AI companion platform featuring immersive 3D avatar interactions and low-latency voice communication. Optimized for performance and seamless user/AI interaction.",
    tags: ["React 19", "Tailwind CSS", "Three.js", "wawa-lipsync", "LiveKit", "Framer Motion", "Zustand", "TanStack Query"],
    link: "#",
  },
  {
    title: "Cordia",
    organization: "Kuzushi Labs",
    description: "A Cardiology Risk Score application providing real-time patient data analysis. Features a critical STS integration for automated risk score calculation.",
    tags: ["React", "Tailwind CSS", "STS Integration"],
    link: "https://cordia.kuzushilabs.xyz/login",
  },
  {
    title: "Classical Cipher Identification Using Machine Learning",
    organization: "IIIT-Delhi",
    description: "BTech Project (BTP) under Dr. Ravi Anand at IIIT-Delhi (Aug 2025 - Present). Training machine learning models to automatically identify classical cipher types from ciphertext using statistical and structural patterns.",
    tags: ["Machine Learning", "Cryptography", "Python"],
    link: "https://iiitd.ac.in/",
  },
  {
    title: "AI For Architects",
    organization: "Alpine Privacy",
    description: "A comprehensive AI-powered platform that transforms architectural visualization through intelligent design generation and dynamic video creation.",
    tags: ["React 18", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Google Veo API", "FFmpeg", "JWT"],
    link: "https://ai-for-architects.com",
  },
  {
    title: "Document Privacy (DP-Fusion)",
    organization: "Alpine Privacy",
    description: "An enterprise-grade document sanitization platform that automatically removes sensitive information from business documents while maintaining document integrity.",
    tags: ["React 18.3", "TypeScript", "Vite", "Redux Toolkit", "Tailwind CSS", "Node.js", "PyTorch", "Transformers", "FastAPI", "Docker"],
    link: "https://www.documentprivacy.com/",
  },
  {
    title: "FinSight-NLP-App",
    organization: "Self",
    description: "A web app that performs NLP on financial text using a custom-trained spaCy model. It identifies custom entities (Stocks, Financial Events) and analyzes sentiment with VADER.",
    tags: ["Python", "Flask", "spaCy", "VADER"],
    link: "https://finsight-app-md6v.onrender.com/",
  },
  {
    title: "Multi-Scan App",
    organization: "Self",
    description: "A sophisticated Android application that combines document scanning capabilities with real-time landmark recognition using advanced machine learning.",
    tags: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "CameraX", "ML Kit"],
    link: "https://github.com/LordAizen1/Multi-Scan-App",
  },
  {
    title: "Clowder — A Love Letter to Cats",
    organization: "Hobby",
    description: "A cinematic, scroll-driven love letter to cats. Features a photographic preloader, GSAP-powered scroll animations, pinned panel stacking, horizontal filmstrip gallery, masonry cat photo grid, and smooth Lenis scrolling — all wrapped in a moody, editorial design.",
    tags: ["HTML/CSS/JS", "Tailwind CSS", "GSAP", "Lenis", "SplitType"],
    link: "https://clowder-eosin.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <div className='mt-4'>
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <DropdownMenuSeparator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
        {projects.map((project, index) => (
          <a href={project.link} key={index} target="_blank" rel="noopener noreferrer">
            <MagicCard className="cursor-pointer hover:shadow-lg transition-shadow h-full rounded-xl">
              <div className="flex flex-col gap-6 py-6 h-full w-full">
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className='text-purple-600 font-bold leading-tight'>{project.title}</CardTitle>
                    <Badge variant="secondary" className="shrink-0">
                      {project.organization}
                    </Badge>
                  </div>
                  <CardDescription className="mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>

                </CardContent>
                <CardFooter>
                  <TooltipProvider>
                    <div className="flex flex-wrap">
                      {project.tags.map((tag, tagIndex) => (
                        <Tooltip key={tagIndex}>
                          <TooltipTrigger asChild>
                            <Badge variant="outline" className="mr-2 mb-2 cursor-pointer">
                              {tag}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{tagDescriptions[tag] || tag}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </CardFooter>
              </div>
            </MagicCard>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
