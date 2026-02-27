import Image from "next/image";
import { coreServices } from "@/data/content";

export default function CoreServices() {
  return (
    <section id="leistungen" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Präzision in der Fläche.
          </h2>
          <p className="text-zinc-400 text-xl">
            Wir fokussieren uns auf die Kernbereiche der modernen
            Gebäudereinigung – mit spezialisierten Teams und kompromissloser
            Qualität.
          </p>
        </div>

        <div className="space-y-12">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="relative h-[80vh] min-h-[600px] w-full rounded-[2rem] overflow-hidden group"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-60 group-hover:opacity-80"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end max-w-4xl">
                <span className="text-emerald-400 font-medium tracking-widest uppercase mb-4 block">
                  {service.subtitle}
                </span>
                <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                  {service.title}
                </h3>
                <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mb-10 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
