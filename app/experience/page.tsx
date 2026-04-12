import type { Metadata } from "next";
import { ScrollText, ExternalLink } from "lucide-react";
import { EverHopeLink } from "@/components/everhope-link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Mohammad Kaif's work experience, open-source contributions, education, and achievements in software engineering.",
};

const experiences = [
  {
    title: "Software Engineer Intern, Part-Time",
    company: "2070 Health",
    duration: "Dec 2025 – Present",
    description: (
      <>
        Building and maintaining a production Next.js/React/TypeScript healthcare platform serving
        real patients. Leading SSR migrations, debugging Docker build pipelines, fixing SEO and meta
        tag issues at scale, and improving site reliability through link audits. Currently working
        on <EverHopeLink />.
      </>
    ),
    link: "https://2070health.com/",
    accent: "border-primary",
  },
  {
    title: "Full Stack AI Engineer Intern",
    company: "Kuzushi Labs",
    duration: "Nov 2025 – Present",
    description:
      "Designing and developing cutting-edge web applications with seamless AI integration. Leveraging modern web technologies and AI models to create intelligent user experiences.",
    link: "https://www.kuzushilabs.xyz/",
    accent: "border-secondary",
  },
];

const openSource = [
  {
    title: "Open Source Contributor — IIITD-PYQs",
    org: "IIITD-PYQs",
    duration: "May 2025",
    description:
      "Contributed past year course materials for Design Research to a widely-used IIITD repository, enhancing resources for thousands of students. Submitted and merged PR #44 — my first merged open-source contribution.",
    link: "https://github.com/NalishJain/IIITD-PYQs/pull/44",
    accent: "border-white/20 hover:border-white/50",
  },
];

const education = [
  {
    degree: "Bachelor of Technology — Computer Science",
    university: "Indraprastha Institute of Information Technology, Delhi (IIIT-D)",
    duration: "2022 – 2026",
  },
];

const achievements = [
  {
    title: "Google Advanced Data Analytics Certificate",
    description:
      "Mastered advanced data analysis and ML techniques including logistic regression, random forest, and decision trees through hands-on projects with real-world datasets.",
    link: "https://www.credly.com/badges/6badd752-6eb5-4921-8d4e-2fc5bb36c14c/linked_in_profile",
  },
  {
    title: "IBM Qiskit Global Summer School",
    description:
      "Selected from thousands of global applicants for IBM's quantum computing program. Completed 4 advanced quantum computing tasks using IBM's cloud quantum computers.",
    link: "https://www.credly.com/badges/fc613fda-7639-42ad-b4c6-6316cf0afeaf/public_url",
  },
  {
    title: "IBM Artificial Intelligence Fundamentals",
    description:
      "Demonstrated proficiency in core AI concepts, machine learning principles, and practical applications with IBM Watson AI Studio.",
    link: "https://www.credly.com/badges/6badd752-6eb5-4921-8d4e-2fc5bb36c14c/linked_in_profile",
  },
];

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-1">
      {text}
    </p>
  );
}

export default function ExperiencePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-12 py-6 md:py-12">
      {/* File tab */}
      <div className="hidden md:flex space-x-[2px] mb-8">
        <div className="bg-[#0e0e0e] px-4 py-2 flex items-center space-x-2 border-t-2 border-primary">
          <ScrollText size={12} className="text-primary" />
          <span className="font-mono text-xs">experience.log</span>
          <span className="text-[10px] text-gray-600 hover:text-white cursor-pointer ml-1">✕</span>
        </div>
      </div>

      {/* Page header */}
      {/* <div className="mb-10">
        <div className="font-mono text-[10px] text-secondary mb-2">// EXPERIENCE_LOG</div>
      </div> */}

      {/* Work Experience */}
      <section className="mb-14">
        <SectionLabel text="// WORK_EXPERIENCE" />
        <h2 className="font-sans text-xl font-bold mb-6 uppercase tracking-tight">Work Experience</h2>
        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className={`group relative bg-[#1a1919] p-6 border-l-2 ${exp.accent}/30 hover:${exp.accent} transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-sans font-bold text-white uppercase tracking-tight text-sm">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Visit ${exp.company}`}
                  >
                    <ExternalLink size={12} className="text-gray-500 hover:text-primary transition-colors" />
                  </a>
                </div>
                <p className="font-mono text-[10px] text-gray-600 uppercase tracking-wider mb-3">
                  {exp.company} &nbsp;|&nbsp; {exp.duration}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section className="mb-14">
        <SectionLabel text="// OPEN_SOURCE" />
        <h2 className="font-sans text-xl font-bold mb-6 uppercase tracking-tight">
          Open Source Contributions
        </h2>
        <div className="flex flex-col gap-4">
          {openSource.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-[#1a1919] p-6 border-l-2 ${item.accent} transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-sans font-bold text-white uppercase tracking-tight text-sm">
                    {item.title}
                  </h3>
                  <ExternalLink
                    size={12}
                    className="text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                  />
                </div>
                <p className="font-mono text-[10px] text-gray-600 uppercase tracking-wider mb-3">
                  {item.org} &nbsp;|&nbsp; {item.duration}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-14">
        <SectionLabel text="// EDUCATION" />
        <h2 className="font-sans text-xl font-bold mb-6 uppercase tracking-tight">Education</h2>
        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-[#1a1919] p-6 border-l-2 border-secondary/30"
            >
              <h3 className="font-sans font-bold text-white uppercase tracking-tight text-sm mb-1">
                {edu.degree}
              </h3>
              <p className="font-mono text-[10px] text-gray-600 uppercase tracking-wider">
                {edu.university} &nbsp;|&nbsp; {edu.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-10">
        <SectionLabel text="// ACHIEVEMENTS" />
        <h2 className="font-sans text-xl font-bold mb-6 uppercase tracking-tight">Achievements</h2>
        <div className="flex flex-col gap-4">
          {achievements.map((ach) => (
            <a
              key={ach.title}
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#1a1919] p-6 border-l-2 border-primary/20 hover:border-primary/60 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-sans font-bold text-white uppercase tracking-tight text-sm">
                    {ach.title}
                  </h3>
                  <ExternalLink
                    size={12}
                    className="text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{ach.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="pt-6 border-t border-white/5">
        <p className="font-mono text-[10px] text-gray-700 uppercase tracking-widest">
          // EOF — experience.log
        </p>
      </div>
    </div>
  );
}
