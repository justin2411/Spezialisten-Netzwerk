# ÜBERGABE FÜR DEN NÄCHSTEN CHAT
## Spezialisten-Netzwerk Website — alles, was ein neuer Claude wissen muss

> **Lies das zuerst, bevor du irgendetwas tust.** Diese Datei bringt dich
> (einen frischen Claude Chat) in 2 Minuten auf den Stand. Stand: 15.06.2026.

---

## Worum geht's?

Justin baut eine moderne Website für das **Spezialisten-Netzwerk** (Finanz-
dienstleister-Netzwerk, 13+ Spezialisten). Sie soll die alte WordPress/Divi-
Seite (spezialisten-netzwerk.com) ablösen und später als **Dienstleistung**
verkauft werden — Kern-Idee: **mit dem Kunden live über die Seite gehen und
Änderungen in Echtzeit pushen**.

---

## Wer macht was (3 Beteiligte)

- **Justin** = Inhaber, entscheidet, prüft visuell, gibt frei.
- **Du (Claude Chat)** = Werkstatt: denkst mit, entwirfst, zeigst visuelle
  Vorschauen im Chat, formulierst präzise Aufträge für Claude Code.
- **Claude Code** = baut im echten Repo, committet, pusht, mergt.

**Wichtig:** Du und Claude Code teilt KEINEN Speicher. Du hast nur einen
Snapshot der Dateien — der echte aktuelle Stand liegt im Repo.
Wenn du unsicher bist, was aktuell ist: Justin oder Claude Code fragen, nicht
auf den Snapshot verlassen. (Die TODO.md im Repo hat oben den jeweils
aktuellen Repo-Stand — der hat Vorrang.)

---

## Wie Justin arbeiten möchte (sehr wichtig für deinen Stil)

Justin schätzt diesen Ablauf — halte dich daran:
1. **Erst fragen, dann bauen.** Bei größeren Änderungen erst seine Vision
   abklären (er mag Multiple-Choice-Fragen / die ask_user_input-Buttons).
2. **Visuelle Vorschau zeigen**, BEVOR etwas ins Repo geht. Du renderst die
   Änderung im Chat (HTML-Widget), er nickt oder korrigiert.
3. **Erst nach seinem OK** den fertigen Auftrag für Claude Code formulieren —
   als sauberer Copy-Paste-Block (er kopiert ihn direkt rüber).
4. **Aufträge immer als kopierbarer Block** ausgeben (das hat er explizit gewünscht).
5. Bei großen Aufgaben: **erst eine Seite/Sektion als Vorlage**, Preview,
   Freigabe, dann der Rest.
6. Antworten eher **knapp und konkret** halten.

---

## Technik-Stack (was läuft wo)

- **Eleventy (11ty)** = Static-Site-Generator. Geteilte Teile in `/_includes/`
  (head, nav, footer, float-button, base), Seiten als Templates.
  Build: `npx @11ty/eleventy` → `_site/`.
- **GitHub:** `justin2411/Spezialisten-Netzwerk` (public).
- **Vercel:** Auto-Deploy bei Push auf `main`. Branch-PRs bekommen Preview-URLs.
  Produktions-URL: `spezialisten-netzwerk-site.vercel.app`.
- **Claude Code** baut im Repo. **Supabase** ist geplant (Kontaktformular-Backend),
  noch nicht aktiv.

**Workflow:** Branch → Draft-PR → Vercel-Preview → Justin prüft → Merge → live.
Vor Merges: Dry-Run auf Konflikte. Nicht viele große Branches parallel offen
lassen (führt zu harten Konflikten — wurde teuer gelernt).

---

## Aktueller Stand (15.06.2026)

✅ **main = sauber, keine offenen PRs, alle 11 Seiten bauen.**

**Die 11 Seiten:** Startseite + OptiPlan + Kapitalanlage Immobilie + Betriebliche
Versorgung + Kontakt + 6 Themenseiten (Ruhestandsplanung, Investment & AIF,
Kranken & Pflege, Finanzanalysen, Finanzierung, Heilwesenberufe).

