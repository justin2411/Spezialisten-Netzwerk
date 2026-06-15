# CLAUDE.md — Projekt-Briefing für Claude Code

> Diese Datei wird von Claude Code automatisch gelesen. Sie erklärt, **wer** an
> diesem Projekt arbeitet, **was** das Ziel ist und **wie** der Workflow läuft.
> Bei jeder Sitzung gilt: erst diese Datei lesen, dann handeln.

---

## 1. Wer arbeitet hier zusammen?

Dieses Projekt wird von einem **Dreierteam** betrieben:

| Rolle | Wer | Aufgabe |
|---|---|---|
| **Justin** | Mensch, Projektinhaber | Entscheidet, prüft visuell, spricht mit Kunden, gibt Aufträge frei |
| **Claude Chat** | Claude im Web-/Desktop-Chat | Denkt mit, entwirft Änderungen, prüft Konzepte, formuliert präzise Arbeitsaufträge für Claude Code |
| **Claude Code** | Claude im Terminal/Repo (= du) | Führt die Änderungen im echten Repo aus, committet und pusht |

**Wichtig:** Claude Chat und Claude Code teilen **keinen** gemeinsamen Speicher.
Was im Chat besprochen wurde, weißt du nur, wenn es dir als Auftrag übergeben
wird. Diese Doku-Dateien sind die Brücke dazwischen.

---

## 2. Was ist das Ziel?

Eine **moderne, eigenständige Version** der Website des „Spezialisten-Netzwerks"
(ein Finanzdienstleister-Netzwerk mit 13+ Fachspezialisten).

- Sie läuft als **statische Website** (reines HTML/CSS/JS, kein Build-Step).
- Sie ist **unabhängig** von der bestehenden Live-WordPress-Seite
  (`spezialisten-netzwerk.com`) — gehostet auf Vercel, Test-Domain.
- Langfristiges Ziel: Das Ganze als **verkaufbare Zusatzdienstleistung**
  anbieten (Website-Erstellung + laufende Pflege für Kunden).

### Die Kern-Idee dahinter

Justin will **mit dem Kunden gemeinsam live über die Website gehen** — und
dabei sollen Änderungswünsche **in Echtzeit** umgesetzt werden:

1. Kunde sagt im Gespräch, was er anders haben will.
2. Justin / Claude Chat formulieren den Wunsch als präzisen Auftrag.
3. **Claude Code pusht die Änderung direkt** ins Repo.
4. Vercel deployt automatisch → der Kunde sieht das Ergebnis kurz darauf live.

Das ist der „Wow-Moment" der Dienstleistung: keine Wartezeit, keine
Abstimmungsschleifen — Änderungen passieren, während man redet.

---

## 3. Wie sieht der Workflow aus?

```
  Kundengespräch / Idee
          │
          ▼
   Claude Chat  ──────►  entwirft + prüft Änderung visuell
   (Werkstatt)           formuliert präzisen Auftrag
          │
          ▼
   Claude Code  ──────►  setzt Auftrag im Repo um
   (= du)                committet + pusht auf GitHub
          │
          ▼
     GitHub (main)
          │
          ▼
       Vercel  ──────►  deployt automatisch → LIVE
```

### Technik-Stack & Rollen

| Technik | Wofür |
|---|---|
| **GitHub** (`justin2411/Spezialisten-Netzwerk`) | Versionierung, Single Source of Truth |
| **Vercel** | Auto-Deploy bei jedem Push, Test-Domain, Preview-URLs |
| **Supabase** (geplant) | Backend für Kontaktformular / Lead-Erfassung |
| **Claude Code** | Ausführende Hand am Repo |
| **Claude Chat** | Denken, Entwerfen, visuelle Vorprüfung |

---

## 4. Wie du (Claude Code) arbeiten sollst

1. **Lies vor jeder Aufgabe** diese Datei + `WORKFLOW.md` + `ARCHITEKTUR.md`.
2. **Halte dich an die bestehende CI** (Farben, Fonts, Komponenten — siehe
   `ARCHITEKTUR.md`). Nichts neu erfinden, was es schon gibt.
3. **Eine Änderung = ein klarer Commit** mit aussagekräftiger Nachricht
   (auf Deutsch, z. B. „OptiPlan-Panel: weiße Texte auf --mid umgestellt").
4. **Nach der Änderung:** committen und pushen, damit Vercel deployt.
5. **Bei Unsicherheit:** nicht raten — kurz nachfragen, was gemeint ist.
6. **Niemals** Geheimnisse (API-Keys, Supabase-Keys, `.env`) committen.
   Das Repo ist aktuell **public**.

---

## 5. Aktueller Stand (Stand: Juni 2026)

- ✅ 5 Seiten live auf Vercel, untereinander verlinkt
- ✅ GitHub ↔ Vercel verbunden, Auto-Deploy aktiv
- ⏳ Kontaktformular hat noch **kein Backend** (Supabase folgt)
- ⏳ Einige Footer-Links zeigen noch auf die Live-WordPress-Seite
- ⏳ Bilder werden noch von `spezialisten-netzwerk.com` geladen

Details zu offenen Punkten: siehe `TODO.md`.
