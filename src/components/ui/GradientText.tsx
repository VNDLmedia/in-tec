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
      className="relative inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
    >
      {children}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 select-none bg-clip-text text-transparent ${
          visible ? "animate-shine-text" : ""
        }`}
      >
        {children}
      </span>
    </span>
  );
}
