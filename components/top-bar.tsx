"use client";

import { usePathname } from "next/navigation";
import { ChevronRight, Search, Terminal, Bell } from "lucide-react";

const breadcrumbs: Record<string, string> = {
  "/": "about_me.json",
  "/projects": "projects.git",
  "/experience": "experience.log",
};

export function TopBar() {
  const pathname = usePathname();
  const file = breadcrumbs[pathname] ?? "index.tsx";

  return (
    <header className="hidden md:flex fixed top-0 left-64 right-0 justify-between items-center px-8 h-16 z-40 bg-transparent backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-black text-primary uppercase tracking-widest">
          MOHAMMAD_KAIF
        </span>
        <div className="h-4 w-px bg-white/10 mx-2" />
        <div className="flex items-center text-xs font-mono text-gray-500 gap-1">
          <ChevronRight size={14} />
          <span>src</span>
          <ChevronRight size={14} />
          <span className="text-primary">{file}</span>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center bg-[#1a1919] px-3 py-1.5 text-gray-500 gap-2 cursor-text">
          <Search size={12} />
          <span className="text-[10px] font-mono uppercase tracking-wider">Search Files...</span>
        </div>
        <div className="flex items-center space-x-4 text-gray-500">
          <Terminal
            size={16}
            className="cursor-pointer hover:text-secondary transition-colors duration-300"
          />
          <Bell
            size={16}
            className="cursor-pointer hover:text-secondary transition-colors duration-300"
          />
        </div>
      </div>
    </header>
  );
}
