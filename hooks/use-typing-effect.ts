"use client";

import { useEffect, useState } from "react";

export function useTypingEffect(
  phrases: readonly string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] ?? "";

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentPhrase.slice(0, displayText.length + 1);
          setDisplayText(next);

          if (next === currentPhrase) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          const next = currentPhrase.slice(0, displayText.length - 1);
          setDisplayText(next);

          if (next === "") {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
}
