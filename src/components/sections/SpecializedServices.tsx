import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specializedServices } from "@/data/content";
import GradientText from "@/components/ui/GradientText";

export default function SpecializedServices() {
  return (
    <section id="spezial" className="py-16 md:py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-10 md:mb-16">
          <GradientText>Spezialisiertes</GradientText> <br />
          Handwerk.
        </h2>

        <div className="flex flex-col border-t border-white/10">
          {specializedServices.map((service, idx) => (
            <Link
              key={idx}
              href={`/leistungen/${service.slug}`}
              className="group py-6 md:py-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-2xl"
            >
              <div className="flex items-center gap-4 md:gap-6 md:w-1/2">
                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/30 transition-all">
                  <service.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-xl md:text-3xl font-semibold text-white tracking-tight">
                  {service.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 md:w-1/2 pl-14 md:pl-0">
                <p className="text-zinc-400 text-sm md:text-lg font-light flex-1">
                  {service.desc}
                </p>
                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
