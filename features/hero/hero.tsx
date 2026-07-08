"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  ArrowDown,
} from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS, TYPING_PHRASES } from "@/constants";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Button } from "@/components/ui/button";
import { ProfileImage } from "@/components/ui/profile-image";
import { fadeInUp, defaultTransition } from "@/lib/animations";

const socialIcons: Record<string, React.ElementType> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function HeroComponent() {
  const typedText = useTypingEffect(TYPING_PHRASES);

  return (
    <section
      id="home"
      className="gradient-bg relative flex min-h-screen items-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 size-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_340px] lg:gap-16 xl:grid-cols-[1fr_380px]">
          <ProfileImage
            priority
            className="order-first max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] lg:order-last lg:max-w-[360px]"
          />
          <div className="order-last w-full max-w-3xl lg:order-first">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
              <span className="size-2 animate-pulse rounded-full bg-green-500" />
              Available for new opportunities
            </span>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            className="mt-6 text-sm font-medium text-muted-foreground sm:text-base"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.3 }}
            className="mt-2 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="gradient-text">{SITE_CONFIG.name}</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.4 }}
            className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            {SITE_CONFIG.title}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.5 }}
            className="mt-6 flex min-h-[2rem] flex-wrap items-center text-lg sm:text-xl"
          >
            <span className="text-muted-foreground">I build&nbsp;</span>
            <span className="font-semibold text-primary break-words">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Passionate about creating fast, accessible, and beautiful web
            applications. I transform ideas into polished digital products with
            clean code and thoughtful design.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.7 }}
            className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="size-4" aria-hidden="true" />
            {SITE_CONFIG.location}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={SITE_CONFIG.resumeUrl}
              download="Muhammad-Zeeshan-Resume.pdf"
            >
              <Button>
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline">
                <Mail className="size-4" aria-hidden="true" />
                Contact Me
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.9 }}
            className="mt-8 flex gap-3"
          >
            {SOCIAL_LINKS.map((social) => {
              const Icon = socialIcons[social.name] ?? Mail;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={
                    social.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="focus-ring glass flex size-11 items-center justify-center rounded-xl transition-all hover:scale-105 hover:bg-primary/10"
                  aria-label={social.label}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              );
            })}
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="size-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroComponent);
