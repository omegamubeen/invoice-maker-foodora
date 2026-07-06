# Rechnungs-Maker (Invoice Maker)

Eine kleine Web- & Mobile-App (PWA): Werte eintragen → fertiges Rechnungs-PDF herunterladen.
A small web & mobile app (PWA): enter your numbers → download a finished invoice PDF.

## Features

- Vorausgefüllt mit Absender-Daten, Positionen (Base Order Pay, Boni, Trinkgeld) — alles änderbar
- Rechnungsnummer, Datum und Leistungszeitraum werden automatisch für den Vormonat vorgeschlagen
- Live-Summenberechnung im österreichischen Zahlenformat (1.803,10)
- Menge leer lassen = Pauschalbetrag (z. B. Trinkgeld)
- USt-Satz einstellbar; bei 0 % wird automatisch die Kleinunternehmer-Klausel (§ 6 Abs. 1 Z 27 UStG) eingefügt
- Alle Eingaben werden lokal im Browser gespeichert (localStorage) — beim nächsten Mal ist alles noch da
- PDF-Erstellung komplett im Browser (jsPDF) — keine Daten verlassen das Gerät
- Installierbar als App auf dem Handy (PWA), funktioniert nach dem ersten Laden auch offline
- **PDF-Import (⬆ Import):** Eine früher erstellte Rechnung hochladen und alle Felder werden automatisch ausgefüllt — in jedem erzeugten PDF sind die Rechnungsdaten unsichtbar eingebettet, ältere PDFs werden per Texterkennung gelesen

## Nutzung / Usage

### Sofort (ohne Installation)
`index.html` einfach im Browser öffnen (Doppelklick). Fertig.

### Lokaler Server (empfohlen für PWA/Offline)
```bash
cd invoice-maker
python3 -m http.server 8080
# dann http://localhost:8080 öffnen
```

### Am Handy installieren
1. Projekt auf einen HTTPS-Host legen (GitHub Pages, Netlify, Vercel — alles gratis).
2. Seite am Handy öffnen → Browser-Menü → **"Zum Startbildschirm hinzufügen"**.
3. Die App startet dann wie eine normale App und funktioniert offline.

### GitHub Pages (gratis Hosting)
```bash
git remote add origin https://github.com/<dein-user>/invoice-maker.git
git push -u origin main
# Dann auf GitHub: Settings → Pages → Branch: main → Save
```

## Projektstruktur

```
invoice-maker/
├── index.html      # komplette App (UI + Logik + PDF-Erstellung)
├── manifest.json   # PWA-Manifest (App-Name, Icon, Farben)
├── sw.js           # Service Worker (Offline-Cache)
├── icons/
│   └── icon.svg    # App-Icon
└── README.md
```

## Technik

- Reines HTML/CSS/JavaScript — kein Build-Schritt, keine Abhängigkeiten zu installieren
- [jsPDF](https://github.com/parallax/jsPDF) + jspdf-autotable über CDN für die PDF-Erzeugung
- localStorage für Datenspeicherung, Service Worker für Offline-Betrieb
