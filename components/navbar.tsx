"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Home, Projector, User } from "lucide-react";

export function Navbar() {
  return (
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" className={navigationMenuTriggerStyle()}>
            <span className="flex items-center gap-2">
              <Home />
              Home
            </span>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/projects" className={navigationMenuTriggerStyle()}>
            <span className="flex items-center gap-2">
              <Projector />
              Projects
            </span>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/experience" className={navigationMenuTriggerStyle()}>
            <span className="flex items-center gap-2">
              <User />
              Experience
            </span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
