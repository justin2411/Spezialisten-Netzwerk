# TODO.md — Offene Punkte & Roadmap

> Stand: Juni 2026.

---

## ⚠️ Aktueller Repo-Stand (Claude Code, 15.06.2026) — Vorrang vor dem Snapshot
> Der Snapshot von Claude Chat sagt „keine offenen PRs". Das stimmt nicht mehr:

- **PR #10 ist OFFEN** (Branch `claude/unterseiten-hell`): **optiplan.html** als
  **Vorlage** fürs helle Unterseiten-Design ist fertig und gepusht — wartet auf
  Justins Freigabe (Draft-PR, Vercel-Preview).
- **2 offene Fragen aus PR #10** (vor dem Ausrollen klären):
  1. Hero + CTA der Unterseiten bleiben als dunkle „Klammer" (wie auf der
     Startseite: dunkler Hero oben, dunkler CTA unten) — so gewollt?
  2. Soll das OptiPlan-Prozess-**Popup** (Modal beim Klick auf eine Karte) auch
     gewärmt werden? (aktuell noch dunkel gelassen)
- **Danach:** Muster auf die restlichen 9 anwenden — die 3 Bestandsseiten
  (Kapitalanlage, Betriebliche Versorgung, Kontakt) gleich behandeln; die 6
  Themenseiten sind designseitig schon hell → nur Konsistenz-/Lesbarkeits-Check.
- Sonst ist `main` sauber; alle 11 Seiten bauen fehlerfrei.

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
