"use client";

import { memo } from "react";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/constants";

const socialIcons: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <a
              href="#home"
              className="focus-ring inline-flex items-center gap-2 rounded-lg font-bold"
            >
              <Code2 className="size-6 text-primary" aria-hidden="true" />
              <span className="gradient-text text-lg">{SITE_CONFIG.name}</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.title} crafting exceptional digital experiences with
              modern web technologies.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <ul className="flex flex-wrap gap-3" role="list">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.name] ?? Mail;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={
                        social.name !== "Email"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="focus-ring glass flex size-10 items-center justify-center rounded-xl transition-colors hover:bg-primary/10"
                      aria-label={social.label}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
