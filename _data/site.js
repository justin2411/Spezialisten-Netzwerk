// Zentrale Inhaltsdaten: Themen + Team. Genutzt von Nav, Footer, Startseite und Themen-Querverweisen.
// Bilder liegen im Repo unter /assets/img (nicht mehr von spezialisten-netzwerk.com geladen).
const icons = {
  immobilie: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  bav: '<path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3z"/><path d="m9 12 2 2 4-4"/>',
  ruhestand: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  investment: '<polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/>',
  kranken: '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1z"/>',
  analyse: '<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="5"/><line x1="18" y1="20" x2="18" y2="14"/>',
  finanzierung: '<rect x="2" y="5" width="20" height="14" rx="3"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="6" y1="15" x2="10" y2="15"/>',
  heilwesen: '<polyline points="3 12 8 12 11 5 14 19 16 12 21 12"/>',
  optiplan: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  netzwerk: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M12 7.5v4M10.5 13 6.6 16M13.5 13l3.9 3"/><circle cx="12" cy="12.5" r="1.2"/>'
};

const team = {
  lohne: { name: 'Jonathan Lohne', role: 'Netzwerk Manager', img: '/assets/img/team/jonathan-lohne.webp' },
  hoffmann: { name: 'Jana Hoffmann', role: 'Spezialistin Finanzierung', img: '/assets/img/team/jana-hoffmann.webp' },
  moews: { name: 'Mathias Moews', role: 'Dipl.-Betriebswirt | Finanzierungen', img: '/assets/img/team/mathias-moews.webp', pos: '48% 30%' },
  buck: { name: 'Dr. Michael Buck', role: 'Kranken- & Pflegeversicherung', img: '/assets/img/team/michael-buck.webp' },
  hendelkes: { name: 'Joachim Hendelkes', role: 'Dipl.-Kfm. | Finanzanalysen', img: '/assets/img/team/joachim-hendelkes.webp' },
  schneider: { name: 'Christian H. Schneider', role: 'Dipl.-Kfm. | Kapitalanlage Immobilien', img: '/assets/img/team/christian-schneider.webp' },
  scholl: { name: 'Dorian Scholl', role: 'Financial Planner | Investment & AIF', img: '/assets/img/team/dorian-scholl.webp' },
  casanova: { name: 'Sigrid Casanova', role: 'M.A. | Unternehmensberatung Heilwesen', img: '/assets/img/team/sigrid-casanova.webp' },
  arndt: { name: 'Ronni Arndt', role: 'Dipl.-Volkswirt | bAV / DMA', img: '/assets/img/team/ronni-arndt.webp' },
  domes: { name: 'Steffen Domes', role: 'Experte bAV / DMA', img: '/assets/img/team/steffen-domes.webp' }
};

const themen = [
  { key: 'immobilie', title: 'Kapitalanlage Immobilie', short: 'Immobilien', url: '/kapitalanlage-immobilie', icon: icons.immobilie, people: ['schneider'], teaser: 'Ihr nachhaltiger Vermögensmultiplikator: Inflationsschutz, Steuervorteile, Vermögensübertragung.' },
  { key: 'bav', title: 'Betriebliche Versorgung', short: 'Betr. Versorgung', url: '/betriebliche-versorgung', icon: icons.bav, people: ['arndt', 'domes'], teaser: 'Versorgung über den Betrieb: für Unternehmen und ihre Mitarbeitenden.' },
  { key: 'ruhestand', title: 'Ruhestandsplanung', short: 'Ruhestand', url: '/ruhestandsplanung', icon: icons.ruhestand, people: ['lohne'], teaser: 'Vernetzt, neutral und transparent: Ihre Vermögensentwicklung im Blick.' },
  { key: 'investment', title: 'Investment & AIF', short: 'Investment & AIF', url: '/investment-aif', icon: icons.investment, people: ['scholl'], teaser: 'Investmentanlagen für Vermögensaufbau, -erhalt und -übertragung.' },
  { key: 'kranken', title: 'Kranken & Pflege', short: 'Kranken & Pflege', url: '/kranken-pflege', icon: icons.kranken, people: ['buck'], teaser: 'Die bestmögliche Absicherung im Krankheitsfall, unabhängig beraten.' },
  { key: 'analyse', title: 'Finanzanalysen', short: 'Finanzanalysen', url: '/finanzanalysen', icon: icons.analyse, people: ['hendelkes'], teaser: 'Transparenz, Sicherheit und Effizienz für Ihre Entscheidungen.' },
  { key: 'finanzierung', title: 'Finanzierung', short: 'Finanzierung', url: '/finanzierung', icon: icons.finanzierung, people: ['hoffmann', 'moews'], teaser: 'Ein fester Ansprechpartner und Zugriff auf rund 600 Finanzierungspartner.' },
  { key: 'heilwesen', title: 'Heilwesenberufe', short: 'Heilwesen', url: '/heilwesenberufe', icon: icons.heilwesen, people: ['casanova'], teaser: 'Wirtschaftliche Begleitung von der Praxisgründung bis zur Praxisabgabe.' }
];

module.exports = { icons, team, themen, phoneHref: '/kontakt' };
