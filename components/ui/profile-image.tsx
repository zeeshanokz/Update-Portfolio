"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  className?: string;
  priority?: boolean;
  sizes?: string;
  showBadge?: boolean;
}

function ProfileImageComponent({
  className,
  priority = false,
  sizes = "(max-width: 768px) 280px, 360px",
  showBadge = true,
}: ProfileImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("relative mx-auto w-full max-w-[360px]", className)}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-2 rounded-[2rem] bg-[conic-gradient(from_0deg,var(--color-primary),var(--color-accent),var(--color-primary))] opacity-60 blur-md"
        />

        <div className="glass relative overflow-hidden rounded-[1.75rem] p-1.5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
            <Image
              src={SITE_CONFIG.profileImage}
              alt={`Portrait of ${SITE_CONFIG.name}`}
              fill
              priority={priority}
              sizes={sizes}
              quality={90}
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        {showBadge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="glass absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl px-4 py-2.5 shadow-lg"
          >
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            <div className="leading-tight">
              <p className="text-sm font-bold">
                {SITE_CONFIG.yearsOfExperience}+ Years
              </p>
              <p className="text-[0.7rem] text-muted-foreground">Experience</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export const ProfileImage = memo(ProfileImageComponent);
