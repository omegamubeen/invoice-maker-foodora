/* ================= Benutzer / Users =================
   Hier die Benutzer eintragen (einer pro Zeile).
   Passwörter stehen NICHT im Klartext hier, sondern als SHA-256-Hash von
       foodora-invoice:<benutzername>:<passwort>
   (Benutzername kleingeschrieben). Hash erzeugen, z. B. im Terminal:
       printf '%s' 'foodora-invoice:mubeen:MeinPasswort' | sha256sum
   Optional: "defaults" überschreibt die Vorausfüllung (Absender, Bank …) für diesen Benutzer.

   ACHTUNG: Das ist nur eine Zugangssperre im Browser (die Seite ist statisch auf GitHub Pages).
   Wer den Quelltext liest, sieht die Hashes — nutze lange Passwörter und gib hier nichts Geheimes hinein.
*/
window.USERS = [
  {
    username: "demo",
    name: "Demo",
    // Passwort: demo1234  → bitte ersetzen!
    hash: "051f74d57f23453c5d90fa7abeca0043e74869db0ce3d46d1025a84c893f6081"
    // defaults: { sName: "Max Mustermann", bIban: "AT00 0000 0000 0000 0000" }
  }
];
