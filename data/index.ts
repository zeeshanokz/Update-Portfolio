import type {
  Certification,
  Experience,
  Project,
  Service,
  Technology,
} from "@/types";

export const technologies: Technology[] = [
  { name: "HTML", icon: "html", proficiency: 95, category: "frontend" },
  { name: "CSS", icon: "css", proficiency: 92, category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", proficiency: 94, category: "frontend" },
  { name: "JavaScript", icon: "javascript", proficiency: 93, category: "frontend" },
  { name: "TypeScript", icon: "typescript", proficiency: 90, category: "frontend" },
  { name: "React", icon: "react", proficiency: 94, category: "frontend" },
  { name: "Next.js", icon: "nextjs", proficiency: 91, category: "frontend" },
  { name: "Redux Toolkit", icon: "redux", proficiency: 85, category: "state" },
  { name: "Zustand", icon: "zustand", proficiency: 88, category: "state" },
  { name: "TanStack Query", icon: "tanstack", proficiency: 87, category: "state" },
  { name: "Axios", icon: "axios", proficiency: 90, category: "tools" },
  { name: "React Hook Form", icon: "rhf", proficiency: 89, category: "tools" },
  { name: "Zod", icon: "zod", proficiency: 88, category: "tools" },
  { name: "Git", icon: "git", proficiency: 91, category: "tools" },
  { name: "GitHub", icon: "github", proficiency: 92, category: "tools" },
  { name: "REST APIs", icon: "api", proficiency: 90, category: "backend" },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "NovaTech Solutions",
    position: "Senior Frontend Developer",
    duration: "2023 — Present",
    location: "Remote",
    responsibilities: [
      "Led development of a customer-facing SaaS dashboard serving 50K+ monthly users",
      "Architected component library with React, TypeScript, and Storybook reducing dev time by 40%",
      "Implemented performance optimizations achieving 95+ Lighthouse scores across all pages",
      "Mentored junior developers on React best practices and code review standards",
    ],
    technologies: ["React", "Next.js", "TypeScript", "TanStack Query", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    company: "PixelCraft Studio",
    position: "Frontend Developer",
    duration: "2021 — 2023",
    location: "San Francisco, CA",
    responsibilities: [
      "Built responsive e-commerce platforms with React and Redux Toolkit",
      "Integrated REST APIs and third-party payment gateways with robust error handling",
      "Collaborated with designers to implement pixel-perfect UI from Figma prototypes",
      "Established CI/CD pipelines and automated testing for frontend deployments",
    ],
    technologies: ["React", "Redux Toolkit", "JavaScript", "CSS", "REST APIs"],
  },
  {
    id: "exp-3",
    company: "CodeBridge Agency",
    position: "Junior Frontend Developer",
    duration: "2020 — 2021",
    location: "Austin, TX",
    responsibilities: [
      "Developed landing pages and marketing sites with modern HTML, CSS, and JavaScript",
      "Converted static designs into interactive, accessible web components",
      "Participated in agile sprints and contributed to codebase documentation",
      "Optimized images and assets for improved page load performance",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "TalentTube",
    description:
      "A modern talent and recruitment platform built for Marvellex Software Solution — connecting organizations with skilled professionals through an intuitive, responsive web experience.",
    image: "/images/projects/talenttube.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://tt.mlxsoft.com/",
    features: [
      "Responsive, mobile-first interface for talent discovery",
      "Clean dashboard layouts for recruiters and candidates",
      "Optimized page performance and smooth UI interactions",
      "Cross-browser compatible component architecture",
    ],
    challenges:
      "Building a scalable frontend that handles dynamic talent listings and filtering while keeping load times fast across devices.",
    learnings:
      "Strengthened skills in component-driven development and structuring large React applications for real-world recruitment workflows.",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Travaleo",
    description:
      "Institutional-grade luxury real estate investment platform offering curated branded residences and hospitality assets for accredited investors in global gateway markets.",
    image: "/images/projects/travaleo.png",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.travaleo.com/",
    features: [
      "Premium marketing pages with luxury real estate branding",
      "Investor-focused sections with platform metrics and disclosures",
      "Responsive layouts for desktop, tablet, and mobile",
      "Accessible navigation and polished scroll-based interactions",
    ],
    challenges:
      "Translating a high-end financial brand into a pixel-perfect frontend while balancing rich content, compliance copy, and performance.",
    learnings:
      "Gained experience building trust-focused UIs for fintech and real estate products with strict visual and accessibility standards.",
    featured: true,
  },
  {
    id: "proj-3",
    title: "ZawayaDAO",
    description:
      "Enterprise white-label real estate tokenization platform enabling developers, investment firms, and property managers to launch compliant RWA infrastructure.",
    image: "/images/projects/zawayadao.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Axios"],
    liveUrl: "https://zawayadao.com/",
    features: [
      "Multi-section marketing site for tokenization platform features",
      "Enterprise-grade UI showcasing compliance and investor tooling",
      "Interactive pricing and product highlight components",
      "Fully responsive design with modern Web3 aesthetics",
    ],
    challenges:
      "Presenting complex blockchain and compliance concepts through clear, approachable UI without overwhelming non-technical visitors.",
    learnings:
      "Improved ability to design information-dense landing pages for B2B SaaS and Web3 products with strong visual hierarchy.",
    featured: false,
  },
  {
    id: "proj-4",
    title: "Pretense",
    description:
      "AI security platform that prevents sensitive code, credentials, and proprietary data from leaking to LLMs — mutating secrets locally before prompts leave the machine.",
    image: "/images/projects/pretense.png",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.pretense.ai/",
    features: [
      "Conversion-focused landing pages for AI security product",
      "Feature comparison tables and real-time activity UI mockups",
      "Pricing tiers with clear plan differentiation",
      "Dark-mode-friendly, developer-centric visual design",
    ],
    challenges:
      "Communicating a technical security product to both developers and decision-makers through compelling visuals and structured content sections.",
    learnings:
      "Deepened expertise in building developer-tool marketing sites with strong storytelling, animations, and conversion-oriented layouts.",
    featured: false,
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer Professional Certificate",
    organization: "Meta · Coursera",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    credentialUrl: "https://coursera.org",
  },
  {
    id: "cert-2",
    title: "JavaScript Algorithms and Data Structures",
    organization: "freeCodeCamp",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    credentialUrl: "https://freecodecamp.org",
  },
  {
    id: "cert-3",
    title: "AWS Cloud Practitioner Essentials",
    organization: "Amazon Web Services",
    date: "June 2023",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    credentialUrl: "https://aws.amazon.com",
  },
];

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Frontend Development",
    description:
      "Building robust, maintainable frontend architectures with React and Next.js that scale with your business.",
    icon: "code",
    features: [
      "Component-driven architecture",
      "TypeScript for type safety",
      "Performance optimization",
      "Code splitting & lazy loading",
    ],
  },
  {
    id: "svc-2",
    title: "Responsive Design",
    description:
      "Crafting fluid, mobile-first interfaces that look stunning on every device from phones to large displays.",
    icon: "smartphone",
    features: [
      "Mobile-first approach",
      "Cross-browser compatibility",
      "Fluid typography & spacing",
      "Touch-friendly interactions",
    ],
  },
  {
    id: "svc-3",
    title: "API Integration",
    description:
      "Seamlessly connecting frontend applications to REST APIs with robust error handling and caching strategies.",
    icon: "plug",
    features: [
      "REST API consumption",
      "TanStack Query caching",
      "Optimistic updates",
      "Error boundary patterns",
    ],
  },
  {
    id: "svc-4",
    title: "UI Development",
    description:
      "Translating designs into pixel-perfect, accessible interfaces with smooth animations and micro-interactions.",
    icon: "palette",
    features: [
      "Figma to code translation",
      "Framer Motion animations",
      "WCAG accessibility",
      "Design system implementation",
    ],
  },
];
