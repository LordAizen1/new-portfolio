"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const EASTER_EGG_URL = "https://clowder-eosin.vercel.app/";
const CAT_SEQUENCE = "cat";

const SECTIONS = [
  { id: "hero", label: "home", path: "/#" },
  { id: "graph", label: "activity", path: "/#graph" },
  { id: "work", label: "work", path: "/#work" },
  { id: "skills", label: "skills", path: "/#skills" },
  { id: "about", label: "analog", path: "/#about" },
  { id: "contact", label: "contact", path: "/#contact" }
];

const PAGES = [
  { label: "projects", path: "/projects" },
  { label: "resume", path: "/resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef("");

  const launchCatProject = () => {
    window.open(EASTER_EGG_URL, "_blank", "noopener,noreferrer");
  };

  // Easter egg listener
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const el = document.activeElement;
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el instanceof HTMLSelectElement ||
        el?.getAttribute("contenteditable") === "true"
      )
        return;
      if (event.key.length !== 1) return;
      sequenceRef.current = (
        sequenceRef.current + event.key.toLowerCase()
      ).slice(-CAT_SEQUENCE.length);
      if (sequenceRef.current === CAT_SEQUENCE) {
        sequenceRef.current = "";
        launchCatProject();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Scroll listener for background color transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy & route detection
  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/projects")) {
        setActiveSection("projects");
      } else if (pathname.startsWith("/resume")) {
        setActiveSection("resume");
      }
      return;
    }

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Trigger offset

      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      for (const section of SECTIONS) {
        if (section.id === "hero") continue;
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""} ref={dropdownRef}>
      {/* Desktop Navigation: Horizontal Slash-Separated Path */}
      <div className="nav-desktop">
        <Link href="/" className="nav-name">
          mohammad.kaif
        </Link>
        <ul className="nav-links">
          <li><Link href="/#graph">activity</Link></li>
          <li><Link href="/#work">work</Link></li>
          <li><Link href="/#skills">skills</Link></li>
          <li><Link href="/#about">analog</Link></li>
          <li><Link href="/#contact">contact</Link></li>
          <li><Link href="/projects">projects</Link></li>
          <li><Link href="/resume">resume</Link></li>
        </ul>
      </div>

      {/* Mobile Navigation: Sleek Breadcrumb Selector Dropdown */}
      <div className="nav-mobile">
        <div className="breadcrumb-container">
          <Link href="/" className="nav-name" onClick={() => setIsOpen(false)}>
            mohammad.kaif
          </Link>
          
          <span className="nav-sep">/</span>
          
          <div className="breadcrumb-active-item" onClick={() => setIsOpen(!isOpen)}>
            <span className="active-label">{activeSection}</span>
            <svg
              className={`breadcrumb-chevron ${isOpen ? "open" : ""}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <polyline points="2,4 6,8 10,4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {isOpen && (
            <div className="breadcrumb-dropdown">
              <div className="dropdown-group">
                <div className="group-title">sections</div>
                {SECTIONS.map((sec) => (
                  <Link 
                    key={sec.label}
                    href={sec.path} 
                    className={`dropdown-item ${activeSection === sec.label ? "active" : ""}`}
                    onClick={() => {
                      setIsOpen(false);
                      if (pathname === "/") {
                        const el = document.getElementById(sec.id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {sec.label}
                  </Link>
                ))}
              </div>
              
              <div className="dropdown-divider"></div>
              
              <div className="dropdown-group">
                <div className="group-title">pages</div>
                {PAGES.map((page) => (
                  <Link 
                    key={page.label}
                    href={page.path} 
                    className={`dropdown-item ${activeSection === page.label ? "active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
