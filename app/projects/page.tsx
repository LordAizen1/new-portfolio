import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  "Data Analytics": "Process of examining datasets to draw conclusions",
  "Statistical Analysis": "Mathematical analysis of data",
  "Tableau": "Data visualization software",
  "Kotlin": "Cross-platform programming language",
  "Jetpack Compose": "Modern toolkit for building native UI in Android",
  "TensorFlow Lite": "Lightweight solution for mobile and embedded devices",
  "CameraX": "Android library for camera functionality",
  "ML Kit": "Mobile SDK for on-device ML",
};

const projects = [
  {
    title: "Classical Cipher Identification Using Machine Learning",
    description: "BTech Project (BTP) under Dr. Ravi Anand at IIIT-Delhi (Aug 2025 - Present). Training machine learning models to automatically identify classical cipher types from ciphertext using statistical and structural patterns.",
    tags: ["Machine Learning", "Cryptography", "Python"],
    link: "https://iiitd.ac.in/",
  },
  {
    title: "AI For Architects",
    description: "A comprehensive AI-powered platform that transforms architectural visualization through intelligent design generation and dynamic video creation.",
    tags: ["React 18", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Google Veo API", "FFmpeg", "JWT"],
    link: "https://ai-for-architects.com",
  },
  {
    title: "dashboard",
    description: "A modern dashboard application built with Next.js 16, TypeScript, and Tailwind CSS. Features include accessible UI components (Radix UI, Shadcn UI), theme management, robust form handling (React Hook Form, Zod), data tables, and Recharts for data visualization. Optimized for Vercel deployment.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN"],
    link: "https://dashboard-mu-topaz.vercel.app/"
  },
  {
    title: "Document Privacy (DP-Fusion)",
    description: "An enterprise-grade document sanitization platform that automatically removes sensitive information from business documents while maintaining document integrity.",
    tags: ["React 18.3", "TypeScript", "Vite", "Redux Toolkit", "Tailwind CSS", "Node.js", "PyTorch", "Transformers", "FastAPI", "Docker"],
    link: "https://documentprivacy.com/",
  },
  {
    title: "FinSight-NLP-App",
    description: "A web app that performs NLP on financial text using a custom-trained spaCy model. It identifies custom entities (Stocks, Financial Events) and analyzes sentiment with VADER.",
    tags: ["Python", "Flask", "spaCy", "VADER"],
    link: "https://finsight-app-md6v.onrender.com/",
  },
  {
    title: "U.S. Lightning Strikes Analysis",
    description: "A comprehensive data visualization project analyzing 13+ million U.S. lightning strike records (2009-2018) to uncover critical meteorological patterns.",
    tags: ["Tableau", "Python", "Data Analytics", "Statistical Analysis"],
    link: "https://public.tableau.com/app/profile/md.kaif8168/viz/U_S_LightningStrikesStory/U_S_LightningStrikesStory",
  },
  {
    title: "Multi-Scan App",
    description: "A sophisticated Android application that combines document scanning capabilities with real-time landmark recognition using advanced machine learning.",
    tags: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "CameraX", "ML Kit"],
    link: "https://github.com/LordAizen1/Multi-Scan-App",
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
            <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className='text-purple-600 font-bold'>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
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
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;