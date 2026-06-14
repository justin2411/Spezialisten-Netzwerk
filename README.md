# Spezialisten-Netzwerk — Test-Deployment

Statische Test-Version der Website. Unabhängig vom Live-WordPress.

## Seiten
- `index.html` — Hauptlandingpage (war: premium.html)
- `optiplan.html` — OptiPlan
- `kapitalanlage-immobilie.html` — Kapitalanlage Immobilie
- `betriebliche-versorgung.html` — Betriebliche Versorgung
- `kontakt.html` — Kontakt (Formular: submitForm(event) — noch ohne Backend)

## Hinweise
- Bilder/Logos werden noch von spezialisten-netzwerk.com geladen (wp-content).
- Interne Seiten-Links zeigen lokal; Impressum/Datenschutz + noch nicht gebaute
  Unterseiten zeigen vorerst aufs Original.
- `vercel.json` aktiviert cleanUrls (/optiplan statt /optiplan.html).

## Deploy
Push auf GitHub → Vercel baut automatisch. Kein Build-Step nötig (statisches HTML).
