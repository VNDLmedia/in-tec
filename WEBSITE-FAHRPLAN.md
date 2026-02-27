# Fahrplan: Von der Landingpage zur professionellen Website

> Dieses Dokument ist eine Checkliste für Claude Code. Ziel: Aus einer einfachen Landingpage eine vollwertige, rechtskonforme, barrierefreie und SEO-optimierte Website machen.

---

## 1. Seitenstruktur & Routing

- [ ] **Unterseiten für jeden Service/Bereich** mit eigener URL (`/leistungen/name`)
- [ ] **Übersichtsseite** die alle Services auflistet (`/leistungen`)
- [ ] **Impressum** (`/impressum`) – gesetzlich vorgeschrieben in DE/AT/CH
- [ ] **Datenschutzerklärung** (`/datenschutz`) – gesetzlich vorgeschrieben (DSGVO)
- [ ] **404-Seite** – custom `not-found.tsx` statt Framework-Default
- [ ] **Alle internen Links funktionieren** – keine `href="#"` Platzhalter
- [ ] **Breadcrumb-Navigation** auf Unterseiten (gut für UX + SEO)

---

## 2. SEO – Technisch

### Metadata
- [ ] **`metadataBase`** in `layout.tsx` setzen (Basis-URL der Seite)
- [ ] **Title-Template** definieren: `%s | Firmenname` (jede Seite bekommt eigenen Titel)
- [ ] **Seitenspezifische `title` und `description`** für jede einzelne Seite
- [ ] **Open Graph Tags** (og:title, og:description, og:image, og:type, og:locale)
- [ ] **Twitter Card Tags** (card, title, description)
- [ ] **Canonical URLs** (`alternates.canonical`) um Duplicate Content zu vermeiden
- [ ] **`lang="de"`** im HTML-Tag (oder passende Sprache)

### Crawling & Indexierung
- [ ] **`robots.ts`** – erlaubt/sperrt Crawler, verweist auf Sitemap
- [ ] **`sitemap.ts`** – listet dynamisch alle Seiten mit `lastModified`, `priority`, `changeFrequency`
- [ ] **Impressum & Datenschutz** auf `noindex` setzen (kein Ranking-Wert)
- [ ] **Keine Default-Framework-Assets** im public/ (next.svg, vercel.svg etc. löschen)

### Structured Data (JSON-LD)
- [ ] **`LocalBusiness` Schema** auf der Homepage (Name, Adresse, Telefon, Öffnungszeiten, Leistungen)
- [ ] **`Service` Schema** auf jeder Service-Detailseite
- [ ] **`BreadcrumbList` Schema** wenn Breadcrumbs vorhanden
- [ ] **`FAQ` Schema** wenn FAQ-Sektion vorhanden

### Performance (Core Web Vitals)
- [ ] **Bilder optimiert** – Next.js `<Image>` mit `width`/`height` oder `fill`, WebP/AVIF
- [ ] **`priority`** auf Hero-Bild (Above the fold)
- [ ] **Fonts lokal laden** oder via `next/font` (kein externer Google Fonts Request)
- [ ] **Keine ungenutzten Dependencies** in `package.json`
- [ ] **Bilder möglichst lokal hosten** statt extern (Unsplash = externe Abhängigkeit + DSGVO-Thema)

---

## 3. Rechtliches (DE/AT/CH)

### Impressum (Pflicht nach § 5 TMG)
- [ ] Vollständiger Firmenname mit Rechtsform
- [ ] Anschrift (Straße, PLZ, Ort)
- [ ] Vertretungsberechtigter (Geschäftsführer)
- [ ] Kontakt: Telefon + E-Mail
- [ ] Handelsregisternummer + Registergericht
- [ ] Umsatzsteuer-ID
- [ ] Verantwortlich für Inhalt nach § 18 Abs. 2 MStV
- [ ] EU-Streitschlichtungsplattform (Link + Hinweis)
- [ ] Haftungsausschluss (Inhalte, Links, Urheberrecht)

### Datenschutzerklärung (DSGVO)
- [ ] Name + Kontakt des Verantwortlichen
- [ ] Hosting-Informationen
- [ ] Server-Log-Files (welche Daten, Rechtsgrundlage)
- [ ] Kontaktformular (Zweck, Rechtsgrundlage Art. 6 DSGVO, Speicherdauer)
- [ ] Cookies (welche, technisch notwendig vs. optional)
- [ ] Externe Dienste einzeln aufführen (Google Fonts, Analytics, Maps, Unsplash etc.)
- [ ] Betroffenenrechte (Auskunft, Löschung, Widerspruch, Beschwerde)
- [ ] Zuständige Aufsichtsbehörde
- [ ] SSL/TLS-Hinweis
- [ ] Stand/Datum der Erklärung

### Cookie-Consent
- [ ] **Cookie-Banner** wenn nicht-essentielle Cookies oder externe Dienste geladen werden
- [ ] Externe Bilder (Unsplash) = Datenübertragung → braucht Consent oder lokales Hosting
- [ ] Google Fonts extern = Datenübertragung → `next/font` nutzen (lokal, kein Consent nötig)

---

## 4. Barrierefreiheit (Accessibility / a11y)

### Semantisches HTML
- [ ] **Nur ein `<h1>` pro Seite** – korrekte Heading-Hierarchie (h1 > h2 > h3)
- [ ] **Landmarks verwenden**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] **`<main>`-Element** genau einmal pro Seite
- [ ] **Listen** für Aufzählungen (`<ul>`, `<ol>`), nicht nur `<div>`-Suppe

