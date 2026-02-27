"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { formServiceOptions, frequencyOptions } from "@/data/content";

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
  const [formData, setFormData] = useState<FormData>({
    service: "",
    frequency: "",
    sqm: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    setFormStep(2);
  };

  return (
    <section id="kontakt" className="py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            Lassen Sie uns starten.
          </h2>
          <p className="text-xl text-zinc-500 font-light">
            Drei kurze Schritte zu Ihrem maßgeschneiderten Konzept.
          </p>
        </div>

        <div className="relative">
          {/* Progress Indicator */}
          <div className="flex justify-center gap-3 mb-16">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-1 rounded-full transition-all duration-500 ${
                  formStep >= step ? "w-12 bg-white" : "w-4 bg-white/10"
                }`}
              />
            ))}
          </div>

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
                    className="flex items-center justify-between px-6 py-6 border-b border-white/10 hover:border-white/40 hover:pl-10 transition-all text-left group"
                  >
                    <div className="flex items-center gap-6 text-white">
                      <item.icon className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
                      <span className="text-xl md:text-2xl font-light">
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
                onClick={() => setFormStep(1)}
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
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-xl md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700 rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-500 mb-4 uppercase tracking-wider">
                    Gewünschter Turnus
                  </label>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                    {frequencyOptions.map((freq) => (
                      <button
                        key={freq}
                        onClick={() =>
                          setFormData({ ...formData, frequency: freq })
                        }
                        className={`text-left text-lg md:text-xl py-3 border-b transition-colors ${
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
                    onClick={() => setFormStep(3)}
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
                onClick={() => setFormStep(2)}
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
                  className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-xl md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700 rounded-none"
                />
                <input
                  type="email"
                  placeholder="E-Mail Adresse"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-xl md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700 rounded-none"
                />
                <input
                  type="tel"
                  placeholder="Telefonnummer (optional)"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white text-xl md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700 rounded-none"
                />

                <div className="pt-12">
                  <button
                    onClick={() => alert("Anfrage wurde versendet! (Demo)")}
                    className="w-full bg-white text-black font-medium rounded-full py-5 hover:scale-[1.02] transition-transform flex justify-center items-center gap-3 text-lg"
                  >
                    <Check className="w-5 h-5" /> Anfrage verbindlich absenden
                  </button>
                  <p className="text-center text-zinc-600 text-sm mt-6 font-light">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.{" "}
                    <br />
                    Ihre Daten werden sicher und verschlüsselt übertragen.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
