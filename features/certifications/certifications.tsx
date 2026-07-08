"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/animations";

function CertificationsComponent() {
  return (
    <section
      id="certifications"
      className="bg-muted/20 py-16 sm:py-24 lg:py-32"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          description="Professional certifications that validate my expertise and commitment to continuous learning."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

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
          src={cert.image}
          alt={`${cert.title} certificate`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-xl bg-primary/90">
          <Award className="size-5 text-primary-foreground" aria-hidden="true" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold leading-snug">{cert.title}</h3>
        <p className="mt-1 text-sm font-medium text-primary">
          {cert.organization}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{cert.date}</p>

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block"
        >
          <Button variant="outline" size="sm">
            <ExternalLink className="size-3.5" aria-hidden="true" />
            View Certificate
          </Button>
        </a>
      </div>
    </motion.article>
  );
}

export const Certifications = memo(CertificationsComponent);
