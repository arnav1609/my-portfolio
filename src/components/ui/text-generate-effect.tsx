"use client";

import { useEffect, useState } from "react";

export function TextGenerateEffect({ words }: { words: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[index]);
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index, words]);

  return (
    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-center text-white min-h-[8rem]">
      {displayedText}
    </h1>
  );
}

