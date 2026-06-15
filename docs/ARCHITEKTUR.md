# ARCHITEKTUR.md — Aufbau & Design-System

> Stand: Juni 2026. Damit Änderungen konsistent bleiben.
> Claude Code: nichts neu erfinden, was hier definiert ist.

---

## Eleventy-Struktur

Die Seite wird mit **Eleventy (11ty)** gebaut. Geteilte Teile liegen in
`/_includes/`, Seiten ziehen sie über `base.njk`.

```
/_includes/head.njk   → :root CSS-Variablen + Inter-Font + geteiltes CSS
                        (Nav, Footer, Float-Button, Mega-Menü, warme Tokens)
/_includes/nav.njk    → Navigation (Hauptlinks + Themen-Mega-Menü + Hamburger)
/_includes/footer.njk → Footer
/_includes/float-button.njk → Telefon-Button
/_includes/base.njk   → Layout, bindet alles ein, Scroll-Reveal
```

Seitenspezifischer Inhalt + `<style>` stehen IM jeweiligen Seiten-Template.
Geteiltes gehört in die Includes. **Faustregel:** Was auf mehreren Seiten gleich
aussieht → Include. Was nur eine Seite betrifft → Seiten-Template.

Build: `npx @11ty/eleventy` → `_site/`. Vercel nutzt `cleanUrls` (/optiplan statt /optiplan.html).

---

## Seitenübersicht (11 Seiten)

| Seite | URL | Besonderheit |
|---|---|---|
| Startseite | `/` | Hero, Orbit-Netzwerk, Fragen, Vorteile, OptiPlan-Vorschau, Vorgehen, Spezialisten, Testimonials, FAQ, CTA |
| OptiPlan | `/optiplan` | 3 Rechner-Tabs (Liquidität/Vermögen/Steuern) |
| Kapitalanlage Immobilie | `/kapitalanlage-immobilie` | Immobilien-Renditerechner |
| Betriebliche Versorgung | `/betriebliche-versorgung` | bAV-Rechner, Fluss-Diagramm |
| Kontakt | `/kontakt` | Formular (submitForm — noch ohne Backend) |
| Ruhestandsplanung | `/ruhestandsplanung` | 6 Vorteils-Karten, Ansprechpartner Jonathan Lohne |
| Investment & AIF | `/investment-aif` | Vorteile + "Finanzplanung mit Ziel", Spezialist Dorian Scholl |
| Kranken & Pflege | `/kranken-pflege` | Zitat-Sektion, Spezialist Dr. Michael Buck |
| Finanzanalysen | `/finanzanalysen` | 3 Dimensionen + Prozess, Spezialist Joachim Hendelkes |
| Finanzierung | `/finanzierung` | Vorteile + "Was kann finanziert werden", Spezialisten Jana Hoffmann + Mathias Moews |
| Heilwesenberufe | `/heilwesenberufe` | 6 Leistungs-Karten, Spezialistin Sigrid Casanova |

---

## Design-System (CI) — auf ALLEN Seiten gleich

```css
:root {
  --g:       #8DC63F;  /* Primärgrün — UNTERNEHMENSFARBE, fix */
  --gd:      #6FA52E;  /* dunkelgrün */
  --gl:      #A8D85A;  /* hellgrün */
  --gbg:     #F2FAE4;  /* grüner Hintergrund */
  --dark:    #1A1A1A;  /* Haupttext */
  --mid:     #4A4A4A;  /* Sekundärtext */
  --light:   #8A8A8A;  /* heller Text */
}
```

- **Font:** Inter (Google Fonts)
- **Logo:** https://spezialisten-netzwerk.com/wp-content/uploads/2023/09/preview_files_01_854.png

### Warme/helle Design-Tokens (Stand der letzten Überarbeitung)
- Helle Sektionen: sanfte warme Verläufe zwischen Cremeweiß `#fbfdf7` und
  zartem Grün `#f4faea`. Sektionen fließen ineinander (kein harter Wechsel).
- Dunkler Akzent NUR im CTA-Block: `linear-gradient(160deg,#16241a,#1f3324)`.
  Sonst durchgehend hell.
- **Weiche Formen:** Karten border-radius ~24px, Icon-Container rund (Kreis,
  Hintergrund `rgba(141,198,63,.12)`), Buttons als Pillen (`border-radius:100px`,
  Grün-Verlauf `linear-gradient(145deg,#A8D85A,#8DC63F)`), weiche Schatten
  `0 10px 34px rgba(60,80,30,.07)`, Foto-Ecken ~20px.
- Hover: `transition .3s ease`, `translateY(-3px)` + weicher Schatten.

### Regeln
- Farben immer über die Variablen / definierten Tokens, keine neuen Farben.
- Heller Text nur auf dunklem Grund, dunkler nur auf hellem (Lesbarkeit!).
- KEINE Emojis.

---

## Gemeinsame Komponenten

- **Nav** (`nav.njk`): grüner Hintergrund, Logo links, Hauptlinks (Das Netzwerk,
  Vorgehen, FAQ), **Themen-Mega-Menü** (vollbreit, dockt an Nav an, 8 Themen mit
  Icons), weißer CTA-Button rechts, Hamburger für Mobile.
- **Footer** (`footer.njk`): mehrspaltig, Links, Copyright.
- **Float-Button** (`float-button.njk`): grüner Telefon-Button rechts unten.
- **Scroll-Reveal** (in `base.njk`): `.rv` / `.v` mit Delays.

---

## Spezialisten (Quelle: Orbit-Netzwerk auf der Startseite)

Der Orbit ist die maßgebliche Quelle. 10 Personen, 2 Punkte doppelt belegt:

| Person | Rolle | Thema |
|---|---|---|
| Jonathan Lohne | Netzwerk Manager | Zentrum/Manager |
| Jana Hoffmann | Spezialistin Finanzierung | Finanzierung (Duo) |
| Mathias Moews | Dipl.-Betriebswirt \| Finanzierungen | Finanzierung (Duo) |
| Dr. Michael Buck | Kranken- & Pflegeversicherung | Kranken & Pflege |
| Joachim Hendelkes | Dipl.-Kfm. \| Finanzanalysen | Finanzanalysen |
| Christian H. Schneider | Dipl.-Kfm. \| Kapitalanlage Immobilien | Immobilien |
| Dorian Scholl | Financial Planner \| Investment & AIF | Investment & AIF |
| Sigrid Casanova | M.A. \| Unternehmensberatung Heilwesen | Heilwesenberufe |
| Ronni Arndt | Dipl.-Volkswirt \| bAV / DMA | Betr. Versorgung (Duo) |
| Steffen Domes | Experte bAV / DMA | Betr. Versorgung (Duo) |

**Ender Gülsen ist NICHT mehr dabei** — durch Jonathan Lohne ersetzt.

---

## Was NICHT ohne Absprache anfassen

- Unternehmensfarbe Grün und die CI-Variablen.
- Finanzaussagen, Renditezahlen.
- Impressum/Datenschutz/Rechtstexte.
- Personen-Daten der Spezialisten (Quelle = Orbit).
