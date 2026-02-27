import { stats } from "@/data/content";

export default function StatsSection() {
  return (
    <section className="border-b border-white/5 bg-[#050505] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-zinc-500 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
