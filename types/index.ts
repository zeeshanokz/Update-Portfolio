export interface Technology {
  name: string;
  icon: string;
  proficiency: number;
  category: "frontend" | "state" | "tools" | "backend";
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl: string;
  features: string[];
  challenges: string;
  learnings: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  credentialUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
