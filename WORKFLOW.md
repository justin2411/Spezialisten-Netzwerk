# WORKFLOW.md — Wie wir arbeiten

Diese Datei beschreibt den konkreten Ablauf, besonders für den **Live-Modus
mit dem Kunden**.

---

## Modus A: Normale Entwicklung (ohne Kunde)

1. Justin oder Claude Chat beschreibt eine Änderung.
2. Claude Chat formuliert sie als **präzisen Auftrag** (Datei, Stelle, alt→neu).
3. Claude Code setzt um → committet → pusht.
4. Vercel deployt automatisch.
5. Justin prüft das Ergebnis live.

---

## Modus B: Live mit dem Kunden (der Kern der Dienstleistung)

**Ziel:** Während des Gesprächs Änderungen sofort sichtbar machen.

### Ablauf

1. **Bildschirm teilen** — Justin zeigt dem Kunden die Live-Test-Domain.
2. **Kunde äußert Wunsch** — z. B. „Die Überschrift soll kräftiger sein" oder
   „Kann der Button grün statt grau sein?".
3. **Auftrag formulieren** — Justin (ggf. mit Claude Chat) übersetzt den Wunsch
   in einen klaren Befehl an Claude Code.
4. **Claude Code pusht** — Änderung wird umgesetzt und deployed.
5. **Seite neu laden** — nach ~30–60 Sek. ist die Änderung live. Wow-Effekt.

### Regeln für den Live-Modus

- **Kleine, klar umrissene Änderungen** bevorzugen (Texte, Farben, Reihenfolge,
  Bilder tauschen). Große Umbauten lieber offline vorbereiten.
- **Direkt auf `main` pushen** ist im Live-Modus okay (Geschwindigkeit zählt),
  ABER: siehe Sicherheits-Tabu unten.
- **Immer eine Rückfalloption:** Vercel „Instant Rollback" kann einen schlechten
  Stand sofort zurücknehmen. Im Zweifel zurückrollen statt vor dem Kunden fummeln.

### Sicherheits-Tabu (auch im Live-Modus)

Folgendes NICHT spontan ändern, auch wenn der Kunde drängt:

- **Impressum, Datenschutz, rechtliche Texte** — Haftungsrisiko, immer mit Justin.
- **Renditeversprechen / Zahlen / Finanzaussagen** — müssen korrekt & belegbar sein.
- **Strukturelle Dinge** (Navigation komplett umbauen, Seiten löschen) — offline.

Wenn ein Wunsch in diese Kategorie fällt: notieren, später mit Justin sauber lösen.

---

## Auftrags-Format (so übergibt Claude Chat an Claude Code)

Damit Claude Code nichts raten muss, kommen Aufträge in diesem Format:

```
Datei:    index.html
Stelle:   .op-section, Beschreibungstext im rechten Panel
Änderung: alle rgba(255,255,255,...) Textfarben → var(--mid)
Grund:    weißer Text auf hellem Hintergrund schlecht lesbar
Danach:   committen + pushen
```

Klare Anker (Datei + CSS-Selektor/Zeile), klares Vorher→Nachher, kurzer Grund.

> Lesson learned (Juni 2026): „alle rgba(255,255,255,…) im Block ändern" ist nur
> dann richtig, wenn der Hintergrund hell ist. Elemente auf dunklem Hintergrund
> (z. B. `.op-tooltip`) sind ausgenommen — sonst entsteht heller-Text-Problem in
> umgekehrter Richtung. Im Zweifel: Hintergrund prüfen, Design-Regel aus
> `ARCHITEKTUR.md` schlägt den wörtlichen Befehl.

---

## Warum diese Aufteilung?

- **Claude Chat** kann Änderungen **visuell vorab zeigen** (rendern), bevor sie
  ins echte Repo gehen → Justin ist quasi der „visuelle Test".
- **Claude Code** muss dadurch nicht kreativ raten, sondern nur sauber ausführen
  → weniger Fehler, schnellere Umsetzung.
- **Vercel** macht das Deployen unsichtbar → Fokus bleibt auf dem Gespräch.
