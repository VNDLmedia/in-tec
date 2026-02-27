import Image from "next/image";
import { ArrowRight } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-32 overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=2500"
          alt="Modern Clean Office"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-bold text-white tracking-tighter leading-[0.9] mb-8">
            Kompromisslos. <br /> <GradientText>Sauber.</GradientText>
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-12">
            Hochwertiges Facility Management für Immobilien, die <GradientText>mehr verlangen</GradientText>{" "}
            als nur den Standard.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <a
              href="#kontakt"
              className="bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:scale-105 transition-transform flex items-center gap-2"
            >
              Anfrage starten
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
