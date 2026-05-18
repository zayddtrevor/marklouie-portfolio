export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  image: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

const githubProfile = "https://github.com/zayddtrevor";

export const projects: Project[] = [
  {
    slug: "nutricare",
    title: "NutriCare Student Nutrition & Health Monitoring System",
    type: "Capstone project",
    year: "2026",
    image: "/projects/nutricare.svg",
    description:
      "A web-based system for tracking student health records, BMI data, attendance, nutritional status, dashboard summaries, reports, and automated alerts.",
    stack: ["React", "Supabase", "API logic", "Dashboard UI"],
    githubUrl: githubProfile,
    liveUrl: "/projects",
    featured: true,
  },
  {
    slug: "netops-ticketing",
    title: "NetOps Ticketing System",
    type: "Full-stack web app",
    year: "2025",
    image: "/projects/netops.svg",
    description:
      "A service desk platform with ticket creation, status tracking, automated ticket IDs, Supabase authentication, role-based access, and analytics.",
    stack: ["React", "Vite", "Supabase", "Vercel"],
    githubUrl: githubProfile,
    liveUrl: "/projects",
    featured: true,
  },
  {
    slug: "qa-audit-portfolio",
    title: "QA Audit Portfolio",
    type: "Testing portfolio",
    year: "2025",
    image: "/projects/qa-audit.svg",
    description:
      "A collection of functional and UX testing work covering reproduction steps, severity levels, mobile responsiveness, navigation flows, and UI consistency.",
    stack: ["Manual QA", "Functional testing", "UX testing", "Reports"],
    githubUrl: githubProfile,
    liveUrl: "/projects",
    featured: true,
  },
  {
    slug: "ui-ux-design-portfolio",
    title: "UI/UX & Design Portfolio",
    type: "Design work",
    year: "2025",
    image: "/projects/design-portfolio.svg",
    description:
      "Wireframes, UI concepts, basic design systems, visual assets, and interface improvements shaped around usability and accessibility.",
    stack: ["Figma", "Canva", "UI design", "Accessibility"],
    githubUrl: githubProfile,
    liveUrl: "/projects",
    featured: false,
  },
];
