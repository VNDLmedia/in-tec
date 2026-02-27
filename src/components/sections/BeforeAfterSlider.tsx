"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

export default function BeforeAfterSlider() {
  const afterRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((value: number) => {
    if (afterRef.current) {
      afterRef.current.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${value}%`;
    }
  }, []);

  return (
    <section className="py-16 md:py-32 bg-[#050505] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-emerald-400 font-medium tracking-widest uppercase mb-4 block text-xs md:text-sm">
            Der In-Tec Unterschied
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            <GradientText>Qualität</GradientText>, die man spürt.
          </h2>
          <p className="text-zinc-400 text-base md:text-xl mt-4 md:mt-6 max-w-2xl mx-auto">
            Ziehen Sie den Slider, um den Unterschied zu erleben. Wir verwandeln
            beanspruchte Flächen in repräsentative Umgebungen.
          </p>
        </div>

        <div className="relative w-full aspect-[3/2] md:aspect-[21/9] rounded-2xl md:rounded-[2rem] overflow-hidden group bg-zinc-900 border border-white/10 select-none shadow-2xl">
          {/* BEFORE Image */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2500"
              alt="Vorher"
              fill
              className="object-cover grayscale contrast-75 brightness-50 sepia-[.20]"
            />
          </div>

          {/* AFTER Image */}
          <div
            ref={afterRef}
            className="absolute inset-0 w-full h-full pointer-events-none will-change-[clip-path]"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2500"
              alt="Nachher"
              fill
              className="object-cover"
            />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 md:top-10 md:left-10 z-10 bg-black/50 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/10 text-white text-xs md:text-sm font-semibold tracking-wider uppercase pointer-events-none">
            Vorher
          </div>
          <div className="absolute top-4 right-4 md:top-10 md:right-10 z-10 bg-white/10 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/20 text-white text-xs md:text-sm font-semibold tracking-wider uppercase shadow-lg pointer-events-none">
            Nachher
          </div>

          {/* Slider Handle */}
          <div
            ref={handleRef}
            className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-10"
            style={{ left: "50%" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <MoveHorizontal className="w-4 h-4 md:w-6 md:h-6 text-black" />
            </div>
          </div>

          {/* Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            defaultValue={50}
            onInput={(e) => updateSlider(Number((e.target as HTMLInputElement).value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-none"
          />
        </div>
      </div>
    </section>
  );
}
