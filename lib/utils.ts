import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}k`;
  }
  return num.toString();
}

import { SITE_CONFIG } from "@/constants";

export function getJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.title,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.profileImage}`,
    sameAs: [
      "https://github.com/zeeshanokz",
      "https://www.linkedin.com/in/muhammad-zeeshan12/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Development",
      "Web Performance",
    ],
  };
}
