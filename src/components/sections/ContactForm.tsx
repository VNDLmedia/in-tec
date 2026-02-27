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
            className="flex items-center gap-2.5 px-5 py-2.5 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-white/30 transition-all text-sm"
          >
            <Phone className="w-4 h-4" />
            +49 30 123 456 78
          </a>
          <a
            href="mailto:kontakt@in-tec.de"
            className="flex items-center gap-2.5 px-5 py-2.5 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:border-white/30 transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            kontakt@in-tec.de
          </a>
          <a
            href="https://wa.me/493012345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 border border-emerald-500/30 bg-emerald-500/10 rounded-full text-emerald-400 hover:bg-emerald-500/20 transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-2xl mx-auto mb-10 md:mb-16">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-zinc-600 text-sm uppercase tracking-widest">oder Formular</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="relative">
          {/* Progress Indicator */}
          <div className="flex justify-center gap-3 mb-10 md:mb-16">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-1 rounded-full transition-all duration-500 ${
                  formStep >= step ? "w-12 bg-white" : "w-4 bg-white/10"
                }`}
              />
            ))}
          </div>

          {/* Animated Step Container */}
          <div key={`step-${formStep}-${animKey}`} className="animate-fade-slide-in">
            {/* Step 1: Service Selection */}
            {formStep === 1 && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-light text-white mb-10 text-center">
                  Was ist Ihr primäres Anliegen?
                </h3>
                <div className="flex flex-col gap-2">
                  {formServiceOptions.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleServiceSelect(item.title)}
                      className="flex items-center justify-between px-6 py-5 md:py-6 border-b border-white/10 hover:border-white/40 hover:pl-10 transition-all text-left group"
                    >
                      <div className="flex items-center gap-6 text-white">
                        <item.icon className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
                        <span className="text-lg md:text-2xl font-light">
                          {item.title}
                        </span>
                      </div>
                      <ArrowRight className="w-6 h-6 text-zinc-700 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-300" />
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
                  className="flex items-center gap-2 text-zinc-500 hover:text-white mb-12 transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  <ArrowLeft className="w-4 h-4" /> Zurück
                </button>

                <h3 className="text-3xl font-light text-white mb-12">
                  Details zu{" "}
                  <span className="font-semibold">{formData.service}</span>
                </h3>

                <div className="space-y-12">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ungefähre Fläche in m² (z.B. 250)"
                      value={formData.sqm}
                      onChange={(e) =>
                        setFormData({ ...formData, sqm: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-lg md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700 rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-500 mb-4 uppercase tracking-wider">
                      Gewünschter Turnus
                    </label>
                    <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4">
                      {frequencyOptions.map((freq) => (
                        <button
                          key={freq}
                          onClick={() =>
                            setFormData({ ...formData, frequency: freq })
                          }
                          className={`text-left text-base md:text-xl py-3 border-b transition-colors ${
                            formData.frequency === freq
                              ? "border-white text-white font-medium"
                              : "border-white/10 text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => goToStep(3)}
                      disabled={!formData.frequency}
                      className="group flex items-center gap-4 text-2xl font-light text-white disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                    >
                      Weiter zu Schritt 3
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowRight className="w-5 h-5" />
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
                  className="flex items-center gap-2 text-zinc-500 hover:text-white mb-12 transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  <ArrowLeft className="w-4 h-4" /> Zurück
                </button>

                <h3 className="text-3xl font-light text-white mb-12">
                  Fast geschafft. <br />
                  Wie erreichen wir Sie?
                </h3>

                <div className="space-y-8">
                  <input
                    type="text"
                    placeholder="Firma / Ihr Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-lg md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700 rounded-none"
                  />
                  <input
                    type="email"
                    placeholder="E-Mail Adresse"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-lg md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700 rounded-none"
                  />
                  <input
                    type="tel"
                    placeholder="Telefonnummer (optional)"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-lg md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700 rounded-none"
                  />

                  <div className="pt-12">
                    <button
                      onClick={() => alert("Anfrage wurde versendet! (Demo)")}
                      className="w-full bg-white text-black font-medium rounded-full py-5 hover:scale-[1.02] transition-transform flex justify-center items-center gap-3 text-lg"
                    >
                      <Check className="w-5 h-5" /> Anfrage verbindlich absenden
                    </button>
                    <p className="text-center text-zinc-600 text-sm mt-6 font-light">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <a href="/datenschutz" className="underline hover:text-zinc-400 transition-colors">
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
