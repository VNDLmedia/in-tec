import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  getAllServiceSlugs,
  findServiceBySlug,
  coreServices,
} from "@/data/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = findServiceBySlug(slug);
  if (!result) return {};

  const title =
    result.type === "core" ? result.service.title : result.service.title;
  const description =
    result.type === "core"
      ? result.service.metaDescription
      : result.service.metaDescription;

  return {
    title: `${title} | In-Tec Gebäudereinigung Berlin`,
    description,
    openGraph: {
      title: `${title} | In-Tec Gebäudereinigung Berlin`,
      description,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const result = findServiceBySlug(slug);
  if (!result) notFound();

  const { type, service } = result;

  const title = service.title;
  const description =
    type === "core" ? service.description : service.desc;
  const detailDescription = service.detailDescription;
  const image = type === "core" ? service.image : coreServices[0].image;
  const tags = type === "core" ? service.tags : [];
  const subtitle = type === "core" ? service.subtitle : null;

  // JSON-LD for this service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "In-Tec Gebäudemanagement GmbH",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Musterstraße 123",
        addressLocality: "Berlin",
        postalCode: "10115",
        addressCountry: "DE",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Berlin",
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-white selection:text-black">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pb-16">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors text-sm font-medium uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Alle Leistungen
          </Link>

          {subtitle && (
            <span className="text-emerald-400 font-medium tracking-widest uppercase mb-4 block text-sm">
              {subtitle}
            </span>
          )}

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-16">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Detail Text */}
          <div className="space-y-6">
            {detailDescription.split("\n\n").map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/5">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Interesse geweckt?
            </h2>
            <p className="text-lg text-zinc-400 font-light mb-8 max-w-xl">
              Fordern Sie jetzt ein unverbindliches Angebot an. Wir melden uns
              innerhalb von 24 Stunden bei Ihnen.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:scale-105 transition-transform"
            >
              Angebot anfordern
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
