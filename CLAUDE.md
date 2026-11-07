# Rules for this repo

- **The generated invoice PDF is fixed.** Never change, add, remove or reword any title or text that `makePdf()` in `index.html` writes
  (the Rider-ID was removed on the owner's request; RECHNUNG, EMPFÄNGER, LEISTUNGSBESCHREIBUNG, table headers, totals labels, BANKVERBINDUNG, legal note, …). Only the user's own data goes into those slots.
- Import parsers (`parseInvoiceLines`, `parseFoodoraLines`) rely on those exact PDF texts — if the PDF ever changes, they break.
- Users live in `users.js` (SHA-256 hashes); data is stored per user in the browser.
- Each user may only create invoices for himself: the sender name must contain his `ownName` from `users.js` (enforced on PDF creation, old-invoice import and Foodora autofill).
