import { specializedServices } from "@/data/content";

export default function SpecializedServices() {
  return (
    <section id="spezial" className="py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-16">
          Spezialisiertes <br />
          Handwerk.
        </h2>

        <div className="flex flex-col border-t border-white/10">
          {specializedServices.map((service, idx) => (
            <div
              key={idx}
              className="group py-8 md:py-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-2xl cursor-default"
            >
              <div className="flex items-center gap-6 md:w-1/2">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/30 transition-all">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {service.title}
                </h3>
              </div>
              <p className="text-zinc-400 md:w-1/2 text-lg font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
