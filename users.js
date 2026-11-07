/* ================= Benutzer / Users =================
   Hier die Benutzer eintragen (einer pro Zeile).
   Passwörter stehen NICHT im Klartext hier, sondern als SHA-256-Hash von
       foodora-invoice:<benutzername>:<passwort>
   (Benutzername kleingeschrieben). Hash erzeugen, z. B. im Terminal:
       printf '%s' 'foodora-invoice:mubeen@foodora.com:MeinPasswort' | sha256sum

   ACHTUNG: Das ist nur eine Zugangssperre im Browser (die Seite ist statisch auf GitHub Pages).
   Wer den Quelltext liest, sieht die Hashes — nutze lange Passwörter und gib hier nichts Geheimes hinein.
*/

/* Leere Vorausfüllung: jeder Benutzer trägt seine Daten (Name, Adresse, Telefon, Bank, Firma …)
   beim ersten Login selbst ein; sie werden nur in seinem Browser-Profil gespeichert. */
const BLANK_DEFAULTS = {
  sName:"", sStreet:"", sCity:"", sGisa:"", sPhone:"",
  rName:"", rAddr:"",
  bOwner:"", bIban:"", bBic:"", bRef:"",
  items:[
    {d:"Zustellungen / Base Order Pay (inkl. Weighted)", q:"0", p:"5,70"},
    {d:"Shifts Done Bonus", q:"0", p:"0,00"},
    {d:"KT20 Bonus", q:"0", p:"0,00"},
    {d:"Kunden-Trinkgeld (App Tips)", q:"", p:"0,00"}
  ]
};

window.USERS = [
  { username:"mubeen@foodora.com", name:"Mubeen", hash:"fffd4574df59192163ee4b14dc960ae2cf438d2997ab92a464648858aa15a276", defaults:BLANK_DEFAULTS },
  { username:"hamza@foodora.com",  name:"Hamza",  hash:"c6c0acbda98c6325933e0f9345e186fd4ea56251b8c12c3648c1df86e8b5afd9", defaults:BLANK_DEFAULTS }
];
