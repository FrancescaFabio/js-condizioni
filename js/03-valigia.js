// Traccia 03 · La valigia
// La consegna è nel README, alla voce "03 · La valigia".

/*
  STEPS
  1 - il biglietto costa 36€ e il limite di peso gratuito per la valigia è di 23kg
  2 - chiedi all'utente quanto pesa la sua valigia
  3 - se la valigia supera i 23kg, aumenta il prezzo di 20€
  4 - stampa in console il prezzo finale
*/

// # Fase di preparazione
let prezzoBiglietto = 36;
const pesoValigiaGratis = 23;
const prezzoAumento = 20;

// # Fase di raccolta dati
const pesoValigiaUtente = parseInt(prompt('Quanto pesa la tua valigia ?'));


// # Fase di elaborazione
if (pesoValigiaUtente > 23) {
  prezzoBiglietto = prezzoBiglietto + 20;
}


// # Fase di output

console.log(`Prezzo del biglietto: ${prezzoBiglietto} € `);