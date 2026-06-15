# TODO.md — Offene Punkte & Roadmap

> Stand: 15.06.2026.

---

## ⚠️ Aktueller Repo-Stand — Vorrang vor dem Snapshot

- **✅ optiplan ist als helle Referenz fertig und auf `main`** (PR #10 gemergt).
  Damit steht das **Muster** fürs helle Unterseiten-Design:
  - Hero hell (warmer Verlauf `#f4faea`→`#fbfdf7`, dunkles Hintergrundbild aus,
    Text auf `--dark`/`--mid`, grünes Wort bleibt grün, grünes Label-Pill,
    Buttons als Grün-Pillen).
  - Weiße „Drei Vitalwerte"-Karte rechts hebt sich per weichem Schatten
    (`0 10px 34px rgba(60,80,30,.07)`) vom hellen Grund ab.
  - Alle bisher dunklen Sektionen hell, weiche Formen (Karten 24px, runde
    Icon-Kreise, Pillen-Buttons, weiche Schatten), Rechner-Karten cremig,
    Prozess-Popup gewärmt.
  - **Nur der CTA-Block bleibt dunkel** (`#16241a`→`#1f3324`) — einziger Akzent.
- **Justins Design-Entscheidung steht fest:** durchgehend hell, KEINE dunkle
  Hero-Klammer, Popup mitgewärmt. (Beide früheren Fragen sind beantwortet.)
- `main` ist sauber, **keine offenen PRs**, alle 11 Seiten bauen fehlerfrei.

### → Nächster Schritt: die 9 übrigen Unterseiten ans optiplan-Muster angleichen
- **3 Bestandsseiten voll behandeln:** Kapitalanlage Immobilie,
  Betriebliche Versorgung, Kontakt.
- **6 Themenseiten:** über die `.th-*`-Komponenten schon weitgehend hell →
  nur Konsistenz-/Lesbarkeits-Check + ggf. Hero-Verläufe an optiplan angleichen.
- Vorgehen wie gehabt: **erst EINE Seite als Vorlage** (Vorschlag: Kapitalanlage
  Immobilie, weil eigener Rechner wie optiplan), Preview, Justins Freigabe,
  dann der Rest. Eigener Branch → Draft-PR → Preview → Merge.

---

## Gerade in Arbeit
- [ ] Die 9 übrigen Unterseiten ans helle optiplan-Muster angleichen
      (durchgehend hell, weiche Formen, nur CTA dunkel). optiplan (PR #10) = Vorlage.

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
- [x] **optiplan als helle Referenz fertig + gemergt (PR #10)** — Muster fürs
      Unterseiten-Design steht
