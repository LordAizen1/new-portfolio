"use client";

import { Mail, Linkedin, Github } from "lucide-react";

export function ContactLinks() {
  return (
    <div className="fixed bottom-4 right-4">
      <div className="flex flex-col items-end">
        <p className="text-sm font-bold mb-2">Contact</p>
        <div className="flex gap-4">
          <a href="mailto:mohdkaif2003@gmail.com" className="hover:scale-110 transition-transform">
            <Mail />
          </a>
          <a href="https://www.linkedin.com/in/mohammadkaif007/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Linkedin />
          </a>
          <a href="https://github.com/LordAizen1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}
