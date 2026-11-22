// Traccia 01 · Il badge
// La consegna è nel README, alla voce "01 · Il badge".

/*
  STEPS
  1 - Salvare nome, età e lavoro
  2 - Stampare la frase usando la concatenazione (+)
  3 - Stampare la stessa frase usando il template literal
  4 - Calcolare l'età fra 10 anni e stampare il risultato
*/

// # Fase di preparazione


// # Fase di raccolta dati
const nomeUtente = 'Ada';
const etaUtente = 36;
const lavoroUtente = 'la Sviluppatrice';

// # Fase di elaborazione
const etaFutura = etaUtente + 10;


// # Fase di output
console.log('Mi chiamo ' + nomeUtente + ', ho ' + etaUtente + ' anni e faccio ' + lavoroUtente);


console.log(`Mi chiamo ${nomeUtente}, ho ${etaUtente} anni e faccio ${lavoroUtente}`);


console.log('Fra 10 anni avrò ' + etaFutura + ' anni');