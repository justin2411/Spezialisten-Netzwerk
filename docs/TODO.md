# TODO.md — Offene Punkte & Roadmap

> Stand: Juni 2026 — aktualisiert nach dem Netzwerk-Call (Christian, Steffen, Ronni u.a.)
> + HORBACH Corporate Design Manual.

---

## 🔴 WICHTIG — Korrekturen mit Priorität (aus dem Call)

- [ ] **Markenfarbe auf HORBACH-CI umstellen** (ENTSCHEIDUNG des Netzwerks: HORBACH-
      Wiedererkennung, Hauptzielgruppe = HORBACH-Kunden/Berater). Zentral in head.njk.
      - Primär: HB FreshGreen #b4c800, HB Basil #697d0f, HB WarmGrey #827869, Black.
      - Sekundär (sparsam): Amber #ecbd00, Indigo #006e96, Berry #af005f.
      - **BFSG-Kontrastregel:** weiße Schrift NUR auf Basil/WarmGrey/Berry/Indigo/dunkel,
        NIE auf hellem FreshGreen. Auf hellem Grün → schwarze Schrift.
      - Schrift: Hausschrift **Assistant** (Fallback Calibri), Inter ersetzen.
      - Weiche Formen/Rundungen bleiben (passen zu HORBACH "Mosaik des Lebens").

- [ ] **bAV-Seite (Betriebliche Versorgung) zurücksetzen/überarbeiten.**
      Steffen & Ronni: Inhalte wurden frei erfunden statt vom Original übernommen,
      **Rechner ist inhaltlich FALSCH**. Bis zur Überarbeitung auf die alten
      Original-Inhalte zurückgreifen. Steffen/Ronni liefern später korrekten Input.
      → Original-Inhalte per Screenshot nötig.

- [ ] **Testimonials / Mandantenstimmen RAUSNEHMEN** (Startseite).
      Es gibt keine echten; erfundene schaden mehr als sie nutzen. Erst wieder rein,
      wenn echte, verlinkte Stimmen vorliegen (z.B. Trustpilot / HORBACH-Feedbackseite).

- [ ] **Spezialisten-Fotos fixen:** Kinn nicht abschneiden (betrifft Mathias Moews + Jana
      Hoffmann), einheitliche Größe, idealerweise alle freigestellt für einheitlichen Look.
      (Matze wünscht außerdem ein neues Bild — liefert er.)

---

## 🟡 Kleinere Anpassungen (aus dem Call)

- [ ] "KI-haftige" Labels/Badges oben auf der Startseite evtl. entfernen
      (wirken zu sehr nach KI).
- [ ] Hero-Hintergründe teils noch etwas zu dunkel → weiter aufhellen.
- [ ] Netzwerk-Manager oben auf Startseite: Jonathan allein ODER Jonathan + Joachim beide?
      → Justin klärt mit dem Netzwerk.
- [ ] Slider/Durchlauf-Element auf der Startseite: drin lassen oder raus? (offen, Feedback abwarten)

---

## 🟢 Struktur / Funktion (aus dem Call, mittelfristig)

- [ ] **Kontaktformular-Logik:**
      - Hauptseite/allgemein → Anfrage geht an Netzwerk-Manager (Jonathan + Joachim,
        beide E-Mails hinterlegt).
      - Themen-Unterseiten → Anfrage geht DIREKT an den jeweiligen Spezialisten.
      - Unterseiten brauchen EIGENE Themen-Reiter (nicht alle Themen anteasern, nur
        die der Seite). Spezialisten liefern ihre Themen selbst.
- [ ] **E-Mail-Betreff/Inhalt kennzeichnen:** klar erkennbar, dass die Anfrage von der
      Spezialisten-Netzwerk-Seite kommt (Betreff individuell anpassbar).
- [ ] **Supabase** ans Kontaktformular (Leads erfassen) — Backend fehlt noch.
- [ ] Spezialisten liefern per Sprachmemo/Text Input für ihre Unterseiten
      (Rechner, Themen, Inhalte). Justin gibt es an Claude Code weiter.

---

## ⚙️ Technik / Live-Gang (vor echtem Launch)

- [ ] Bilder ins Repo holen (aktuell von spezialisten-netzwerk.com geladen).
- [ ] Rechtstexte: Impressum/Datenschutz/Cookies DSGVO-konform (Finanzdienstleister!).
      Formular verlinkt schon darauf — Seiten müssen existieren.
- [ ] Eigene Domain / Domain-Umzug WordPress(Divi) → Vercel (bewusster Schnitt).
- [ ] Visual-Regression-Tests (Playwright) vor Auto-Merge.
- [ ] Service-Paket definieren: Umfang, Preis, Wartung, Haftung.

---

## Arbeitsweise mit dem Netzwerk (NEU, aus dem Call)
Die Spezialisten schicken Änderungswünsche per **Sprachmemo/WhatsApp/E-Mail** an Justin.
Justin gibt sie an Claude Code → Preview → Freigabe → live. Spezialisten sollen
"groß denken" (lieber zu viel wünschen, Claude baut, dann aussortieren).

---

## Erledigt ✅
- [x] Eleventy-Umbau, Komponenten-System (Includes), GitHub + Vercel Auto-Deploy
- [x] 11 Seiten gebaut, Nav mit Themen-Mega-Menü
- [x] Helles/warmes Design "aus einem Guss", weiche Formen, nur CTA dunkel
- [x] Spezialisten: Jonathan Lohne als Kopf, Ender Gülsen raus, 10 aus dem Orbit
- [x] 6 Themenseiten mit echten Inhalten (außer bAV — siehe oben)
- [x] Unterseiten ans helle Design angeglichen
- [x] Footer-Button kompakter, Themenseiten-Heroes zweispaltig
- [x] Spezialisten-Karten überarbeitet (Name/Rolle sichtbar, Hover-Hervorhebung)
- [x] Kontakt-Kacheln: Netzwerk-Manager statt Platzhalter-Daten
- [x] Netzwerk-Grafik (Berater-Cluster) im Kontakt-Hero

---

## ⚠️ Wichtige Design-Referenz: HORBACH Corporate Design
- Hausschrift: **Assistant** (Fallback Calibri).
- Primärfarben: FreshGreen #b4c800, WarmGrey #827869, Black. Basil #697d0f (dunkles Grün).
- Sekundär (sparsam): Amber #ecbd00, Indigo #006e96, Berry #af005f.
- **BFSG-Kontrast:** weiße Schrift nie auf hellem FreshGreen — nur auf Basil/dunkel.
- Designsprache: "Mosaik des Lebens" = gerundete Quadrate, helle freundliche Bildwelten.
- Logo-Schutzzone beachten, keine Logo-Farbänderungen.
