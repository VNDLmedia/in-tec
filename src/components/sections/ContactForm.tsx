"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Phone, Mail, MessageCircle } from "lucide-react";
import { formServiceOptions, frequencyOptions } from "@/data/content";
import GradientText from "@/components/ui/GradientText";

interface FormData {
  service: string;
  frequency: string;
  sqm: string;
  name: string;
  email: string;
  phone: string;
}

const inputClassName =
  "w-full bg-transparent border-b border-white/10 px-0 py-4 text-white text-lg md:text-xl focus:outline-none focus:border-white/40 transition-colors placeholder:text-zinc-600 rounded-none";

export default function ContactForm() {
  const [formStep, setFormStep] = useState(1);
  const [animKey, setAnimKey] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    service: "",
    frequency: "",
    sqm: "",
    name: "",
    email: "",
    phone: "",
  });

  const goToStep = (step: number) => {
    setFormStep(step);
    setAnimKey((k) => k + 1);
  };

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    goToStep(2);
  };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <span className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-4 block">
            Kontakt
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            Lassen Sie uns <GradientText>starten</GradientText>.
          </h2>
          <p className="text-xl text-zinc-500 font-light">
            Drei kurze Schritte zu Ihrem maßgeschneiderten Konzept.
          </p>
        </div>

        {/* Direct contact options */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mb-12 md:mb-20">
          <a
            href="tel:+493012345678"
            className="flex items-center gap-2.5 px-5 py-2.5 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-white/20 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            +49 30 123 456 78
          </a>
          <a
            href="mailto:kontakt@in-tec.de"
            className="flex items-center gap-2.5 px-5 py-2.5 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-white/20 transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            kontakt@in-tec.de
          </a>
          <a
            href="https://wa.me/493012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 border border-emerald-500/30 bg-emerald-500/10 rounded-full text-emerald-400 hover:bg-emerald-500/20 transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto mb-10 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-zinc-600 text-sm uppercase tracking-widest">oder Formular</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative border border-white/[0.06] rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-0 mb-10 md:mb-14">
            {[
              { num: 1, label: "Leistung" },
              { num: 2, label: "Details" },
              { num: 3, label: "Kontakt" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${
                      formStep > s.num
                        ? "bg-white text-black"
                        : formStep === s.num
                          ? "bg-white text-black"
                          : "border border-white/10 text-zinc-600"
                    }`}
                  >
                    {formStep > s.num ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      s.num
                    )}
                  </div>
                  <span
                    className={`text-[10px] md:text-xs uppercase tracking-wider transition-colors duration-500 ${
                      formStep >= s.num ? "text-zinc-400" : "text-zinc-700"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < 2 && (
                  <div
                    className={`w-10 md:w-16 h-px mx-2 md:mx-3 mb-5 transition-colors duration-500 ${
                      formStep > s.num ? "bg-white/30" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Animated Step Container */}
          <div key={`step-${formStep}-${animKey}`} className="animate-fade-slide-in">
            {/* Step 1: Service Selection */}
            {formStep === 1 && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-8 md:mb-10 text-center">
                  Was dürfen wir für Sie tun?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-xl md:rounded-2xl overflow-hidden">
                  {formServiceOptions.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleServiceSelect(item.title)}
                      className={`group flex items-center gap-4 p-5 md:p-6 bg-[#0a0a0a] hover:bg-white/[0.04] transition-colors text-left ${
                        idx === formServiceOptions.length - 1 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <item.icon className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors shrink-0" />
                      <span className="text-base md:text-lg text-zinc-300 group-hover:text-white transition-colors flex-1">
                        {item.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-zinc-800 group-hover:text-zinc-400 transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {formStep === 2 && (
              <div className="max-w-2xl mx-auto">
                <button
                  onClick={() => goToStep(1)}
                  className="group flex items-center gap-2 text-zinc-500 hover:text-white mb-8 md:mb-10 transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Zurück
                </button>

                <h3 className="text-2xl md:text-3xl font-light text-white mb-10 md:mb-12">
                  Details zu{" "}
                  <span className="font-semibold">{formData.service}</span>
                </h3>

                <div className="space-y-10">
                  <input
                    type="text"
                    placeholder="Ungefähre Fläche in m² (z.B. 250)"
                    value={formData.sqm}
                    onChange={(e) =>
                      setFormData({ ...formData, sqm: e.target.value })
                    }
                    className={inputClassName}
                  />

                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-4 uppercase tracking-wider">
                      Gewünschter Turnus
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {frequencyOptions.map((freq) => (
                        <button
                          key={freq}
                          onClick={() =>
                            setFormData({ ...formData, frequency: freq })
                          }
                          className={`text-left text-sm md:text-base px-4 py-3 rounded-lg border transition-colors ${
                            formData.frequency === freq
                              ? "border-white/30 bg-white/[0.06] text-white"
                              : "border-white/[0.06] text-zinc-500 hover:text-zinc-300 hover:border-white/15"
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => goToStep(3)}
                      disabled={!formData.frequency}
                      className="group flex items-center gap-4 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                    >
                      <span className="text-lg md:text-xl font-medium text-white">
                        Weiter
                      </span>
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {formStep === 3 && (
              <div className="max-w-2xl mx-auto">
                <button
                  onClick={() => goToStep(2)}
                  className="group flex items-center gap-2 text-zinc-500 hover:text-white mb-8 md:mb-10 transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Zurück
                </button>

                <h3 className="text-2xl md:text-3xl font-light text-white mb-10 md:mb-12">
                  Fast geschafft. <br />
                  Wie erreichen wir Sie?
                </h3>

                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Firma / Ihr Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={inputClassName}
                  />
                  <input
                    type="email"
                    placeholder="E-Mail Adresse"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputClassName}
                  />
                  <input
                    type="tel"
                    placeholder="Telefonnummer (optional)"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={inputClassName}
                  />

                  <div className="pt-10">
                    <button
                      onClick={() => alert("Anfrage wurde versendet! (Demo)")}
                      className="w-full bg-white text-black font-medium rounded-full py-5 hover:scale-[1.02] active:scale-[0.98] transition-transform flex justify-center items-center gap-3 text-lg"
                    >
                      <Check className="w-5 h-5" /> Anfrage absenden
                    </button>
                    <p className="text-center text-zinc-600 text-sm mt-6 font-light">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <a
                        href="/datenschutz"
                        className="underline hover:text-zinc-400 transition-colors"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      zu.
                      <br />
                      Ihre Daten werden sicher und verschlüsselt übertragen.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
