"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export default function GradientText({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`relative inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-opacity duration-1000 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent bg-[length:200%_100%] bg-clip-text text-transparent ${
          visible ? "animate-shimmer" : ""
        }`}
      >
        {children}
      </span>
    </span>
  );
}
