import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Impressum | In-Tec Gebäudereinigung",
  description: "Impressum der In-Tec Gebäudemanagement GmbH – Angaben gemäß § 5 TMG.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-40 pb-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-16">
            Impressum
          </h1>

          <div className="space-y-12 text-lg leading-relaxed">
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                In-Tec Gebäudemanagement GmbH
                <br />
                Musterstraße 123
                <br />
                10115 Berlin
              </p>
              <p className="mt-4">
                <strong className="text-white">Vertreten durch:</strong>
                <br />
                Geschäftsführer: Max Mustermann
              </p>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Kontakt
              </h2>
              <p>
                Telefon:{" "}
                <a href="tel:+493012345678" className="text-white hover:text-emerald-400 transition-colors">
                  +49 (0) 30 123 456 78
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:kontakt@in-tec.de" className="text-white hover:text-emerald-400 transition-colors">
                  kontakt@in-tec.de
                </a>
              </p>
            </section>

            {/* Registereintrag */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Registereintrag
              </h2>
              <p>
                Eintragung im Handelsregister
                <br />
                Registergericht: Amtsgericht Charlottenburg
                <br />
                Registernummer: HRB 123456 B
              </p>
            </section>

            {/* Umsatzsteuer-ID */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Umsatzsteuer-ID
              </h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                DE 123 456 789
              </p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                Max Mustermann
                <br />
                Musterstraße 123
                <br />
                10115 Berlin
              </p>
            </section>

            {/* Streitschlichtung */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 transition-colors underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-4">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="mt-4">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Links umgehend entfernen.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
