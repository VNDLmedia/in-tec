import Image from "next/image";
import { Quote } from "lucide-react";
import { clientLogos } from "@/data/content";
import GradientText from "@/components/ui/GradientText";

export default function SocialProof() {
  return (
    <section className="py-32 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Logo Marquee */}
        <div className="mb-32">
          <p className="text-center text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-12">
            Vertraut von führenden Unternehmen der Region
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
            {clientLogos.map((logo, i) => (
              <span
                key={i}
                className="text-2xl md:text-3xl font-bold text-white font-serif tracking-tighter"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-zinc-800 mx-auto mb-8 transform rotate-180" />
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight mb-10">
            &ldquo;Seit wir mit In-Tec arbeiten, müssen wir uns über die
            Sauberkeit unserer Immobilien <GradientText>keine Gedanken mehr machen</GradientText>. Es läuft
            absolut lautlos, professionell und immer in <GradientText>höchster
            Qualität</GradientText>.&rdquo;
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full bg-zinc-800 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                alt="CEO"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Dr. Michael Schmidt</p>
              <p className="text-zinc-500 text-sm">
                Geschäftsführer, Immobilien Management GmbH
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
