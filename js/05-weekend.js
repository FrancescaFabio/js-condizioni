// Traccia 05 · Che giorno è?
// La consegna è nel README, alla voce "05 · Che giorno è?".

/*
  STEPS
  1 - Chiedi all'utente che giorno è della settimana
  2 - se risponde sabato oppure domenica, mostriamo un alert 'Buon weekend!' 
  3 - altrimenti mostriamo ' Buon lavoro' 
  4 -
*/

// # Fase di preparazione



// # Fase di raccolta dati
const giornoSettimana = prompt('Che giorno è della settimana?');

// # Fase di elaborazione
if (giornoSettimana === 'sabato' || giornoSettimana === 'domenica') {
  alert('Buon weekend!');
} else {
  alert('Buon lavoro');
}



// # Fase di output

