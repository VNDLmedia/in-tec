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
      {/* Shine sweep */}
      {visible && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <span className="absolute inset-y-0 w-[60%] animate-shine bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]" />
        </span>
      )}
      {/* Bling dot */}
      {visible && (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-bling"
        />
      )}
    </span>
  );
}
