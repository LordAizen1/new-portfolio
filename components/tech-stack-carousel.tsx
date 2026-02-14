"use client"

import { Marquee } from "@/components/ui/marquee"

const techStack = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "OpenAI", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.24.0/files/dark/openai.png" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
]

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 px-4 py-2">
      <img
        src={icon}
        alt={name}
        className="size-5"
      />
      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export function TechStackCarousel() {
  return (
    <Marquee pauseOnHover className="[--duration:25s] [--gap:0.75rem]">
      {techStack.map((tech) => (
        <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
      ))}
    </Marquee>
  )
}
