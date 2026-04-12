"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FolderOpen,
  FileText,
  FileCode,
  ScrollText,
  Search,
  GitBranch,
  Settings,
  ChevronDown,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const files = [
  { href: "/", label: "about_me.json", icon: FileText, iconColor: "text-primary" },
  { href: "/projects", label: "projects.git", icon: FileCode, iconColor: "text-secondary" },
  { href: "/experience", label: "experience.log", icon: ScrollText, iconColor: "text-secondary" },
];

const activityItems = [
  { icon: FolderOpen, active: true },
  { icon: Search, active: false },
  { icon: GitBranch, active: false },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 z-50 flex-row">

      {/* Activity bar */}
      <div className="w-12 shrink-0 flex flex-col items-center bg-[#0a0a0a] border-r border-white/5 py-2">
        {activityItems.map(({ icon: Icon, active }, i) => (
          <button
            key={i}
            className={`relative w-full flex justify-center py-3.5 transition-colors border-l-2 ${active
              ? "text-white border-primary"
              : "text-gray-600 hover:text-gray-300 border-transparent"
              }`}
          >
            <Icon size={20} />
          </button>
        ))}

        <div className="flex-1" />

        <button className="w-full flex justify-center py-3.5 text-gray-600 hover:text-gray-300 transition-colors">
          <Settings size={20} />
        </button>
      </div>

      {/* Explorer panel */}
      <div className="flex-1 flex flex-col bg-[#0e0e0e] overflow-hidden">

        {/* Panel header */}
        <div className="px-3 py-2.5 border-b border-white/5">
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            Explorer
          </span>
        </div>

        {/* File tree */}
        <div className="flex-1 overflow-y-auto py-1">

          {/* Root folder */}
          <div className="flex items-center gap-1 px-2 py-1 text-gray-300 cursor-default select-none">
            <ChevronDown size={13} className="text-gray-500 shrink-0" />
            <span className="font-mono text-xs uppercase tracking-wide">Sussybaka</span>
          </div>

          {/* src/ folder */}
          <div className="flex items-center gap-1 pl-5 pr-2 py-1 text-gray-400 cursor-default select-none">
            <ChevronDown size={13} className="text-gray-500 shrink-0" />
            <FolderOpen size={14} className="text-secondary shrink-0" />
            <span className="font-mono text-xs">src</span>
          </div>

          {/* Files */}
          {files.map(({ href, label, icon: Icon, iconColor }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 pl-10 pr-2 py-1 font-mono text-xs transition-colors ${isActive
                  ? "bg-[#37373d] text-white"
                  : "text-gray-500 hover:text-gray-300 hover:bg-[#2a2d2e]"
                  }`}
              >
                <Icon size={14} className={`${iconColor} shrink-0`} />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Contact */}
        <div className="p-4 border-t border-white/5">
          <p className="font-mono text-[10px] text-gray-700 uppercase tracking-widest mb-3">
            // contact
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:mohdkaif2003@gmail.com" aria-label="Email" className="text-gray-600 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/LordAizen1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohammadkaif007/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>
    </aside>
  );
}
