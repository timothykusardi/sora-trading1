// src/app/head.tsx
export default function Head() {
  return (
    <>
      <title>
        Alpha Charcoal International | Premium Indonesian Charcoal &amp; Biomass
      </title>
      <meta
        name="description"
        content="Alpha Charcoal International: sustainably sourced charcoal & biomass from Kalimantan, Indonesia."
      />
      <meta
        name="keywords"
        content="arang kokas premium, ekspor arang Indonesia, arang kalimantan berkualitas, premium Indonesian charcoal, Kalimantan charcoal exporter, sustainable biomass supplier, فحم إندونيسي فاخر, تصدير فحم كاليمانتان"
      />

      {/* Fallback to the .ico file */}
      <link rel="icon" href="/favicon.ico" />
      {/* Optional PNGs as backups */}
      <link rel="icon" href="/alpha-logo.png" sizes="any" />
      <link rel="shortcut icon" href="/alpha-logo.png" />
      <link rel="apple-touch-icon" href="/alpha-logo.png" />
    </>
  );
}
