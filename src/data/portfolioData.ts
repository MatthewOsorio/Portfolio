import { SocialLink, Experience, Project, Education } from "../types";

// Personal info
export const personalInfo = {
  name: "Matthew Osorio",
  title: "Software Engineer",
  bio: "Software engineer with a focus on building intuitive and efficient applications. I love solving complex problems and creating elegant solutions.",
};

// Social media links
export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/MatthewOsorio",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/matt-osorio",
    icon: "Linkedin",
  },
  {
    platform: "Email",
    url: "mailto:mattosoriox@gmail.com",
    icon: "Mail",
  },
];

// Work experience
export const experiences: Experience[] = [
  {
    id: "exp1",
    company: "Holm Electric",
    title: "Software Engineering Intern",
    period: "May 2024 - October 2024",
    description:
      "Engineered and deployed automated workflows by Zoho REST API and Deluge scripting, significantly reducing manual processing time and increasing productivity.",
    skills: ["Deluge", "Python", "Zoho"],
  },
];

// Projects
export const projects: Project[] = [
  {
    id: "proj1",
    title: "Neural Noir",
    description:
      "An AI-driven interrogation game where players get interrogated by two AI detective. The detectives can respond to the player's speech and biometric input.",
    technologies: ["Python", "Panda3D", "OpenAI API", "Sqlite", "Brainflow SDK"],
    imageUrl: "/images/neural-noir.png",
    link: "https://neural-noir.vercel.app/",
    github: "https://github.com/MatthewOsorio/Neural_Noir",
  },
  {
    id: "proj2",
    title: "Caffeinated",
    description:
      "A full-stack web application where users can discover coffee shops around the world and share their experiences.",
    technologies: ["React", "Ruby On Rails", "PostgreSQL"],
    imageUrl: "/images/caffeinated.png",
    link: "https://becaffeinated.vercel.app/",
    github: "https://github.com/MatthewOsorio/Caffeinated",
  },
  {
    id: "proj3",
    title: "NetGPT",
    description:
      "Network traffic analysis AI-agent that can analyze and visualize network traffic data.",
    technologies: ["Python", "Tkinter", "OpenAI API", "Pyshark"],
    imageUrl:
      "/images/netgpt.png",
    github: "https://github.com/username/project3",
  },
];

// Education
export const education: Education[] = [
  {
    id: "edu1",
    institution: "University of Nevada, Reno",
    degree: "Master of Computer Science and Engineering",
    period: "2025 - Present",
    description:
      "Specializing in Software Engineering and AI applications in software solutions.",
  },
  {
    id: "edu2",
    institution: "University of Nevada, Reno",
    degree: "Bachelor of Science in Computer Science and Engineering",
    period: "2021 - 2025",
    description:
      "Coursework included: Software Engineering, Design Patterns, Testing & DevOps, Database Management Systems, Analysis of Algorithms, Data Structures.",
  },
];
