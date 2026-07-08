"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { STATS, SITE_CONFIG } from "@/constants";
import { useCountUp } from "@/hooks/use-count-up";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProfileImage } from "@/components/ui/profile-image";
import { technologies } from "@/data";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";
import { cn } from "@/lib/utils";

const techColors: Record<string, string> = {
  html: "from-orange-500/20 to-orange-600/10",
  css: "from-blue-500/20 to-blue-600/10",
  tailwind: "from-cyan-500/20 to-cyan-600/10",
  javascript: "from-yellow-500/20 to-yellow-600/10",
  typescript: "from-blue-600/20 to-blue-700/10",
  react: "from-sky-500/20 to-sky-600/10",
  nextjs: "from-foreground/10 to-foreground/5",
  redux: "from-purple-500/20 to-purple-600/10",
  zustand: "from-amber-500/20 to-amber-600/10",
  tanstack: "from-red-500/20 to-red-600/10",
  axios: "from-indigo-500/20 to-indigo-600/10",
  rhf: "from-pink-500/20 to-pink-600/10",
  zod: "from-violet-500/20 to-violet-600/10",
  git: "from-orange-600/20 to-orange-700/10",
  github: "from-foreground/10 to-foreground/5",
  api: "from-green-500/20 to-green-600/10",
};

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center">
      <p className="text-3xl font-bold text-primary sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function AboutComponent() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Excellence"
          description="A dedicated frontend developer with a passion for building performant, user-centric web applications."
        />

        <div className="mb-16 grid items-center gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <ProfileImage sizes="(max-width: 1024px) 280px, 300px" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={defaultTransition}
            className="space-y-6"
          >
            <h3 id="about-heading" className="text-2xl font-bold">
              Professional Summary
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m {SITE_CONFIG.name}, a {SITE_CONFIG.title} with{" "}
              {SITE_CONFIG.yearsOfExperience}+ years of experience building
              modern web applications. I specialize in React ecosystems,
              performance optimization, and creating intuitive user interfaces
              that delight users.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              My career objective is to join innovative teams where I can
              contribute my expertise in frontend architecture while continuously
              learning and pushing the boundaries of what&apos;s possible on the
              web.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {STATS.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold">Technologies & Skills</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={fadeInUp}
                  transition={{ ...defaultTransition, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={cn(
                    "glass group rounded-xl p-4 transition-shadow hover:shadow-lg hover:shadow-primary/5",
                    `bg-gradient-to-br ${techColors[tech.icon] ?? "from-primary/10 to-accent/5"}`,
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{tech.name}</span>
                    <span className="text-xs font-medium text-primary">
                      {tech.proficiency}%
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted/60">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}

export const About = memo(AboutComponent);
