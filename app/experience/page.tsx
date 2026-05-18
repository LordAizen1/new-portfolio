import type { Metadata } from "next";
import { EverHopeLink } from "@/components/everhope-link";
import React from "react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Mohammad Kaif's work experience, open-source contributions, education, and achievements in software engineering.",
};

const experiences = [
  {
    title: "Software Engineer Intern (Part-Time)",
    company: "2070 Health",
    duration: "Jan 2026 – Mar 2026",
    description: (
      <>
        Building and maintaining a production Next.js/React/TypeScript
        healthcare platform serving real patients. Leading SSR migrations,
        debugging Docker build pipelines, fixing SEO and meta tag issues at
        scale, and improving site reliability through link audits. Currently
        working on <EverHopeLink />.
      </>
    ),
    link: "https://2070health.com/",
    type: "work",
  },
  {
    title: "Full Stack AI Engineer Intern",
    company: "Kuzushi Labs",
    duration: "Nov 2025 – Mar 2026",
    description:
      "Designing and developing cutting-edge web applications with seamless AI integration. Leveraging modern web technologies and AI models to create intelligent user experiences.",
    link: "https://www.kuzushilabs.xyz/",
    type: "work",
  },
];

const openSource = [
  {
    title: "Open Source Contributor | IIITD-PYQs",
    org: "IIITD-PYQs",
    duration: "May 2025",
    description:
      "Contributed past year course materials for Design Research to a widely-used IIITD repository, enhancing resources for thousands of students. Submitted and merged PR #44, my first open-source contribution.",
    link: "https://github.com/NalishJain/IIITD-PYQs/pull/44",
  },
];

const education = [
  {
    degree: "Bachelor of Technology, Computer Science",
    university: "Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi)",
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

export default function ExperiencePage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      {/* Work Experience */}
      <section style={{ marginBottom: '80px' }}>
        <div className="sec-head">
          <span className="sec-label">work experience</span>
          <div className="sec-line"></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '2.5rem' }}>
          {experiences.map((exp) => (
            <div key={exp.title} className="pcard" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 className="pcard-name" style={{ margin: 0 }}>
                    {exp.title}
                  </h3>
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '.06em', fontFamily: 'var(--font-mono)' }}
                  >
                    {exp.company} ↗
                  </a>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--tm)', fontFamily: 'var(--font-mono)' }}>
                  {exp.duration}
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--ts)', lineHeight: '1.8' }}>
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section style={{ marginBottom: '80px' }}>
        <div className="sec-head">
          <span className="sec-label">open source contributions</span>
          <div className="sec-line"></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '2.5rem' }}>
          {openSource.map((item) => (
            <div key={item.title} className="pcard" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 className="pcard-name" style={{ margin: 0 }}>
                    {item.title}
                  </h3>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '.06em', fontFamily: 'var(--font-mono)' }}
                  >
                    {item.org} ↗
                  </a>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--tm)', fontFamily: 'var(--font-mono)' }}>
                  {item.duration}
                </span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--ts)', lineHeight: '1.8' }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '80px' }}>
        <div className="sec-head">
          <span className="sec-label">education</span>
          <div className="sec-line"></div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          {education.map((edu) => (
            <div key={edu.degree} className="pcard" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h3 className="pcard-name" style={{ margin: 0 }}>
                    {edu.degree}
                  </h3>
                  <span style={{ fontSize: '11px', color: 'var(--ts)', letterSpacing: '.06em' }}>
                    {edu.university}
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--tm)', fontFamily: 'var(--font-mono)' }}>
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section style={{ marginBottom: '40px' }}>
        <div className="sec-head">
          <span className="sec-label">achievements & certifications</span>
          <div className="sec-line"></div>
        </div>

        <div className="projects-grid" style={{ marginTop: '2.5rem' }}>
          {achievements.map((ach, idx) => (
            <div key={ach.title} className="pcard">
              <div className="pcard-top">
                <div className="pcard-icon" style={{ background: '#1a1035' }}>🏆</div>
                <a className="pcard-link" href={ach.link} target="_blank" rel="noopener noreferrer">
                  credential ↗
                </a>
              </div>
              <div className="pcard-name" style={{ fontSize: '18px' }}>{ach.title}</div>
              <div className="pcard-desc" style={{ fontSize: '11px', lineHeight: '1.7', marginTop: '10px' }}>{ach.description}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
