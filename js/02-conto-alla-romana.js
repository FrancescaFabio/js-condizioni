// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
  1 - Chiedere il totale del conto e il numero di persone al tavolo
  2 - aggiungere 10 € al totale
  3 - dividere il totale per le persone presenti al tavolo
  4 - mostrare con un alert la cifra sigola a persona, con le cifre decimali
*/

// # Fase di preparazione
const manciaTotale = 10;

// # Fase di raccolta dati
const totaleConto = parseInt(prompt('Quanto avete speso in totale ?'));
const totalePersone = parseInt(prompt('Quante persone siete a dividere il conto ?'));


// # Fase di elaborazione
const totaleAPersona = (totaleConto + manciaTotale) / (totalePersone);

// # Fase di output

alert(`A testa: ${totaleAPersona.toFixed(2)} €`);