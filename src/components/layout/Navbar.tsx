"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      {/* Desktop Navbar – floating top */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 rounded-2xl border ${
          isScrolled
            ? "bg-[#050505]/70 backdrop-blur-2xl border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="px-8 py-3 flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Sparkles className="text-black w-4 h-4" />
            </div>
            <span className="text-white font-semibold tracking-tight text-xl">
              In-Tec
            </span>
          </Link>

          <div className="flex items-center gap-10 text-sm font-medium">
            <Link
              href="/leistungen"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Leistungen
            </Link>
            <Link
              href="/leistungen#spezial"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Spezial
            </Link>
            <Link
              href="/#kontakt"
              className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-colors"
            >
              Angebot anfordern
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar – floating bottom */}
      <nav className="fixed bottom-5 left-4 right-4 z-50 md:hidden bg-[#050505]/70 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-lg shadow-black/30">
        <div className="px-5 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Sparkles className="text-black w-4 h-4" />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">
              In-Tec
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Angebot
            </Link>
            <button
              className="text-white p-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-sm flex flex-col justify-center items-center gap-8 transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/leistungen"
          onClick={() => setMobileMenuOpen(false)}
          className="text-3xl font-light text-white hover:text-zinc-300 transition-colors"
        >
          Leistungen
        </Link>
        <Link
          href="/#kontakt"
          onClick={() => setMobileMenuOpen(false)}
          className="text-3xl font-light text-white hover:text-zinc-300 transition-colors"
        >
          Kontakt
        </Link>
        <Link
          href="/impressum"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg font-light text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          Impressum
        </Link>
        <Link
          href="/datenschutz"
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg font-light text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          Datenschutz
        </Link>
      </div>
    </>
  );
}
