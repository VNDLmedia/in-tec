"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-2xl border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Sparkles className="text-black w-4 h-4" />
            </div>
            <span className="text-white font-semibold tracking-tight text-xl">
              In-Tec
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a
              href="#leistungen"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#spezial"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Spezial
            </a>
            <a
              href="#kontakt"
              className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-colors"
            >
              Angebot anfordern
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 flex flex-col gap-6">
          <a
            href="#leistungen"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-light text-white border-b border-white/10 pb-4"
          >
            Portfolio
          </a>
          <a
            href="#kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-light text-white border-b border-white/10 pb-4"
          >
            Kontakt
          </a>
        </div>
      )}
    </>
  );
}
