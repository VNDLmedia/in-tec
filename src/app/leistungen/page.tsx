import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { coreServices, specializedServices } from "@/data/content";

export const metadata: Metadata = {
  title: "Leistungen | In-Tec Gebäudereinigung Berlin",
  description:
    "Alle Reinigungsleistungen von In-Tec im Überblick: Unterhaltsreinigung, Bauendreinigung, Glasreinigung, Praxisreinigung, Industriereinigung und mehr in Berlin.",
  openGraph: {
    title: "Leistungen | In-Tec Gebäudereinigung Berlin",
    description:
      "Alle Reinigungsleistungen von In-Tec im Überblick – professionelle Gebäudereinigung in Berlin.",
  },
};

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-40 pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              Von der täglichen Unterhaltsreinigung bis zur spezialisierten
              Industriereinigung – wir bieten das komplette Spektrum
              professioneller Gebäudereinigung.
            </p>
          </div>

          {/* Core Services */}
          <section id="leistungen" className="mb-32">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-12">
              Kernleistungen
            </h2>
            <div className="space-y-8">
              {coreServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/leistungen/${service.slug}`}
                  className="relative h-[50vh] min-h-[300px] md:min-h-[400px] w-full rounded-[2rem] overflow-hidden group block"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-50 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                    <span className="text-emerald-400 font-medium tracking-widest uppercase mb-3 text-sm">
                      {service.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-300 font-light max-w-2xl mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-3 text-white font-medium">
                      <span>Mehr erfahren</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Specialized Services */}
          <section id="spezial">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-12">
              Spezialleistungen
            </h2>
            <div className="flex flex-col border-t border-white/10">
              {specializedServices.map((service, idx) => (
                <Link
                  key={idx}
                  href={`/leistungen/${service.slug}`}
                  className="group py-8 md:py-10 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/5 transition-colors px-6 -mx-6 rounded-2xl"
                >
                  <div className="flex items-center gap-6 md:w-1/2">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/30 transition-all">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-2xl font-semibold text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 md:w-1/2">
                    <p className="text-zinc-400 text-base md:text-lg font-light flex-1">
                      {service.desc}
                    </p>
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-32 text-center">
            <p className="text-xl text-zinc-500 mb-8">
              Nicht die passende Leistung gefunden?
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:scale-105 transition-transform"
            >
              Individuelle Beratung anfordern
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
