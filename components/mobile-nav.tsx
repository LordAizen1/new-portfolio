"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Terminal,
  Menu,
  X,
  Home,
  FileCode,
  ScrollText,
  Mail,
  GitBranch,
  XCircle,
  AlertTriangle,
  Github,
  Linkedin,
} from "lucide-react";

const fileTabs = [
  { href: "/", label: "profile.json" },
  { href: "/projects", label: "projects.ts" },
  { href: "/experience", label: "experience.log" },
];

const drawerItems = [
  { href: "/", label: "about.json", icon: Home },
  { href: "/projects", label: "src/projects", icon: FileCode },
  { href: "/experience", label: "experience.log", icon: ScrollText },
];

const bottomNavItems = [
  { href: "/", label: "ROOT", icon: Home },
  { href: "/projects", label: "SRC", icon: FileCode },
  { href: "/experience", label: "LOGS", icon: ScrollText },
];

export function MobileNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Top header */}
      <header className="md:hidden fixed top-0 w-full h-16 bg-black border-b border-primary/10 shadow-[0_0_15px_rgba(255,137,171,0.1)] flex justify-between items-center px-6 z-50">
        <div className="flex items-center gap-3">
          <Terminal size={18} className="text-primary" />
          <span className="font-sans text-xl font-bold uppercase tracking-tighter text-primary">
            MK_PORTFOLIO
          </span>
        </div>
        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation"
          className="text-gray-400 hover:text-primary transition-colors active:scale-95"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* File tabs */}
      <nav
        className="md:hidden fixed top-16 w-full h-10 bg-[#000000] border-b border-white/5 z-40 flex overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {fileTabs.map(({ href, label }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex-none h-full px-4 flex items-center gap-2 border-r border-white/5 transition-colors ${
                isActive
                  ? "bg-[#0e0e0e] border-t-2 border-t-primary text-white"
                  : "bg-[#131313] text-gray-600 opacity-60"
              }`}
            >
              <span className="font-mono text-[10px] tracking-wider whitespace-nowrap">{label}</span>
              {isActive && <span className="text-[10px] text-gray-600 leading-none">✕</span>}
            </Link>
          );
        })}
      </nav>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          onClick={() => setDrawerOpen(false)}
        >
          <aside
            className="fixed inset-y-0 left-0 w-64 bg-[#0a0a0a] border-r border-secondary/20 flex flex-col z-[110] shadow-[20px_0_40px_rgba(196,127,255,0.05)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                FILE_EXPLORER
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close navigation"
                className="text-gray-600 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <nav className="flex-1 py-4">
              {drawerItems.map(({ href, label, icon: Icon }) => {
                const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setDrawerOpen(false)}
                    className={`flex items-center gap-3 py-2.5 px-5 font-mono text-xs uppercase transition-colors border-l-2 ${
                      isActive
                        ? "bg-secondary/10 text-secondary border-secondary"
                        : "text-gray-500 hover:bg-[#1a1919] hover:text-gray-200 border-transparent"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-5 border-t border-white/5">
              <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-3">
                // CONTACT
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:mohdkaif2003@gmail.com"
                  className="text-gray-500 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="https://github.com/LordAizen1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammadkaif007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Mini status bar */}
      <div className="md:hidden fixed bottom-16 w-full h-5 bg-[#201f1f] border-t border-white/5 z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 font-mono text-[8px] text-gray-400">
            <GitBranch size={8} className="text-secondary" />
            <span>main*</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[8px] text-gray-400">
            <XCircle size={8} className="text-red-500" />
            <span>0</span>
            <AlertTriangle size={8} className="text-primary ml-1" />
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center gap-3 font-mono text-[8px] text-gray-500 uppercase tracking-tighter">
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>JSON</span>
        </div>
      </div>

      {/* Bottom nav */}
      <footer className="md:hidden fixed bottom-0 w-full h-16 bg-black border-t border-primary/10 shadow-[0_-4px_20px_rgba(255,137,171,0.05)] z-50 flex justify-around items-center px-4">
        {bottomNavItems.map(({ href, label, icon: Icon }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center gap-0.5 transition-colors active:scale-95 ${
                isActive ? "text-primary" : "text-gray-600 hover:text-gray-400"
              }`}
            >
              <Icon size={18} />
              <span className="font-mono text-[9px] tracking-widest uppercase">{label}</span>
            </Link>
          );
        })}
      </footer>
    </>
  );
}
