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
    title: "Freelance Software Engineer (Part-Time)",
    company: "2070 Health",
    duration: "Jan 2026 – Apr 2026",
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
    title: "Freelance Frontend & Shopify Developer",
    company: "Adiamara",
    duration: "Apr 2026",
    description:
      "Freelance engagement for a Dubai-based lab-grown diamond e-commerce brand. Diagnosed and replaced a broken Shopify marketplace currency converter with a free exchange-rate API, adding a polished country flag and currency icon dropdown. Built a standalone HTML bulk-pricing tool that generates Matrixify-compatible CSVs for mass-updating jewellery variant prices across the Shopify catalogue — reducing hours of manual per-variant edits to a single import.",
    link: "https://adiamara.com",
    type: "work",
  },
  {
    title: "Freelance Full Stack AI Engineer",
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

const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="white"/>
  </svg>
);

const IBMLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1F70C1">
    <path d="M23.544 15.993c.038 0 .06-.017.06-.053v-.036c0-.035-.022-.052-.06-.052h-.09v.14zm-.09.262h-.121v-.498h.225c.112 0 .169.066.169.157 0 .079-.036.129-.09.15l.111.19h-.133l-.092-.17h-.07zm.434-.222v-.062c0-.2-.157-.357-.363-.357a.355.355 0 00-.363.357v.062c0 .2.156.358.363.358a.355.355 0 00.363-.358zm-.838-.03c0-.28.212-.492.475-.492.264 0 .475.213.475.491 0 .279-.211.491-.475.491a.477.477 0 01-.475-.49zM16.21 8.13l-.216-.624h-3.56v.624zm.413 1.19l-.216-.623h-3.973v.624zm2.65 7.147h3.107v-.624h-3.108zm0-1.192h3.107v-.623h-3.108zm0-1.19h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-3.555l-.175.504-.175-.504h-3.555v.624h1.865v-.574l.2.574h3.33l.2-.574zm1.864-1.815h-3.142l-.217.624h3.359zm-7.46 3.006h1.865v-.624h-1.865zm0 1.19h1.865v-.623h-1.865zm-1.243 1.191h3.108v-.623h-3.108zm0 1.192h3.108v-.624h-3.108zm6.386-8.961l-.216.624h3.776v-.624zm-.629 1.815h4.19v-.624h-3.974zm-4.514 1.19h3.359l-.216-.623h-3.143zm2.482 2.383h2.496l.218-.624h-2.932zm.417 1.19h1.662l.218-.623h-2.098zm.416 1.191h.83l.218-.623h-1.266zm.414 1.192l.217-.624h-.432zm-12.433-.006l4.578.006c.622 0 1.18-.237 1.602-.624h-6.18zm4.86-3v.624h2.092c0-.216-.03-.425-.083-.624zm-3.616.624h1.865v-.624H6.217zm3.617-3.573h2.008c.053-.199.083-.408.083-.624H9.834zm-3.617 0h1.865v-.624H6.217zM9.55 7.507H4.973v.624h6.18a2.36 2.36 0 00-1.602-.624zm2.056 1.191H4.973v.624h6.884a2.382 2.382 0 00-.25-.624zm-5.39 2.382v.624h4.87c.207-.176.382-.387.519-.624zm4.87 1.191h-4.87v.624h5.389a2.39 2.39 0 00-.519-.624zm-6.114 3.006h6.634c.11-.193.196-.402.25-.624H4.973zM0 8.13h4.352v-.624H0zm0 1.191h4.352v-.624H0zm1.243 1.191h1.865v-.624H1.243zm0 1.191h1.865v-.624H1.243zm0 1.19h1.865v-.623H1.243zm0 1.192h1.865v-.624H1.243zM0 15.276h4.352v-.623H0zm0 1.192h4.352v-.624H0Z"/>
  </svg>
);

const BRAND_LOGOS: Record<string, React.FC> = { Google: GoogleLogo, IBM: IBMLogo };
const BRAND_BG: Record<string, string> = { Google: '#0d1117', IBM: '#0d1117' };

const achievements = [
  {
    title: "Google Advanced Data Analytics Certificate",
    brand: "Google",
    description:
      "Mastered advanced data analysis and ML techniques including logistic regression, random forest, and decision trees through hands-on projects with real-world datasets.",
    link: "https://www.credly.com/badges/6badd752-6eb5-4921-8d4e-2fc5bb36c14c/linked_in_profile",
  },
  {
    title: "IBM Qiskit Global Summer School",
    brand: "IBM",
    description:
      "Selected from thousands of global applicants for IBM's quantum computing program. Completed 4 advanced quantum computing tasks using IBM's cloud quantum computers.",
    link: "https://www.credly.com/badges/fc613fda-7639-42ad-b4c6-6316cf0afeaf/public_url",
  },
  {
    title: "IBM Artificial Intelligence Fundamentals",
    brand: "IBM",
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
                    {exp.company} <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '2px' }}><path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
                    {item.org} <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '2px' }}><path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
          {achievements.map((ach) => {
            const Logo = BRAND_LOGOS[ach.brand];
            return (
            <div key={ach.title} className="pcard">
              <div className="pcard-top">
                <div className="pcard-icon" style={{ background: BRAND_BG[ach.brand], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {Logo && <Logo />}
                </div>
                <a className="pcard-link" href={ach.link} target="_blank" rel="noopener noreferrer">
                  credential <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '2px' }}><path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
              <div className="pcard-name" style={{ fontSize: '18px' }}>{ach.title}</div>
              <div className="pcard-desc" style={{ fontSize: '11px', lineHeight: '1.7', marginTop: '10px' }}>{ach.description}</div>
            </div>
          );
          })}
        </div>
      </section>
    </main>
  );
}
