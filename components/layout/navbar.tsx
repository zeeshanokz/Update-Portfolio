"use client";

import { memo, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { useTheme } from "@/components/providers/theme-provider";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);

  const handleNavClick = useCallback(() => setIsOpen(false), []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav
        className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="focus-ring flex items-center gap-2 rounded-lg font-bold"
          aria-label="Go to homepage"
        >
          <Code2 className="size-6 text-primary" aria-hidden="true" />
          <span className="gradient-text text-lg">MZ</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "focus-ring rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="focus-ring rounded-xl p-2.5 transition-colors hover:bg-muted/60"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus-ring rounded-xl p-2.5 md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden"
          >
            <ul className="space-y-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="focus-ring block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted/60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export const Navbar = memo(NavbarComponent);
