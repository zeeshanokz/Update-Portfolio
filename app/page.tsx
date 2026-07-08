"use client";

import { memo, useCallback } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { ToastContainer } from "@/components/ui/toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Hero } from "@/features/hero/hero";
import { useToast } from "@/hooks/use-toast";

const About = dynamic(
  () => import("@/features/about/about").then((m) => m.About),
  { loading: () => <SectionSkeleton /> },
);

const Experience = dynamic(
  () => import("@/features/experience/experience").then((m) => m.Experience),
  { loading: () => <SectionSkeleton /> },
);

const Projects = dynamic(
  () => import("@/features/projects/projects").then((m) => m.Projects),
  { loading: () => <SectionSkeleton /> },
);

const Certifications = dynamic(
  () =>
    import("@/features/certifications/certifications").then(
      (m) => m.Certifications,
    ),
  { loading: () => <SectionSkeleton /> },
);

const Services = dynamic(
  () => import("@/features/services/services").then((m) => m.Services),
  { loading: () => <SectionSkeleton /> },
);

const Contact = dynamic(
  () => import("@/features/contact/contact").then((m) => m.Contact),
  { loading: () => <SectionSkeleton /> },
);

function SectionSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Skeleton className="mx-auto mb-8 h-8 w-48" />
      <Skeleton className="mx-auto mb-12 h-12 w-96 max-w-full" />
      <div className="grid gap-6 md:grid-cols-2">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    </div>
  );
}

function HomeContent() {
  const { toasts, addToast, removeToast } = useToast();

  const handleSuccess = useCallback(
    (message: string) => addToast(message, "success"),
    [addToast],
  );

  const handleError = useCallback(
    (message: string) => addToast(message, "error"),
    [addToast],
  );

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact onSuccess={handleSuccess} onError={handleError} />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}

function HomePage() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <HomeContent />
      </QueryProvider>
    </ThemeProvider>
  );
}

export default memo(HomePage);
