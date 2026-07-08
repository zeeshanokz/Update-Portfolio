"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Plug, Palette } from "lucide-react";
import { services } from "@/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

const serviceIcons: Record<string, React.ElementType> = {
  code: Code,
  smartphone: Smartphone,
  plug: Plug,
  palette: Palette,
};

function ServicesComponent() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Offer"
          description="Comprehensive frontend development services tailored to bring your vision to life."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2"
        >
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Code;
            return (
              <motion.article
                key={service.id}
                variants={fadeInUp}
                transition={{ ...defaultTransition, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass group rounded-2xl p-8 transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2" role="list">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary" aria-hidden="true">
                        →
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export const Services = memo(ServicesComponent);
