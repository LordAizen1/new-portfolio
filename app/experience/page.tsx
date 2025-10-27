import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';

const experiences = [
  {
    title: "Intern, LLM Engineer",
    company: "Alpine Privacy",
    duration: "June 2025 - Aug 2025",
    description: "Build and fine-tuned LLM-based agentic applications for privacy-centric use cases. Contributed to the development of scalable AI pipelines in a fast-paced startup environment. Utilized various tools such as NER, LLMs to accelerate model development and deployment.",
    link: "https://alpineprivacy.com/",
  },
  {
    title: "Open Source Contributor — IIITD-PYQs",
    company: "IIITD-PYQs",
    duration: "May 2025",
    description: "Contributed past year course materials for a new course (Design Research) to a widely-used IIITD repository, enhancing resources for thousands of students. Ensured proper formatting and categorization of materials to improve accessibility and usability for exam preparation. Submitted and successfully merged a pull request (PR #44), marking my first contribution that got merged in main. Collaborated via GitHub, adhering to the project's contribution guidelines and standards.",
    link: "https://github.com/NalishJain/IIITD-PYQs/pull/44",
  },
];

const education = [
  {
    degree: "Bachelor of Technology",
    university: "Indraprastha Institute of Information Technology, Delhi",
    duration: "2022 - 2026",
  },
];

const achievements = [
  {
    title: "Google Advanced Data Analytics Certificate",
    description: "Mastered advanced data analysis and machine learning techniques including logistic regression, random forest, and decision trees. Demonstrated proficiency in data preprocessing, feature engineering, and model evaluation through hands-on projects with real-world datasets, developing predictive models that deliver actionable business insights.",
    link: "https://www.credly.com/badges/6badd752-6eb5-4921-8d4e-2fc5bb36c14c/linked_in_profile",
  },
  {
    title: "IBM Qiskit Global Summer School",
    description: "Selected from thousands of global applicants for IBM's prestigious quantum computing program. Successfully completed 4 advanced quantum computing tasks using IBM's cloud quantum computers, demonstrating practical applications of quantum algorithms and quantum machine learning.",
    link: "https://www.credly.com/badges/fc613fda-7639-42ad-b4c6-6316cf0afeaf/public_url",
  },
  {
    title: "IBM Artificial Intelligence Fundamentals",
    description: "Demonstrated proficiency in core AI concepts, machine learning principles, and practical applications. Gained hands-on experience with IBM Watson AI Studio, developing AI-powered solutions and understanding enterprise AI implementation strategies.",
    link: "https://www.credly.com/badges/6badd752-6eb5-4921-8d4e-2fc5bb36c14c/linked_in_profile",
  },
];

const ExperiencePage = () => {
  return (
    <div className='mt-4'>
      <h1 className="text-4xl font-bold mb-4">My Experience</h1>
      <DropdownMenuSeparator />
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      <div className="grid grid-cols-1 gap-8">
        {experiences.map((experience, index) => (
          <a href={experience.link} key={index} target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className='text-purple-600 font-bold'>{experience.title}</CardTitle>
                <CardDescription>{experience.company} | {experience.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{experience.description}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Education</h2>
      <div className="grid grid-cols-1 gap-8">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className='text-purple-600 font-bold'>{edu.degree}</CardTitle>
              <CardDescription>{edu.university} | {edu.duration}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Achievements</h2>
      <div className="grid grid-cols-1 gap-8">
        {achievements.map((achievement, index) => (
          <a href={achievement.link} key={index} target="_blank" rel="noopener noreferrer">
            <Card className="hover:shadow-lg transition-shadow hover:scale-105 transition-transform">
              <CardHeader>
                <CardTitle className='text-purple-600 font-bold'>{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{achievement.description}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;