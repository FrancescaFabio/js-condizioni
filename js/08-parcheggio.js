// Traccia 08 · Il parcheggio
// La consegna è nel README, alla voce "08 · Il parcheggio".

/*
  STEPS
  1 - il parcheggio costa 5 € fino a 2 ore,
   10 € fino a 5 ore,
    15 € oltre le 5 ore
  2 - chiedi quante ore resta l'auto e stampa in console 'Da pagare 10€'
  3 - se l'utente non scrive un numero o scrive un numero minore di 1, 
  stampa 'scrivi il numero di ore'
  4 -
*/

// # Fase di preparazione
const finoADueOre = 5;
const finoACinqueOre = 10;
const oltreCinqueOre = 15;

// # Fase di raccolta dati
const inserisciOreParcheggio = parseInt(prompt('Quante ore resta la macchina nel parcheggio?'))

// # Fase di elaborazione
if (isNaN(inserisciOreParcheggio) || (inserisciOreParcheggio < 1)) {
  console.log('Scrivi il numero di ore');
}

else if (inserisciOreParcheggio <= 2) {
  console.log('Da pagare: 5€');
}
else if (inserisciOreParcheggio <= 5) {
  console.log('Da pagare: 10€');
}
else {
  console.log('Da pagare: 15€');
}
// # Fase di output

