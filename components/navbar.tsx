"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Home, Keyboard, PawPrint, Projector, User } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: Projector },
  { href: "/experience", label: "Experience", icon: User },
];

const EASTER_EGG_URL = "https://clowder-eosin.vercel.app/";
const CAT_SEQUENCE = "cat";
const HOLD_DURATION_MS = 700;

export function Navbar() {
  const pathname = usePathname();
  const sequenceRef = useRef("");
  const holdStartRef = useRef<number | null>(null);
  const holdRafRef = useRef<number | null>(null);
  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);

  const launchCatProject = () => {
    window.open(EASTER_EGG_URL, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const activeElement = document.activeElement;
      if (
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement ||
        activeElement instanceof HTMLSelectElement ||
        activeElement?.getAttribute("contenteditable") === "true"
      ) {
        return;
      }

      if (event.key.length !== 1) {
        return;
      }

      sequenceRef.current = (sequenceRef.current + event.key.toLowerCase()).slice(
        -CAT_SEQUENCE.length
      );

      if (sequenceRef.current === CAT_SEQUENCE) {
        sequenceRef.current = "";
        launchCatProject();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (holdRafRef.current !== null) {
        cancelAnimationFrame(holdRafRef.current);
      }
    };
  }, []);

  const cancelHoldToOpen = (resetProgress = true) => {
    if (holdRafRef.current !== null) {
      cancelAnimationFrame(holdRafRef.current);
      holdRafRef.current = null;
    }

    holdStartRef.current = null;
    setIsHolding(false);
    if (resetProgress) {
      setHoldProgress(0);
    }
  };

  const startHoldToOpen = () => {
    if (holdRafRef.current !== null) {
      return;
    }

    setIsHolding(true);
    setHoldProgress(0);
    holdStartRef.current = performance.now();

    const step = (now: number) => {
      if (holdStartRef.current === null) {
        return;
      }

      const elapsed = now - holdStartRef.current;
      const progress = Math.min(100, (elapsed / HOLD_DURATION_MS) * 100);
      setHoldProgress(progress);

      if (elapsed >= HOLD_DURATION_MS) {
        launchCatProject();
        cancelHoldToOpen();
        return;
      }

      holdRafRef.current = requestAnimationFrame(step);
    };

    holdRafRef.current = requestAnimationFrame(step);
  };

  const activeIndex = Math.max(
    navItems.findIndex(({ href }) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href)
    ),
    0
  );

  return (
    <div className="flex flex-col items-center gap-1.5">
      <NavigationMenu>
        <NavigationMenuList className="relative grid w-[22rem] grid-cols-3 gap-0 rounded-lg border border-purple-500/25 bg-background/60 p-1 backdrop-blur-sm">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-1 left-1 z-0 rounded-md bg-purple-600 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: `calc((100% - 0.5rem) / ${navItems.length})`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <NavigationMenuItem key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative z-10 inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2",
                    isActive
                      ? "text-white"
                      : "text-foreground/80 hover:text-foreground focus-visible:text-foreground"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="size-4" />
                    {label}
                  </span>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="group hidden items-center gap-2 rounded-full border border-purple-500/20 bg-background/50 px-2.5 py-1 text-[10px] text-foreground/40 backdrop-blur-sm transition-colors hover:border-purple-500/35 hover:text-foreground/70 md:inline-flex">
        <Keyboard className="size-3.5" aria-hidden="true" />
        <span className="uppercase tracking-[0.18em]">secret</span>
        <div className="flex items-center gap-1 opacity-75 transition-opacity group-hover:opacity-100">
          {["C", "A", "T"].map((key) => (
            <kbd
              key={key}
              className="rounded border border-purple-500/25 bg-background/80 px-1.5 py-0.5 text-[9px] font-semibold text-foreground/70"
            >
              {key}
            </kbd>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="Long press to open a hidden project"
        onTouchStart={startHoldToOpen}
        onTouchEnd={cancelHoldToOpen}
        onTouchCancel={cancelHoldToOpen}
        className={cn(
          "relative inline-flex select-none touch-none items-center gap-1.5 overflow-hidden rounded-full border border-purple-500/20 bg-background/50 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-foreground/45 backdrop-blur-sm md:hidden",
          isHolding && "border-purple-500/40 text-foreground/75"
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 origin-center rounded-full bg-purple-500/25 will-change-transform"
          style={{ transform: `scaleX(${holdProgress / 100})` }}
        />
        <PawPrint className="relative z-10 size-3.5" aria-hidden="true" />
        <span className="relative z-10">hold</span>
      </button>
    </div>
  );
}
