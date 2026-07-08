"use client";

import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { submitContactForm } from "@/services/contact";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { fadeInUp, defaultTransition } from "@/lib/animations";
import { SITE_CONFIG } from "@/constants";

interface ContactProps {
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
}

function ContactComponent({ onSuccess, onError }: ContactProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: (data) => {
      reset();
      onSuccess?.(data.message);
    },
    onError: () => {
      onError?.("Failed to send message. Please try again later.");
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  const { isSuccess, isError, reset: resetMutation } = mutation;

  useEffect(() => {
    if (!isSuccess && !isError) return;
    const timer = setTimeout(() => resetMutation(), 5000);
    return () => clearTimeout(timer);
  }, [isSuccess, isError, resetMutation]);

  return (
    <section
      id="contact"
      className="bg-muted/20 py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={defaultTransition}
            className="space-y-6 lg:col-span-2"
          >
            <div>
              <h3 id="contact-heading" className="text-2xl font-bold">
                Contact Information
              </h3>
              <p className="mt-2 text-muted-foreground">
                Feel free to reach out through the form or directly via email.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-xl p-4">
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="focus-ring font-medium text-primary"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{SITE_CONFIG.location}</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="flex items-center gap-2 font-medium">
                  <span className="size-2 rounded-full bg-green-500" />
                  Open to opportunities
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
            onSubmit={onSubmit}
            className="glass space-y-5 rounded-2xl p-6 sm:p-8 lg:col-span-3"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Name"
                placeholder="John Doe"
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <Input
              label="Subject"
              placeholder="Project Inquiry"
              error={errors.subject?.message}
              {...register("subject")}
            />

            <Textarea
              label="Message"
              placeholder="Tell me about your project..."
              error={errors.message?.message}
              {...register("message")}
            />

            <AnimatePresence mode="wait">
              {mutation.isSuccess && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 overflow-hidden rounded-xl bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400"
                  role="status"
                >
                  <CheckCircle className="size-5 shrink-0" aria-hidden="true" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {mutation.isError && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 overflow-hidden rounded-xl bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400"
                  role="alert"
                >
                  <AlertCircle className="size-5 shrink-0" aria-hidden="true" />
                  Failed to send message. Please try again later.
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              size="lg"
              isLoading={mutation.isPending}
              className="w-full sm:w-auto"
            >
              <Send className="size-4" aria-hidden="true" />
              {mutation.isPending ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export const Contact = memo(ContactComponent);
