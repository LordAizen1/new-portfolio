"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Projector, User } from "lucide-react";

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

export function Navbar() {
  const pathname = usePathname();
  const activeIndex = Math.max(
    navItems.findIndex(({ href }) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href)
    ),
    0
  );

  return (
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
  );
}
