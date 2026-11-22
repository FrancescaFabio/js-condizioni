// Traccia 04 · Testa o croce
// La consegna è nel README, alla voce "04 · Testa o croce".

/*
  STEPS
  1 - Generare un numero casuale tra 0 e 1
  2 - se il numero è minore di 0.5 il risultato è testa
  3 - altrimenti il risultato è croce
  4 - mostra testa o croce con un alert
  5- stampa in console il numero casuale pescato
*/

// # Fase di preparazione
let risultato;

// # Fase di raccolta dati
const numeroCasuale =
  Math.random();

// # Fase di elaborazione
if (numeroCasuale < 0.5) {
  risultato = "Testa";
}
else {
  risultato = "Croce";
}

// # Fase di output
alert(risultato);

console.log(numeroCasuale);
