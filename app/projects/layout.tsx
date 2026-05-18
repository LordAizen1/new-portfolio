import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Mohammad Kaif's software projects - from AI-powered platforms and 3D web experiences to mobile apps and NLP tools.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
