# ARCHITEKTUR.md — Aufbau & Design-System

Damit Änderungen **konsistent** bleiben. Claude Code: nichts neu erfinden, was
hier schon definiert ist.

---

## Seitenstruktur

| Datei | Seite | Besonderheit |
|---|---|---|
| `index.html` | Hauptlandingpage | Orbit-Grafik, OptiPlan-Vorschau, Testimonial-Karussell, Vorgehen-Stepper, FAQ |
| `optiplan.html` | OptiPlan | 3 Rechner-Tabs (Liquidität/Vermögen/Steuern), Szenarien-Duo |
| `kapitalanlage-immobilie.html` | Kapitalanlage Immobilie | Renditerechner (SVG, 3 Kurven), Spezialisten-Portrait |
| `betriebliche-versorgung.html` | Betriebliche Versorgung | bAV-Rechner, Fluss-Diagramm Brutto→Netto |
| `kontakt.html` | Kontakt | Formular `submitForm()` — Backend folgt (Supabase) |

`vercel.json` aktiviert `cleanUrls` → `/optiplan` statt `/optiplan.html`.

---

## Design-System (CI) — auf ALLEN Seiten gleich

```css
:root {
  --g:       #8DC63F;  /* Primärgrün */
  --gd:      #6FA52E;  /* dunkelgrün */
  --gl:      #A8D85A;  /* hellgrün */
  --gbg:     #F2FAE4;  /* grüner Hintergrund */
  --dark:    #1A1A1A;  /* Haupttext */
  --mid:     #4A4A4A;  /* Sekundärtext */
  --light:   #8A8A8A;  /* heller Text */
  --border:  #E5E5E5;  /* Rahmen */
  --offwhite:#F8F8F6;  /* heller Sektions-BG */
}
```

- **Font:** Inter (Google Fonts)
- **Logo:** `https://spezialisten-netzwerk.com/wp-content/uploads/2023/09/preview_files_01_854.png`

### Regeln
- Farben **immer** über die CSS-Variablen ansprechen, nie hartkodierte Hex-Werte
  neu einstreuen (außer es ist bewusst gewollt).
- Auf **hellem** Hintergrund Text in `--dark` / `--mid` / `--light` — **nie** weiß.
- Auf **dunklem** Hintergrund Text in Weiß-Tönen — nie `--dark`.

> Hinweis (Juni 2026): Das OptiPlan-Chart-Tooltip (`.op-tooltip`) liegt bewusst
> auf dunklem Hintergrund (`rgba(20,30,10,.92)`) und behält daher seine weiße
> Schrift (`rgba(255,255,255,.85)`). Nicht versehentlich auf `--mid` umstellen.

---

## Gemeinsame Komponenten (gleich auf allen Seiten)

- **Nav:** grüner Hintergrund, Logo links, Links mittig, weißer CTA-Button rechts.
- **Footer:** mehrspaltig, Links + Copyright.
- **Float-Button:** grüner Telefon-Button rechts unten.
- **Scroll-Reveal:** Klassen `.rv` / `.visible` (bzw. `.v`) mit Delay-Klassen `.d1`–`.d7`.

---

## Bekannte technische Eigenheiten

- **Orbit-Grafik** (index.html): 8 Nodes, per JS positioniert, Popups mit
  `.flip`-Klasse für die linke Kreishälfte.
- **OptiPlan-Charts:** SVG-Balken, 2 Serien (grün „Mit Empfehlungen" vs. grau
  „Status Quo"), Legende-Dots synchronisieren sich mit Balkenfarben.
- **Karussell:** Infinite-Loop mit geklonten Slides, Auto-Advance.
- **Bilder:** werden derzeit von `spezialisten-netzwerk.com` (wp-content) geladen.
  Falls die später blockiert werden, müssen Bilder ins Repo geholt werden.

---

## Was NICHT ohne Absprache anfassen

- Impressum-, Datenschutz- und Kontakt-Rechtstexte.
- Finanzaussagen / Zahlen / Renditeangaben (müssen belegbar sein).
- Die globale CI (Farbvariablen, Font) — Konsistenz über alle Seiten.
