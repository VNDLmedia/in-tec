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

const steps = [
  { num: 1, label: "Leistung" },
  { num: 2, label: "Details" },
  { num: 3, label: "Kontakt" },
];

const inputClassName =
  "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-lg md:text-xl focus:outline-none focus:border-emerald-400/50 focus:shadow-[0_0_20px_-5px_rgba(52,211,153,0.2)] focus:bg-white/[0.05] transition-all duration-300 placeholder:text-zinc-600";

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
    <section id="kontakt" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
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
            className="flex items-center gap-2.5 px-5 py-2.5 border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-full text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 text-sm"
          >
            <Phone className="w-4 h-4" />
            +49 30 123 456 78
          </a>
          <a
            href="mailto:kontakt@in-tec.de"
            className="flex items-center gap-2.5 px-5 py-2.5 border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-full text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 text-sm"
          >
            <Mail className="w-4 h-4" />
            kontakt@in-tec.de
          </a>
          <a
            href="https://wa.me/493012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm rounded-full text-emerald-400 hover:bg-emerald-500/20 hover:shadow-[0_0_20px_-5px_rgba(52,211,153,0.2)] transition-all duration-300 text-sm"
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

        {/* Glass card wrapper */}
        <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-16">
          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-0 mb-10 md:mb-16">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold transition-all duration-500 ${
                      formStep > s.num
                        ? "bg-gradient-to-br from-emerald-400 to-cyan-400 text-black"
                        : formStep === s.num
                          ? "bg-gradient-to-br from-emerald-400 to-cyan-400 text-black animate-glow-pulse"
                          : "bg-white/5 text-zinc-600 border border-white/10"
                    }`}
                  >
                    {formStep > s.num ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      s.num
                    )}
                  </div>
                  <span
                    className={`text-[10px] md:text-xs uppercase tracking-wider transition-colors duration-500 ${
                      formStep >= s.num ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < 2 && (
                  <div
                    className={`w-12 md:w-20 h-px mx-2 md:mx-3 mb-5 transition-colors duration-500 ${
                      formStep > s.num
                        ? "bg-gradient-to-r from-emerald-400 to-cyan-400"
                        : "bg-white/10"
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
                <div className="text-center mb-8 md:mb-10">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-[10px]">
                      1
                    </span>
                    Schritt 1
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white">
                    Was ist Ihr primäres Anliegen?
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {formServiceOptions.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleServiceSelect(item.title)}
                      className="group relative flex flex-col items-start gap-4 p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-emerald-400/30 hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.15)] backdrop-blur-sm transition-all duration-300 text-left"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-emerald-400/20 group-hover:to-cyan-400/20 group-hover:border-emerald-400/30 transition-all duration-300">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-zinc-500 group-hover:text-emerald-400 transition-colors duration-300" />
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <span className="text-base md:text-lg font-medium text-white">
                          {item.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
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
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />{" "}
                  Zurück
                </button>

                <div className="mb-10 md:mb-12">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-[10px]">
                      2
                    </span>
                    Schritt 2
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white">
                    Details zu{" "}
                    <span className="font-semibold">{formData.service}</span>
                  </h3>
                </div>

                <div className="space-y-10">
                  <div>
                    <input
                      type="text"
                      placeholder="Ungefähre Fläche in m² (z.B. 250)"
                      value={formData.sqm}
                      onChange={(e) =>
                        setFormData({ ...formData, sqm: e.target.value })
                      }
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-4 uppercase tracking-wider">
                      Gewünschter Turnus
                    </label>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {frequencyOptions.map((freq) => (
                        <button
                          key={freq}
                          onClick={() =>
                            setFormData({ ...formData, frequency: freq })
                          }
                          className={`relative text-left text-sm md:text-base px-4 py-3.5 md:px-5 md:py-4 rounded-xl border transition-all duration-300 ${
                            formData.frequency === freq
                              ? "border-emerald-400/50 bg-emerald-400/10 text-white shadow-[0_0_20px_-5px_rgba(52,211,153,0.2)]"
                              : "border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:bg-white/[0.06] hover:border-white/20 hover:text-zinc-200"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                formData.frequency === freq
                                  ? "border-emerald-400 bg-emerald-400"
                                  : "border-zinc-600"
                              }`}
                            >
                              {formData.frequency === freq && (
                                <Check className="w-2.5 h-2.5 text-black" />
                              )}
                            </span>
                            {freq}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => goToStep(3)}
                      disabled={!formData.frequency}
                      className="group flex items-center gap-4 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <span className="text-lg md:text-xl font-medium text-white">
                        Weiter
                      </span>
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center group-hover:shadow-[0_0_25px_-3px_rgba(52,211,153,0.5)] group-hover:scale-105 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-black" />
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
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />{" "}
                  Zurück
                </button>

                <div className="mb-10 md:mb-12">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-[10px]">
                      3
                    </span>
                    Schritt 3
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light text-white">
                    Fast geschafft. <br />
                    Wie erreichen wir Sie?
                  </h3>
                </div>

                <div className="space-y-4">
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

                  <div className="pt-8">
                    <button
                      onClick={() => alert("Anfrage wurde versendet! (Demo)")}
                      className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold rounded-full py-5 hover:shadow-[0_0_40px_-5px_rgba(52,211,153,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex justify-center items-center gap-3 text-lg"
                    >
                      <Check className="w-5 h-5" /> Anfrage verbindlich absenden
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
