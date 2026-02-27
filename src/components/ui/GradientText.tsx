"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

export default function GradientText({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const [blingPos, setBlingPos] = useState<{ top: number; right: number } | null>(null);

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

  // Measure actual glyph position of last character
  useEffect(() => {
    if (!visible || !ref.current) return;

    const el = ref.current;
    const text = el.textContent || "";
    if (!text.trim()) return;

    const measure = () => {
      const style = getComputedStyle(el);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

      const trimmed = text.replace(/\s+$/, "");
      const lastChar = trimmed.slice(-1);
      const textWithoutLast = trimmed.slice(0, -1);

      const fullMetrics = ctx.measureText(trimmed);
      const withoutLastMetrics = ctx.measureText(textWithoutLast);
      const lastCharMetrics = ctx.measureText(lastChar);

      // Horizontal: right edge of last char's visible glyph
      const lastCharGlyphRight =
        withoutLastMetrics.width + lastCharMetrics.actualBoundingBoxRight;
      const rightOffset = fullMetrics.width - lastCharGlyphRight;

      // Vertical: top of last char's visible glyph
      const elHeight = el.offsetHeight;
      const baselineFromTop =
        (elHeight +
          fullMetrics.actualBoundingBoxAscent -
          fullMetrics.actualBoundingBoxDescent) /
        2;
      const topOffset =
        baselineFromTop - lastCharMetrics.actualBoundingBoxAscent;

      setBlingPos({ top: topOffset, right: rightOffset });
    };

    // Small delay to ensure fonts are loaded
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure);
    } else {
      setTimeout(measure, 100);
    }
  }, [visible]);

  return (
    <span
      ref={ref}
      className={`relative inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-opacity duration-1000 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
      {/* Shine sweep – clipped to text shape */}
      {visible && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-shine-text select-none bg-clip-text text-transparent"
        >
          {children}
        </span>
      )}
      {/* Bling dot – positioned on actual glyph corner */}
      {visible && blingPos && (
        <span
          aria-hidden
          className="pointer-events-none absolute w-1.5 h-1.5 rounded-full bg-white animate-bling"
          style={{ top: blingPos.top, right: blingPos.right }}
        />
      )}
    </span>
  );
}
