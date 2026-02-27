"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-32 bg-[#050505] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-medium tracking-widest uppercase mb-4 block">
            Der In-Tec Unterschied
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            <GradientText>Qualität</GradientText>, die man spürt.
          </h2>
          <p className="text-zinc-400 text-xl mt-6 max-w-2xl mx-auto">
            Ziehen Sie den Slider, um den Unterschied zu erleben. Wir verwandeln
            beanspruchte Flächen in repräsentative Umgebungen.
          </p>
        </div>

        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden group bg-zinc-900 border border-white/10 select-none shadow-2xl">
          {/* BEFORE Image */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2500"
              alt="Vorher"
              fill
              className="object-cover grayscale contrast-75 brightness-50 sepia-[.20] blur-[1px]"
            />
            <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-black/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 text-white text-sm font-semibold tracking-wider uppercase">
              Vorher
            </div>
          </div>

          {/* AFTER Image */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2500"
              alt="Nachher"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold tracking-wider uppercase shadow-lg">
              Nachher
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-transform group-hover:scale-110">
              <MoveHorizontal className="w-6 h-6 text-black" />
            </div>
          </div>

          {/* Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />
        </div>
      </div>
    </section>
  );
}
