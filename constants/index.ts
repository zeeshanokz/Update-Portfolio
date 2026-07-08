export const SITE_CONFIG = {
  name: "Muhammad Zeeshan",
  title: "Frontend Developer",
  description:
    "Frontend Developer learning React and Next.js. Passionate about UI design and building modern, accessible web experiences.",
  url: "https://zeeshanokz.vercel.app",
  email: "zeeshanorakzai666@gmail.com",
  location: "Islamabad, Pakistan",
  yearsOfExperience: 2,
  resumeUrl: "/Zeeshan-Updated-Resume.pdf",
  profileImage: "/images/profile.png",
  ogImage: "/og-image.png",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/zeeshanokz",
    label: "Visit GitHub profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-zeeshan12/",
    label: "Visit LinkedIn profile",
  },
  {
    name: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    label: "Send email",
  },
] as const;

export const TYPING_PHRASES = [
  "Modern Web Experiences",
  "Scalable React Applications",
  "Pixel-Perfect Interfaces",
  "Performance-First Frontends",
] as const;

export const STATS = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Delivered", value: 25, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "GitHub Repos", value: 25, suffix: "+" },
] as const;