### Bilder & Medien
- [ ] **`alt`-Texte** auf allen `<img>` – beschreibend, nicht "Bild von..."
- [ ] **Dekorative Bilder** bekommen `alt=""` (leer, nicht weglassen)
- [ ] **Videos**: Untertitel bereitstellen wenn vorhanden

### Navigation & Interaktion
- [ ] **Keyboard-Navigation** – alle interaktiven Elemente mit Tab erreichbar
- [ ] **Fokus-Styles sichtbar** – nicht `outline: none` ohne Alternative
- [ ] **Skip-to-content Link** am Seitenanfang (springt zum `<main>`)
- [ ] **aria-label** auf Icon-Buttons ohne sichtbaren Text (Hamburger-Menu, Social Links)
- [ ] **aria-expanded** auf Toggles (Mobile Menu, Akkordeons)
- [ ] **aria-current="page"** auf aktiven Navigationslinks

### Farben & Kontrast
- [ ] **Kontrastverhältnis** mindestens 4.5:1 für normalen Text (WCAG AA)
- [ ] **Kontrastverhältnis** mindestens 3:1 für großen Text (>18px bold / >24px)
- [ ] **Farbe nicht als einziges Unterscheidungsmerkmal** (z.B. Fehler nicht nur rot)
- [ ] **Fokus-Indikator** hat ausreichend Kontrast

### Formulare
- [ ] **Labels** für alle Formularfelder (`<label>` oder `aria-label`)
- [ ] **Fehlermeldungen** sind mit dem Feld verknüpft (`aria-describedby`)
- [ ] **Pflichtfelder** als `required` + visuell markiert
- [ ] **Autocomplete-Attribute** auf Kontaktfeldern (`name`, `email`, `tel`)

### Responsive & Zoom
- [ ] **200% Zoom** ohne Informationsverlust oder horizontales Scrollen
- [ ] **Keine feste Viewport-Breite** – keine `user-scalable=no`
- [ ] **Touch-Targets** mindestens 44x44px auf Mobile
- [ ] **Hover-Effekte** haben Touch-Alternativen (Inhalte nicht nur per Hover sichtbar)

---

## 5. Funktionalität

### Kontaktformular
- [ ] **Formular funktioniert** – Server Action oder API Route mit E-Mail-Versand
- [ ] **Validierung** client- UND serverseitig
- [ ] **Erfolgs- und Fehlermeldungen** statt `alert()`
- [ ] **Honeypot-Feld** oder Rate-Limiting gegen Spam
- [ ] **Datenschutz-Checkbox** oder Verweis auf Datenschutzerklärung

### Links & Kontakt
- [ ] **Telefonnummern** als `tel:`-Links (klickbar auf Mobile)
- [ ] **E-Mail-Adressen** als `mailto:`-Links
- [ ] **Externe Links** mit `target="_blank" rel="noopener noreferrer"`
- [ ] **Social-Media-Links** zeigen auf echte Profile oder werden entfernt

### Sonstiges
- [ ] **Keine Platzhalter-Daten** ("Max Mustermann", "Musterstraße 123") auf Live-Seite
- [ ] **Keine Stockfotos** wenn vermeidbar – echte Firmenfotos nutzen
- [ ] **Favicon** angepasst (nicht das Default-Icon)
- [ ] **Loading-States** für asynchrone Aktionen
- [ ] **Error-Boundaries** für graceful Fehlerbehandlung

---

## 6. Performance-Checkliste

- [ ] **Lighthouse Score** > 90 auf allen Kategorien (Performance, Accessibility, Best Practices, SEO)
- [ ] **Bilder**: Richtige Größe, modernes Format (WebP/AVIF), Lazy Loading
- [ ] **Fonts**: Lokal via `next/font`, `font-display: swap`
- [ ] **JavaScript-Bundle**: Keine unnötigen Client Components (`"use client"` nur wo nötig)
- [ ] **Statische Generierung**: So viele Seiten wie möglich statisch pre-rendern (`generateStaticParams`)

---

## 7. Deployment-Checkliste

- [ ] **Echte Domain** in `metadataBase`, `sitemap.ts`, `robots.ts` einsetzen
- [ ] **HTTPS** erzwingen
- [ ] **www/non-www Redirect** konfigurieren
- [ ] **Favicon & App-Icons** für verschiedene Geräte
- [ ] **Google Search Console** einrichten und Sitemap einreichen
- [ ] **`.env`-Dateien** nicht im Repository (API-Keys, SMTP-Credentials etc.)

---

## Kurzanweisung für Claude Code

> Wenn du eine neue Landingpage bekommst, arbeite diese Checkliste von oben nach unten ab:
>
> 1. **Seitenstruktur** aufbauen (Unterseiten, Impressum, Datenschutz, 404)
> 2. **SEO** einrichten (Metadata, robots, sitemap, JSON-LD, OG-Tags)
> 3. **Rechtliches** erstellen (Impressum, Datenschutz mit Platzhaltern kennzeichnen)
> 4. **Barrierefreiheit** sicherstellen (Semantik, Kontrast, Keyboard, ARIA)
> 5. **Links reparieren** (keine href="#", tel/mailto, externe Links)
> 6. **Funktionalität** prüfen (Formular, Navigation, Responsive)
> 7. **Aufräumen** (Default-Assets löschen, Platzhalter markieren)
> 8. **Build testen** (`npm run build` muss fehlerfrei durchlaufen)
