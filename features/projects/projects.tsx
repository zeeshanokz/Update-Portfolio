"use client";

import { memo, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { projects } from "@/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleExpanded = useCallback(() => setExpanded((prev) => !prev), []);

  return (
    <motion.article
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass group overflow-hidden rounded-2xl transition-shadow hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {!imageLoaded && (
          <div className="skeleton absolute inset-0" aria-hidden="true" />
        )}
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-top transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        {project.featured && (
          <span className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
            <Star className="size-3" aria-hidden="true" />
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-muted/60 px-2.5 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="size-4" aria-hidden="true" />
              GitHub
            </a>
          )}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="size-4" aria-hidden="true" />
            Live Demo
          </a>
        </div>

        <button
          onClick={toggleExpanded}
          className="focus-ring mt-4 flex w-full items-center justify-center gap-1 rounded-lg py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
          aria-expanded={expanded}
        >
          {expanded ? "Show Less" : "View Details"}
          {expanded ? (
            <ChevronUp className="size-4" aria-hidden="true" />
          ) : (
            <ChevronDown className="size-4" aria-hidden="true" />
          )}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 border-t border-border pt-4">
                <div>
                  <h4 className="text-sm font-semibold">Features</h4>
                  <ul className="mt-2 space-y-1" role="list">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary" aria-hidden="true">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Challenges</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.challenges}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Learnings</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.learnings}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

function ProjectsComponent() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="A selection of projects showcasing my skills in modern frontend development."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const Projects = memo(ProjectsComponent);