**Design:** Hell/warm "aus einem Guss" — sanfte warme Verläufe (Cremeweiß
#fbfdf7 ↔ zartes Grün #f4faea), weiche Formen (runde Karten ~24px, Pillen-Buttons,
weiche Schatten), nur der CTA-Block ist dunkel (#16241a) als einziger Akzent.

**✅ optiplan ist die fertige helle Referenz** (PR #10 gemergt): Hero auf hell
gezogen, alle bisher dunklen Sektionen hell, Prozess-Popup gewärmt, nur CTA
dunkel. **Damit steht das Muster fürs Unterseiten-Design.** Justins Entscheidung
steht fest: durchgehend hell, KEINE dunkle Hero-Klammer, Popup gewärmt.

**→ Was als Nächstes dran ist:** die **9 übrigen Unterseiten** ans optiplan-
Muster angleichen (siehe unten + TODO.md).

---

## Design-Regeln (CI) — strikt einhalten

- **Grün ist Unternehmensfarbe, fix:** `--g #8DC63F`, `--gd #6FA52E`, `--gl #A8D85A`.
- Font: Inter. **Keine neuen Farben. KEINE Emojis.**
- Heller Text nur auf dunkel, dunkler nur auf hell (Lesbarkeit).
- Design-Ziel: warm, einladend, menschlich, "Vertrauen statt verkaufen".

---

## Wichtige Fakten (nicht ändern ohne Justins Freigabe)

- **Netzwerk-Manager ist Jonathan Lohne** (NICHT Ender Gülsen — der ist raus).
- Die 10 Spezialisten kommen aus dem **Orbit-Netzwerk** auf der Startseite
  (Quelle der Wahrheit; 2 Punkte doppelt belegt — Finanzierung + bAV).
- Kernbotschaft: **ungebunden / unabhängig**.
- Finanzaussagen, Zahlen, Rechtstexte: nur mit Freigabe. NIE erfinden.

---

## Was als Nächstes ansteht (siehe TODO.md im Repo)

1. **Die 9 übrigen Unterseiten ans optiplan-Muster angleichen** (durchgehend hell):
   - 3 Bestandsseiten voll behandeln: Kapitalanlage Immobilie, Betriebliche
     Versorgung, Kontakt.
   - 6 Themenseiten: nur Konsistenz-/Lesbarkeits-Check + ggf. Hero-Verläufe
     an optiplan angleichen.
   - Vorgehen: erst EINE als Vorlage (Vorschlag: Kapitalanlage Immobilie,
     eigener Rechner wie optiplan), Preview, Freigabe, dann der Rest.
2. Supabase ans Kontaktformular (Leads erfassen) — erster echter Feature-Schritt.
3. Bilder ins Repo holen (aktuell von der WordPress-Seite geladen).
4. Rechtstexte (Impressum/Datenschutz) DSGVO-konform nachbauen.
5. Domain-Umzug WordPress → Vercel.

---

## Inhalte beschaffen

Die alte WordPress-Seite blockt automatisierte Zugriffe (403/Firewall) — weder
du noch Claude Code kommen direkt ran. **Justin liefert Inhalte per Screenshot
oder Copy-Paste**, du bereitest sie strukturiert auf. Finanzinhalte NIE erfinden.

---

## Kurzfassung für den Einstieg

> "Hi Justin! Ich habe die Übergabe gelesen. Stand: Eleventy-Site mit 11 Seiten
> auf main, helles warmes Design, Jonathan Lohne als Netzwerk-Manager. optiplan
> ist die fertige helle Referenz (PR #10) — als Nächstes die 9 übrigen Unterseiten
> nach demselben Muster. Workflow: ich entwerfe + zeige Vorschau, du gibst frei,
> ich formuliere den Auftrag für Claude Code als Copy-Block. Womit starten wir?"
