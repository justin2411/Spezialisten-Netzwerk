# WORKFLOW.md — Wie wir arbeiten

> Stand: Juni 2026.

---

## Die Rollenteilung

- **Claude Chat** = Werkstatt: denkt, entwirft, zeigt visuelle Vorschauen
  (gerendert im Chat), formuliert präzise Aufträge. Hat nur einen Snapshot
  der Dateien von Juni 2026 — kennt den echten Repo-Stand nicht live.
- **Claude Code** = ausführende Hand: baut im echten Repo, committet, pusht, mergt.
- **Justin** = entscheidet, prüft visuell, gibt frei.

Der typische Lauf:
```
Idee/Wunsch → Claude Chat entwirft + zeigt Vorschau → Justin nickt
→ Claude Chat formuliert Auftrag → Justin gibt ihn Claude Code
→ Claude Code baut auf Branch → Vercel-Preview → Justin prüft
→ Freigabe → Merge nach main → Vercel deployt live
```

---

## Auftrags-Format (Claude Chat → Claude Code)

Aufträge sind so präzise, dass Claude Code nicht raten muss:
- Welche Datei(en), welche Stelle (Selektor/Sektion).
- Was genau ändern (alt → neu), mit konkreten Werten.
- Warum (kurz).
- CI-/Design-Vorgaben explizit.
- Abschluss: Branch, Draft-PR, Preview-URL.

Bei großen Aufgaben: **erst EINE Seite/Sektion als Vorlage**, Preview, Freigabe,
dann der Rest. Spart Mehrfach-Korrekturen.

---

## Branch- & Merge-Disziplin (WICHTIG — teuer gelernt)

- Jede Änderung auf **eigenem Branch** → Draft-PR → Vercel-Preview.
- **Nicht mehrere große Änderungen parallel offen lassen**, ohne dazwischen zu
  mergen — sonst divergieren die Branches und es gibt harte Konflikte
  (besonders bei index.html / Struktur-Änderungen).
- **Vor jedem Merge: Dry-Run** auf Konflikte. Bei Konflikten stoppen und melden,
  nicht blind auflösen.
- Saubere Reihenfolge bei aufeinander aufbauenden Änderungen:
  Fundament zuerst (z.B. Struktur), dann Design, dann Inhalte.
- Nach Merges: prüfen, dass `main` der vollständige Stand ist und alle Seiten bauen.

---

## Live-Modus mit dem Kunden (die Kern-Dienstleistung)

Während des Gesprächs Änderungen in Echtzeit sichtbar machen:
1. Bildschirm teilen, Live-Seite zeigen.
2. Kunde äußert Wunsch.
3. Auftrag formulieren (ggf. mit Claude Chat).
4. Claude Code pusht → Vercel deployt.
5. Seite neu laden → live.

**Im Live-Modus:** kleine, klar umrissene Änderungen bevorzugen. Vercel
"Instant Rollback" als Sicherheitsnetz. Direkt-auf-main nur hier okay.

### Sicherheits-Tabu (auch im Live-Modus)
NICHT spontan ändern: Impressum/Datenschutz/Rechtstexte, Renditeversprechen/
Zahlen, strukturelle Umbauten. → Notieren, später sauber mit Justin lösen.

---

## Inhalte beschaffen

Die alte WordPress-Seite (spezialisten-netzwerk.com) blockt automatisierte
Zugriffe (403 / Firewall) — auch aus der Claude-Code-Umgebung (Egress-Policy).
**Lösung:** Justin liefert Inhalte per Screenshot oder Copy-Paste; Claude Chat
bereitet sie strukturiert auf. **Niemals Finanzinhalte erfinden.**

---

## Prüf-Checkliste bei Design-Änderungen

1. Lesbarkeit überall (kein heller Text auf hell / dunkler auf dunkel),
   besonders Sektionen die von dunkel auf hell wechseln.
2. Konsistenz mit der Startseite + allen anderen Seiten.
3. Mobile sauber.
4. CI eingehalten (nur Grün-Palette + #16241a-Akzent, keine Emojis).
5. Nichts Inhaltliches versehentlich geändert.
