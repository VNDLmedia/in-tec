export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://in-tec.de",
    name: "In-Tec Gebäudemanagement GmbH",
    description:
      "Professionelle Gebäudereinigung und Facility Management in Berlin. Unterhaltsreinigung, Bauendreinigung, Glasreinigung und Spezialreinigung für Gewerbe und Medizin.",
    url: "https://in-tec.de",
    telephone: "+493012345678",
    email: "kontakt@in-tec.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Musterstraße 123",
      addressLocality: "Berlin",
      postalCode: "10115",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.532,
      longitude: 13.383,
    },
    areaServed: {
      "@type": "City",
      name: "Berlin",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Reinigungsleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Unterhaltsreinigung",
            description:
              "Tägliche Büroreinigung, Sanitäranlagen, Küchen und Flure.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bauendreinigung",
            description:
              "Grobreinigung, Feinreinigung und Zementschleier-Entfernung.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Glas- & Fassadenreinigung",
            description:
              "Fenster, Glasfassaden und Schaufenster streifenfrei gereinigt.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Praxis- & Hygienereinigung",
            description:
              "RKI-konforme Reinigung für Arztpraxen und medizinische Einrichtungen.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrie- & Hallenreinigung",
            description:
              "Großflächenreinigung mit Aufsitzmaschinen und Hochdrucktechnik.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
