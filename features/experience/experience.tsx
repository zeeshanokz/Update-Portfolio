"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  defaultTransition,
} from "@/lib/animations";
import { useMediaQuery } from "@/hooks/use-media-query";

function ExperienceComponent() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section
      id="experience"
      className="bg-muted/20 py-16 sm:py-24 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="A timeline of my career growth and the impactful projects I've contributed to."
        />

        <div className="relative">
          <div
            className="absolute top-0 left-4 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:block md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const variants = isDesktop
                ? isEven
                  ? slideInLeft
                  : slideInRight
                : fadeInUp;
              return (
                <motion.article
                  key={exp.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={variants}
                  transition={{ ...defaultTransition, delay: index * 0.1 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    isEven ? "" : "md:direction-rtl"
                  }`}
                >
                  <div
                    className={`${isEven ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}
                  >
                    <div className="glass rounded-2xl p-6 sm:p-8">
                      <div className="mb-4 flex items-start gap-3 md:hidden">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Briefcase
                            className="size-5 text-primary"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h3
                            id={index === 0 ? "experience-heading" : undefined}
                            className="text-lg font-bold"
                          >
                            {exp.position}
                          </h3>
                          <p className="text-primary">{exp.company}</p>
                        </div>
                      </div>

                      <div className="hidden md:block">
                        <span className="text-sm font-medium text-primary">
                          {exp.duration}
                        </span>
                        <h3 className="mt-1 text-xl font-bold">{exp.position}</h3>
                        <p className="mt-1 font-medium">{exp.company}</p>
                      </div>

                      <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground md:hidden">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        {exp.location} · {exp.duration}
                      </div>

                      <p className="mt-1 hidden text-sm text-muted-foreground md:block">
                        <MapPin
                          className="mr-1 inline size-3.5"
                          aria-hidden="true"
                        />
                        {exp.location}
                      </p>

                      <ul
                        className="mt-4 space-y-2"
                        role="list"
                        aria-label={`Responsibilities at ${exp.company}`}
                      >
                        {exp.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute left-4 hidden size-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block"
                    style={{ top: "2rem" }}
                    aria-hidden="true"
                  />

                  <div className="hidden md:block" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export const Experience = memo(ExperienceComponent);
