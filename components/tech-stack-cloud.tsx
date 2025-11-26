"use client"

import { IconCloud } from "@/components/ui/icon-cloud"

export function TechStackCloud() {
    const iconSlugs = [
        "typescript",
        "javascript",
        "react",
        "html5",
        "css3",
        "nextdotjs",
        "tailwindcss",
        "nodejs",
        "git",
        "github",
        "visualstudiocode",
        "vercel",
        "openai",
        "googlegemini",
        "anthropic",
        "python",
        "docker",
    ]

    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden">
            <IconCloud
                images={iconSlugs.map(
                    (slug) => `https://cdn.simpleicons.org/${slug}`
                )}
            />
        </div>
    )
}
