import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-24 md:pb-12 px-6 lg:px-12 text-sm text-zinc-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Brand & Address */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="font-semibold tracking-tight text-white text-lg">
              In-Tec Cleaning
            </span>
          </Link>
          <p className="mb-6 leading-relaxed">
            Premium Facility Management & Gebäudereinigung für höchste
            Ansprüche in Gewerbe und Medizin.
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-600" /> Musterstraße 123,
              10115 Berlin
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zinc-600" />
              <a
                href="tel:+493012345678"
                className="hover:text-white transition-colors"
              >
                +49 (0) 30 123 456 78
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zinc-600" />
              <a
                href="mailto:kontakt@in-tec.de"
                className="hover:text-white transition-colors"
              >
                kontakt@in-tec.de
              </a>
            </p>
          </div>
        </div>

        {/* Links: Leistungen */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Leistungen
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/leistungen/unterhaltsreinigung"
                className="hover:text-white transition-colors"
              >
                Unterhaltsreinigung
              </Link>
            </li>
            <li>
              <Link
                href="/leistungen/bauendreinigung"
                className="hover:text-white transition-colors"
              >
                Bauendreinigung
              </Link>
            </li>
            <li>
              <Link
                href="/leistungen/glas-und-fassadenreinigung"
                className="hover:text-white transition-colors"
              >
                Glas- & Fassadenreinigung
              </Link>
            </li>
            <li>
              <Link
                href="/leistungen"
                className="hover:text-white transition-colors"
              >
                Alle Leistungen
              </Link>
            </li>
          </ul>
        </div>

        {/* Links: Rechtliches */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Rechtliches
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/impressum"
                className="hover:text-white transition-colors"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Details */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">
            Gesellschaft
          </h4>
          <ul className="space-y-2 text-zinc-500">
            <li>In-Tec Gebäudemanagement GmbH</li>
            <li>Sitz der Gesellschaft: Berlin</li>
            <li>Registergericht: Amtsgericht Charlottenburg</li>
            <li>HRB: 123456 B</li>
            <li>Geschäftsführer: Max Mustermann</li>
            <li className="pt-4">USt-IdNr.: DE 123 456 789</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
        <p>
          &copy; {new Date().getFullYear()} In-Tec Gebäudemanagement GmbH. Alle
          Rechte vorbehalten.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/impressum" className="hover:text-white transition-colors">
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-white transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
