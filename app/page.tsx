import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Mohammad Kaif — final-year CS student at IIIT-Delhi, developer, and problem solver. Explore my projects and experience.",
};

const featuredProjects = [
  {
    title: "GradeDash",
    description:
      "AI-powered academic dashboard for IIIT-Delhi students — GPT-4o transcript parsing, RAG chatbot, SGPA/CGPA visualizations, graduation tracker.",
    tags: ["Next.js", "PostgreSQL", "OpenAI API"],
    link: "https://grade-dash.vercel.app/",
    accent: "border-primary",
    tagColor: "text-primary",
    index: "001",
  },
  {
    title: "ToolTree",
    description:
      "Open-source pip-installable Python library implementing MCTS-based LLM tool planning with dual-feedback pruning and multi-provider support.",
    tags: ["Python", "MCTS", "Anthropic API"],
    link: "https://github.com/LordAizen1/ToolTree",
    accent: "border-secondary",
    tagColor: "text-secondary",
    index: "002",
  },
  {
    title: "Kuzushi Labs",
    description:
      "Corporate website with Industrial Luxury design system, scroll-triggered animations, GSAP, and Cloudinary optimization.",
    tags: ["Next.js 16", "Framer Motion", "Lenis"],
    link: "https://www.kuzushilabs.ai/",
    accent: "border-primary",
    tagColor: "text-primary",
    index: "003",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-12">

      {/* ── MOBILE ONLY ─────────────────────────────────────── */}

      {/* Mobile JSON bio card */}
      <div className="md:hidden mb-8 bg-[#131313] p-5 relative overflow-hidden border-l-2 border-primary/20">
        <div className="absolute top-2 right-2 font-mono text-[8px] text-primary opacity-20">
          JSON_MODE
        </div>
        <div className="font-mono text-[11px] leading-relaxed space-y-0.5 mb-6">
          <div><span className="text-gray-700">1</span> <span className="syntax-key">{"{"}</span></div>
          <div><span className="text-gray-700">2</span> &nbsp;&nbsp;<span className="syntax-key">&quot;identity&quot;</span>: <span className="syntax-key">{"{"}</span></div>
          <div><span className="text-gray-700">3</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-key">&quot;name&quot;</span>: <span className="syntax-val">&quot;Mohammad Kaif&quot;</span>,</div>
          <div><span className="text-gray-700">4</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-key">&quot;role&quot;</span>: <span className="syntax-val">&quot;Full-Stack AI Engineer&quot;</span>,</div>
          <div><span className="text-gray-700">5</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-key">&quot;focus&quot;</span>: [<span className="syntax-val">&quot;LLM Agents&quot;</span>, <span className="syntax-val">&quot;Full-Stack Dev&quot;</span>]</div>
          <div><span className="text-gray-700">6</span> &nbsp;&nbsp;<span className="syntax-key">{"}"}</span>,</div>
          <div><span className="text-gray-700">7</span> &nbsp;&nbsp;<span className="syntax-key">&quot;status&quot;</span>: <span className="syntax-val">&quot;OPEN_TO_OPPORTUNITIES_&quot;</span></div>
          <div><span className="text-gray-700">8</span> <span className="syntax-key">{"}"}</span></div>
        </div>
        <div className="pt-5 border-t border-primary/10">
          <h2 className="font-sans text-2xl font-bold uppercase tracking-tighter mb-2">
            Mohammad <span className="text-primary">Kaif</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Final-year CS student at IIIT-Delhi. Interning at 2070 Health &amp; Kuzushi Labs — shipping AI-powered platforms, real-time 3D experiences, and open-source LLM systems.
          </p>
        </div>
      </div>

      {/* Mobile featured projects */}
      <div className="md:hidden mb-8 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary flex items-center gap-2">
            <span className="w-2 h-2 bg-primary animate-pulse inline-block" />
            Deployments.db
          </h3>
          <span className="text-gray-600 font-mono text-[10px]">TOTAL: 0{featuredProjects.length}</span>
        </div>
        {featuredProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col bg-[#1a1919] p-5 border-l-2 ${project.accent}/30 hover:${project.accent} transition-all duration-300`}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="space-y-0.5">
                <p className="font-mono text-[9px] text-secondary">#{project.index}</p>
                <h4 className="font-sans text-lg font-bold uppercase tracking-tight">{project.title}</h4>
              </div>
              <ExternalLink size={16} className="text-primary mt-1 shrink-0" />
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className={`bg-[#262626] px-2 py-0.5 font-mono text-[9px] uppercase ${project.tagColor}`}>
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
        <Link
          href="/projects"
          className="flex items-center gap-2 font-mono text-[10px] text-gray-600 hover:text-primary transition-colors uppercase tracking-widest mt-2"
        >
          <span>$ ls projects/</span>
          <ExternalLink size={10} />
        </Link>
      </div>

      {/* Mobile stats grid */}
      <div className="md:hidden mb-8">
        <h3 className="font-mono text-xs uppercase tracking-widest text-secondary mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-secondary inline-block" />
          System_Diagnostics
        </h3>
        <div className="grid grid-cols-2 gap-px bg-white/5">
          {[
            { label: "Projects", value: "13" },
            { label: "Internships", value: "2" },
            { label: "Batch", value: "'26" },
            { label: "Status", value: "OPEN", valueClass: "text-primary" },
          ].map(({ label, value, valueClass }) => (
            <div key={label} className="bg-[#0e0e0e] p-4">
              <p className="font-mono text-[9px] text-gray-600 uppercase mb-1">{label}</p>
              <p className={`font-sans text-lg font-bold ${valueClass ?? "text-white"}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile resume link */}
      <div className="md:hidden mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <button className="font-mono text-xs text-gray-600 hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-2">
              <span>$ cat Md_Kaif_CV.pdf</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[80vh] bg-[#1a1919] border-primary/20">
            <DialogHeader>
              <DialogTitle className="font-mono text-primary uppercase tracking-widest text-sm">
                Md_Kaif_CV.pdf
              </DialogTitle>
            </DialogHeader>
            <iframe src="/images/Md_Kaif_CV.pdf" className="w-full h-[70vh] border-0" title="Resume PDF" />
          </DialogContent>
        </Dialog>
      </div>

      {/* ── DESKTOP ONLY ────────────────────────────────────── */}

      {/* File tabs */}
      <div className="hidden md:flex space-x-[2px] mb-8">
        <div className="bg-[#0e0e0e] px-4 py-2 flex items-center space-x-2 border-t-2 border-primary">
          <FileText size={12} className="text-primary" />
          <span className="font-mono text-xs">about_me.json</span>
          <span className="text-[10px] text-gray-600 hover:text-white cursor-pointer ml-1">✕</span>
        </div>
      </div>

      {/* Code editor content */}
      <div className="hidden md:block font-mono text-sm leading-relaxed">
        <div className="flex space-x-8">
          {/* Line numbers */}
          <div className="text-gray-700 text-right w-6 select-none shrink-0 leading-6">
            {Array.from({ length: 22 }, (_, i) => (
              <div key={i + 1}>{i + 1}</div>
            ))}
          </div>

          {/* Code content */}
          <div className="flex-1 leading-6">
            <div className="syntax-comment">// INITIALIZING SYSTEM_USER_PROFILE...</div>
            <div>{"{"}</div>
            <div className="ml-6">
              <span className="syntax-key">&quot;identity&quot;</span>
              <span>: {"{"}</span>
            </div>
            <div className="ml-12">
              <span className="syntax-key">&quot;alias&quot;</span>
              <span>: </span>
              <span className="syntax-val">&quot;Mohammad Kaif&quot;</span>
              <span>,</span>
            </div>
            <div className="ml-12">
              <span className="syntax-key">&quot;role&quot;</span>
              <span>: </span>
              <span className="syntax-val">&quot;Full-Stack AI Engineer // CS @ IIIT-Delhi&quot;</span>
              <span>,</span>
            </div>
            <div className="ml-12">
              <span className="syntax-key">&quot;focus&quot;</span>
              <span>: [</span>
              <span className="syntax-val">&quot;LLM Agents&quot;</span>
              <span>, </span>
              <span className="syntax-val">&quot;Full-Stack Dev&quot;</span>
              <span>, </span>
              <span className="syntax-val">&quot;Problem Solving&quot;</span>
              <span>]</span>
            </div>
            <div className="ml-6">{"  },"}</div>

            <div className="ml-6 mt-1">
              <span className="syntax-key">&quot;biography&quot;</span>
              <span>: </span>
              <span className="syntax-val text-sm">
                &quot;Final-year CS student at IIIT-Delhi. Interning at 2070 Health &amp; Kuzushi Labs — shipping AI-powered platforms, real-time 3D experiences, and open-source LLM agent systems.&quot;
              </span>
              <span>,</span>
            </div>

            <div className="ml-6 mt-1">
              <span className="syntax-key">&quot;featured_projects&quot;</span>
              <span>: [</span>
            </div>

            {/* Inline project cards */}
            <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 ml-6">
              {featuredProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden bg-[#1a1919] p-5 border-l-2 ${project.accent}/30 hover:${project.accent} transition-all duration-500`}
                >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} className="text-gray-500" />
                  </div>
                  <h3 className="font-sans font-bold text-sm text-white mb-2 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`bg-[#262626] px-2 py-0.5 text-[9px] ${project.tagColor} font-mono uppercase`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            <div className="ml-6">
              <span>],</span>
            </div>

            <div className="ml-6 mt-1">
              <span className="syntax-key">&quot;resume&quot;</span>
              <span>: </span>
              <Dialog>
                <DialogTrigger asChild>
                  <span className="syntax-val cursor-pointer hover:underline underline-offset-2">
                    &quot;Md_Kaif_CV.pdf&quot;
                  </span>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] bg-[#1a1919] border-primary/20">
                  <DialogHeader>
                    <DialogTitle className="font-mono text-primary uppercase tracking-widest text-sm">
                      Md_Kaif_CV.pdf
                    </DialogTitle>
                  </DialogHeader>
                  <iframe src="/images/Md_Kaif_CV.pdf" className="w-full h-[70vh] border-0" title="Resume PDF" />
                </DialogContent>
              </Dialog>
              <span>,</span>
            </div>

            <div className="ml-6 mt-1">
              <span className="syntax-key">&quot;status&quot;</span>
              <span>: </span>
              <span className="syntax-val">&quot;OPEN_TO_OPPORTUNITIES_&quot;</span>
            </div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>

      {/* Bento grid (desktop only) */}
      <div className="hidden md:grid mt-20 grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 bg-[#0e0e0e] p-8 relative group overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h4 className="font-sans text-2xl font-black mb-6 uppercase tracking-tight">
              Core_Specialization
            </h4>
            <div className="grid grid-cols-2 gap-8 font-mono">
              <div>
                <p className="text-primary text-[10px] mb-3">// AI &amp; LLM ENGINEERING</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>&gt; LLM Agent Architectures</li>
                  <li>&gt; RAG &amp; Tool Planning (MCTS)</li>
                  <li>&gt; OpenAI / Gemini / Claude APIs</li>
                </ul>
              </div>
              <div>
                <p className="text-secondary text-[10px] mb-3">// FULL-STACK DEVELOPMENT</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>&gt; Next.js / React / TypeScript</li>
                  <li>&gt; Node.js, FastAPI, PostgreSQL</li>
                  <li>&gt; 3D Web (Three.js, R3F)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 bg-[#0e0e0e] flex flex-col justify-center items-center p-8 border border-secondary/20">
          <div className="text-center">
            <div className="text-5xl font-sans font-bold text-white">13</div>
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-1">
              Projects Built
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="text-2xl font-sans font-bold text-white">2</div>
            <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-1">
              Active Internships
            </div>
          </div>
        </div>
      </div>

      {/* View all projects (desktop only) */}
      <div className="hidden md:flex mt-8 justify-end">
        <Link
          href="/projects"
          className="font-mono text-xs text-gray-600 hover:text-primary transition-colors uppercase tracking-widest group flex items-center gap-2"
        >
          <span>$ ls projects/</span>
          <ExternalLink size={10} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Floating terminal widget (desktop only) */}
      {/* <div className="hidden md:block fixed bottom-14 right-6 z-50 glass-panel p-4 border-l-2 border-primary group hover:scale-105 transition-transform">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
          <div className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest">
            System_Online
          </div>
        </div>
        <div className="mt-2 font-mono text-[9px] text-gray-500 leading-relaxed">
          $ whoami
          <br />
          &gt; MK // CS @ IIIT-Delhi
          <br />
          &gt; Available for opportunities_
        </div>
      </div> */}
    </div>
  );
}
