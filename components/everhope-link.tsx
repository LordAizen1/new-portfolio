"use client";

import { Highlighter } from "@/components/ui/highlighter";

export function EverHopeLink() {
  return (
    <Highlighter action="highlight" color="#a855f6" isView>
      <a
        href="https://everhope.care/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-purple-200"
      >
        EverHope
      </a>
    </Highlighter>
  );
}
