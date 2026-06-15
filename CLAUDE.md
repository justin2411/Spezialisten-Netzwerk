# CLAUDE.md — Projekt-Briefing für Claude Code

> Diese Datei wird von Claude Code automatisch gelesen. Sie erklärt **wer** am
> Projekt arbeitet, **was** das Ziel ist und **wie** der Workflow läuft.
> Bei jeder Sitzung: erst diese Datei lesen, dann handeln.
> **Stand: 15.06.2026 — aktualisiert nach optiplan-Referenz (PR #10 gemergt).**

---

## 1. Wer arbeitet hier zusammen?

| Rolle | Wer | Aufgabe |
|---|---|---|
| **Justin** | Mensch, Projektinhaber | Entscheidet, prüft visuell, spricht mit Kunden, gibt Aufträge frei |
| **Claude Chat** | Claude im Web-/Desktop-Chat | Denkt mit, entwirft Änderungen, zeigt visuelle Vorschauen, formuliert präzise Arbeitsaufträge für Claude Code |
| **Claude Code** | Claude im Terminal/Repo (= du) | Führt Änderungen im echten Repo aus, committet, pusht, mergt |

**Wichtig:** Claude Chat und Claude Code teilen KEINEN gemeinsamen Speicher.
Claude Chat hat nur einen Snapshot der Dateien — der echte,
aktuelle Stand liegt im Repo, das nur Claude Code sieht. Diese Doku-Dateien
sind die Brücke. Bei Unsicherheit über den aktuellen Stand: im Repo nachsehen,
nicht auf den alten Snapshot verlassen.

---

## 2. Was ist das Ziel?

Eine moderne, eigenständige Website für das **Spezialisten-Netzwerk**
(Finanzdienstleister-Netzwerk, 13+ Fachspezialisten).

- Läuft als **statische Website**, gebaut mit **Eleventy (11ty)**.
- **Unabhängig** von der alten Live-WordPress-Seite (spezialisten-netzwerk.com,
  Divi-Theme). Diese soll mittelfristig **abgelöst** werden (Weg B: Divi ersetzen).
- Gehostet auf **Vercel**, Auto-Deploy bei jedem Push auf `main`.
- Ziel: verkaufbare Zusatzdienstleistung — Website-Erstellung + laufende Pflege,
  zunächst für bestehende Kunden.

### Die Kern-Idee
Justin will **mit dem Kunden gemeinsam live über die Website gehen** und
Änderungswünsche **in Echtzeit** umsetzen:
Kunde äußert Wunsch → Claude Chat entwirft + zeigt Vorschau → Claude Code pusht
→ Vercel deployt automatisch → kurz darauf live. Das ist der "Wow-Moment".

---

## 3. Technik-Stack

| Technik | Wofür |
|---|---|
| **Eleventy (11ty)** | Static-Site-Generator. Baut aus Templates + Includes die fertigen Seiten. |
| **GitHub** (`justin2411/Spezialisten-Netzwerk`) | Versionierung, Single Source of Truth. |
| **Vercel** | Auto-Deploy bei Push auf `main`. Preview-Deploys für Branches/PRs. |
| **Supabase** (geplant, noch nicht aktiv) | Backend für Kontaktformular / Leads. |
| **Claude Code** | Baut im Repo, committet, pusht, mergt. |
| **Claude Chat** | Denkt, entwirft, zeigt Vorschauen, formuliert Aufträge. |

**Build:** `npx @11ty/eleventy` → Output nach `_site/`.
**vercel.json:** `buildCommand: npx @11ty/eleventy`, `outputDirectory: _site`, `cleanUrls: true`.
**Kein** anderer Build-Step (kein React, kein Tailwind-Compiler) — reines HTML/CSS/JS via Eleventy-Templates.

---

## 4. Projektstruktur (Eleventy)

```
/_includes/
  head.njk        → globale CSS-Variablen, Inter-Font, geteiltes CSS
                    (Nav, Footer, Float, Mega-Menü, warme Design-Tokens)
  nav.njk         → Navigation: Hauptlinks + Themen-Mega-Menü + Hamburger
  footer.njk      → Footer (mehrspaltig)
  float-button.njk→ grüner Telefon-Button rechts unten
  base.njk        → Basis-Layout (bindet head+nav+content+footer+float ein,
                    enthält Scroll-Reveal)
index.html        → Startseite (Frontmatter + seitenspezifischer Inhalt/Style)
optiplan.html
kapitalanlage-immobilie.html
betriebliche-versorgung.html
kontakt.html
ruhestandsplanung.*      → 6 Themenseiten
investment-aif.*
kranken-pflege.*
finanzanalysen.*
finanzierung.*
heilwesenberufe.*
.eleventy.js      → Eleventy-Config
package.json      → build-Script
vercel.json       → Vercel-Build-Config
CLAUDE.md         → diese Datei (Repo-Root)
/docs/            → WORKFLOW.md, ARCHITEKTUR.md, TODO.md, UEBERGABE-NAECHSTER-CHAT.md
```

**Geteilte Komponenten ändern = 1 Datei statt 11.** Nav-Änderung → nur `nav.njk`.
Globale Styles/Farben → `head.njk`. Niemals Nav/Footer pro Seite duplizieren.

---

## 5. Wie du (Claude Code) arbeiten sollst

1. **Lies vor jeder Aufgabe** CLAUDE.md + /docs/ARCHITEKTUR.md + /docs/TODO.md
   (TODO oben hat den aktuellen Repo-Stand — Vorrang vor dem Snapshot).
2. **Halte die CI strikt ein** (Farben, Fonts, Design-Tokens — siehe ARCHITEKTUR.md).
3. **Arbeite auf eigenem Branch** → Draft-PR → Vercel-Preview. Nicht direkt auf
   `main` pushen (außer bei bewusstem Live-Modus mit Kunde).
4. **Große/heikle Änderungen:** zuerst EINE Seite/Sektion als Vorlage fertig
   machen, Preview zeigen, auf Freigabe warten, dann den Rest.
5. **Bei Unsicherheit oder Mehrdeutigkeit: fragen, nicht raten.**
6. **Branch-Hygiene:** Aufeinander aufbauende Änderungen sauber mergen.
   Vor jedem Merge Dry-Run auf Konflikte. Bei Konflikten stoppen und melden.
7. **NIEMALS Geheimnisse** (API-Keys, Supabase-Keys, .env) committen.
   Repo ist public.
8. **Inhalte NIE erfinden** — besonders Finanzaussagen, Zahlen, Personen.
   Wenn Inhalt fehlt: Platzhalter klar markieren oder nachfragen.

---

## 6. Aktueller Stand (15.06.2026)

✅ **main ist sauber, keine offenen PRs, alle 11 Seiten bauen fehlerfrei.**

- **optiplan ist die fertige helle Referenz** (PR #10 gemergt): Hero hell,
  alle bisher dunklen Sektionen hell, Prozess-Popup gewärmt, nur der CTA-Block
  dunkel (`#16241a`). Damit steht das **Muster** fürs Unterseiten-Design.
- **Justins Design-Entscheidung steht fest:** durchgehend hell, KEINE dunkle
  Hero-Klammer, Popup gewärmt.
- Startseite: helles/warmes Design "aus einem Guss", Mega-Menü, Orbit-Netzwerk.
- Spezialisten-Sektion: Jonathan Lohne als Netzwerk-Manager (Kopf), Ender Gülsen
  entfernt. 10 Personen aus dem Orbit (inkl. Duo-Punkte Finanzierung + bAV).

⏳ **Nächster Schritt — siehe TODO.md:**
- Die **9 übrigen Unterseiten** ans optiplan-Muster angleichen: 3 Bestandsseiten
  (Kapitalanlage Immobilie, Betriebliche Versorgung, Kontakt) voll behandeln;
  6 Themenseiten nur Konsistenz-/Lesbarkeits-Check.

⏳ Weiter offen (später):
- Kontaktformular hat noch KEIN Backend (Supabase folgt).
- Bilder werden noch von spezialisten-netzwerk.com geladen.
- Domain-Umzug von WordPress auf Vercel (bewusster Schnitt, später).
- Rechtstexte (Impressum/Datenschutz) noch auf der WordPress-Seite.

---

## 7. Wichtige inhaltliche Fakten (nicht verändern ohne Absprache)

- **Netzwerk-Manager: Jonathan Lohne** (NICHT mehr Ender Gülsen).
- **Unternehmensfarbe Grün** (`--g #8DC63F`) ist fix — nie ändern.
- **Ungebunden / unabhängig** ist die Kernbotschaft ("Vertrauen statt verkaufen").
- Finanzaussagen, Renditezahlen, Rechtstexte: nur mit Justins Freigabe.
