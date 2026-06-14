# TODO.md — Offene Punkte & Roadmap

Stand: Juni 2026

---

## Kurzfristig

- [ ] Footer-Links, die noch auf `spezialisten-netzwerk.com` zeigen, klären
      (Finanzanalysen, Investment & AIF, Kranken & Pflege, Heilwesenberufe,
      Ruhestandsplanung, Finanzierung) — eigene Seiten bauen oder verlinken lassen
- [ ] Mobile-Ansicht aller 5 Seiten durchprüfen

## Mittelfristig

- [ ] **Supabase** anbinden → Kontaktformular (`submitForm()` in kontakt.html)
      speichert Leads. Erster „echter" Feature-Schritt.
- [ ] Bilder ins Repo holen (Unabhängigkeit von der WordPress-Seite)
- [ ] Visual-Regression-Tests einrichten (z. B. Playwright-Screenshots),
      bevor Auto-Merge scharf geschaltet wird
- [ ] Eigene Test-Domain auf Vercel hängen

## Langfristig / Dienstleistung

- [ ] Weitere Unterseiten (Finanzanalysen, Investment & AIF, Kranken & Pflege …)
- [ ] Live-Editing-Flow mit echtem Kunden testen (siehe WORKFLOW.md, Modus B)
- [ ] Service-Paket definieren: Umfang, Preis, Wartungsvertrag, Haftungsgrenzen
- [ ] DSGVO-Konformität der ausgelieferten Seiten sicherstellen

---

## Erledigt ✅

- [x] OptiPlan-Panel: Lesbarkeit der Texte geprüft. Beschreibungstext im rechten
      Panel (`.op-info-desc` / `#op-idesc`) steht bereits auf `var(--mid)`. Das
      Chart-Tooltip (`.op-tooltip`) bleibt bewusst weiß, da es auf dunklem
      Hintergrund liegt (Design-Regel, siehe ARCHITEKTUR.md).
- [x] Projekt-Dokumentation ins Repo gelegt (CLAUDE.md, ARCHITEKTUR.md,
      WORKFLOW.md, TODO.md)
- [x] 5 Seiten als statische Site aufbereitet, untereinander verlinkt
- [x] GitHub-Repo `justin2411/Spezialisten-Netzwerk` angelegt
- [x] Vercel mit Repo verbunden, Auto-Deploy aktiv
- [x] Live-Test-URL läuft
