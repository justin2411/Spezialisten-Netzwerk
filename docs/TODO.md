# TODO.md — Offene Punkte & Roadmap

> Stand: Juni 2026.

---

## ⚠️ Aktueller Repo-Stand (Claude Code, 15.06.2026) — Vorrang vor dem Snapshot

- **✅ optiplan ist als helle Referenz fertig und nach `main` gemergt** (PR #10).
  Damit steht das **Muster** fürs helle Unterseiten-Design: Hero hell (warmer
  Verlauf #f4faea→#fbfdf7, dunkles Hintergrundbild aus), alle bisher dunklen
  Sektionen hell + Text auf --dark/--mid, weiche Formen (Karten 24px, runde
  Icon-Kreise, Pillen-Buttons mit Grün-Verlauf, weiche Schatten
  0 10px 34px rgba(60,80,30,.07)), Rechner-Karten cremig, Prozess-Popup gewärmt.
  **Nur der CTA-Block bleibt dunkel** (#16241a → #1f3324).
- **Justins Design-Entscheidung steht fest:** durchgehend hell, KEINE dunkle
  Hero-Klammer, Popup mitgewärmt. (Beide früheren Fragen sind damit beantwortet.)
- **Als Nächstes:** dasselbe Muster auf die **9 übrigen** Unterseiten anwenden —
  die 3 Bestandsseiten (Kapitalanlage Immobilie, Betriebliche Versorgung, Kontakt)
  voll behandeln; die 6 Themenseiten sind über die `.th-*`-Komponenten schon hell
  → nur Konsistenz-/Lesbarkeits-Check + ggf. Hero-Verläufe an optiplan angleichen.
- Sonst ist `main` sauber; **keine offenen PRs**; alle 11 Seiten bauen fehlerfrei.

---

## Gerade in Arbeit
- [ ] Design der 10 Unterseiten ans helle Startseiten-Design angleichen
      (durchgehend hell, weiche Formen, CTA darf dunkler Akzent bleiben).
      Vorgehen: optiplan.html zuerst als Vorlage (= PR #10), dann die anderen 9.

## Kurzfristig
- [ ] Nach dem Unterseiten-Design: Gesamt-Durchsicht aller 11 Seiten auf
      Konsistenz + Mobile.
- [ ] Lesbarkeit aller von dunkel→hell gewechselten Sektionen final prüfen.

## Mittelfristig
- [ ] **Supabase** anbinden → Kontaktformular (submitForm in kontakt.html)
      speichert Leads. Erster "echter" Feature-Schritt.
- [ ] Bilder ins Repo holen (Unabhängigkeit von der WordPress-Seite —
      aktuell laden Fotos/Logo von spezialisten-netzwerk.com).
- [ ] Eigene Test-Domain auf Vercel hängen.
- [ ] Visual-Regression-Tests (Playwright-Screenshots), bevor Auto-Merge.

## Langfristig / Dienstleistung
- [ ] Rechtstexte (Impressum/Datenschutz) auf dem neuen Stack nachbauen —
      DSGVO-konform (Finanzdienstleister!).
- [ ] Domain-Umzug von WordPress (Divi) auf Vercel — bewusster Schnitt.
- [ ] Live-Editing-Flow mit echtem Kunden testen (WORKFLOW.md, Live-Modus).
- [ ] Service-Paket definieren: Umfang, Preis, Wartung, Haftungsgrenzen.

---

## Erledigt ✅
- [x] 5 Seiten als statische Site aufbereitet, untereinander verlinkt
- [x] GitHub-Repo + Vercel verbunden, Auto-Deploy aktiv
- [x] Eleventy-Komponenten-System (head/nav/footer/float/base Includes)
- [x] Multi-Page-Nav mit Themen-Mega-Menü (vollbreit, dockt an Nav an)
- [x] Hero überarbeitet (Variante A, warm/nahbar, Ungebunden-Botschaft)
- [x] 3 neue Startseiten-Sektionen (Fragen, Vorteile, Spezialisten)
- [x] Warmes/helles Design "aus einem Guss" (Startseite): weiche Formen,
      sanfte Verläufe, nur CTA dunkel
- [x] Spezialisten korrigiert: Jonathan Lohne als Kopf, Ender Gülsen raus,
      10 Personen aus dem Orbit
- [x] 6 neue Themenseiten mit echten Inhalten gebaut
- [x] Alle Branches sauber nach main gemergt — main = vollständiger Stand
