import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | In-Tec Gebäudereinigung",
  description:
    "Datenschutzerklärung der In-Tec Gebäudemanagement GmbH – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-40 pb-32 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-16">
            Datenschutz&shy;erklärung
          </h1>

          <div className="space-y-12 text-lg leading-relaxed">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-4">
                In-Tec Gebäudemanagement GmbH
                <br />
                Musterstraße 123
                <br />
                10115 Berlin
                <br />
                <br />
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

            {/* 2. Allgemeines */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Allgemeine Hinweise zur Datenverarbeitung
              </h2>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>
              <p className="mt-4">
                Die Nutzung unserer Website ist in der Regel ohne Angabe
                personenbezogener Daten möglich. Soweit auf unseren Seiten
                personenbezogene Daten (beispielsweise Name, Anschrift oder
                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                stets auf freiwilliger Basis.
              </p>
            </section>

            {/* 3. Hosting */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Hosting
              </h2>
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet
                (Hoster). Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters gespeichert.
                Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
                Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                Namen, Websitezugriffe und sonstige Daten, die über eine Website
                generiert werden, handeln.
              </p>
              <p className="mt-4">
                Der Einsatz des Hosters erfolgt im Interesse einer sicheren,
                schnellen und effizienten Bereitstellung unseres
                Online-Angebots. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
                DSGVO.
              </p>
            </section>

            {/* 4. Server-Log-Files */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Server-Log-Files
              </h2>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in so genannten Server-Log-Files, die Ihr Browser
                automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art.
                6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            {/* 5. Kontaktformular */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert.
              </p>
              <p className="mt-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                Abs. 1 lit. f DSGVO).
              </p>
              <p className="mt-4">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </section>

            {/* 6. Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Cookies
              </h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies und keine
                Analyse-Tools. Es werden lediglich technisch notwendige Cookies
                eingesetzt, die für den Betrieb der Website erforderlich sind.
                Diese Cookies werden nach Ende Ihrer Browser-Sitzung
                automatisch gelöscht.
              </p>
            </section>

            {/* 7. Externe Inhalte */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Externe Inhalte
              </h2>
              <h3 className="text-xl font-medium text-white mb-3">
                Google Fonts
              </h3>
              <p>
                Diese Website nutzt zur einheitlichen Darstellung von
                Schriftarten so genannte Google Fonts. Die Google Fonts werden
                lokal eingebunden. Eine Verbindung zu Servern von Google findet
                dabei nicht statt.
              </p>

              <h3 className="text-xl font-medium text-white mb-3 mt-6">
                Bilder von Unsplash
              </h3>
              <p>
                Auf dieser Website werden Bilder des Dienstes Unsplash
                (Unsplash Inc., Montreal, Kanada) eingebunden. Beim Laden dieser
                Bilder wird eine Verbindung zu den Servern von Unsplash
                hergestellt. Dabei wird Ihre IP-Adresse an Unsplash übermittelt.
                Die Nutzung erfolgt auf Grundlage unseres berechtigten
                Interesses an einer ansprechenden Darstellung unseres
                Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            {/* 8. Betroffenenrechte */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Ihre Rechte
              </h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong className="text-white">Auskunft</strong> über Ihre bei
                  uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15
                  DSGVO)
                </li>
                <li>
                  <strong className="text-white">Berichtigung</strong>{" "}
                  unrichtiger Daten zu verlangen (Art. 16 DSGVO)
                </li>
                <li>
                  <strong className="text-white">Löschung</strong> Ihrer bei uns
                  gespeicherten Daten zu verlangen (Art. 17 DSGVO)
                </li>
                <li>
                  <strong className="text-white">
                    Einschränkung der Verarbeitung
                  </strong>{" "}
                  zu verlangen (Art. 18 DSGVO)
                </li>
                <li>
                  <strong className="text-white">Datenübertragbarkeit</strong>{" "}
                  zu verlangen (Art. 20 DSGVO)
                </li>
                <li>
                  <strong className="text-white">Widerspruch</strong> gegen die
                  Verarbeitung einzulegen (Art. 21 DSGVO)
                </li>
              </ul>
              <p className="mt-4">
                Darüber hinaus steht Ihnen ein Beschwerderecht bei der
                zuständigen Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO).
              </p>
              <p className="mt-4">
                Die zuständige Aufsichtsbehörde ist:
                <br />
                Berliner Beauftragte für Datenschutz und Informationsfreiheit
                <br />
                Friedrichstr. 219, 10969 Berlin
              </p>
            </section>

            {/* 9. SSL/TLS */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte eine SSL- bzw.
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                Sie daran, dass die Adresszeile des Browsers von
                &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            {/* Stand */}
            <section className="border-t border-white/10 pt-8">
              <p className="text-zinc-500">
                Stand: Februar 2026
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
