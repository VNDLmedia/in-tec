import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GradientText from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 flex flex-col items-center justify-center px-6 selection:bg-white selection:text-black">
      <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-6">
        Seite nicht gefunden
      </p>

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter text-center leading-[0.9] mb-6">
        Hier ist es <br />
        <GradientText>blitzsauber.</GradientText>
      </h1>

      <p className="text-xl md:text-2xl text-zinc-500 font-light text-center max-w-xl mb-16">
        So sauber, dass hier nichts mehr steht. Aber wir können das ändern
        – erzählen Sie uns von Ihrem Projekt.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/#kontakt"
          className="bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:scale-105 transition-transform flex items-center gap-2"
        >
          Angebot anfordern
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/"
          className="px-8 py-4 rounded-full text-base font-medium text-zinc-400 border border-white/10 hover:text-white hover:border-white/30 transition-all"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
