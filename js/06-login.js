// Traccia 06 · Il login
// La consegna è nel README, alla voce "06 · Il login".

/*
  STEPS
  1 - chiedi username e password (con due prompt)
  2 - username = admin e password = 1234 ( controlla se entrambe sono corrette)
  3 - se entrambe sono giuste mostri un alert con 'Login effettuato'
  4 - altrimenti 'Credenziali errate'
*/

// # Fase di preparazione
const username = 'admin';
const password = '1234';


// # Fase di raccolta dati
const inserisciUsername = prompt('Inserisci username');
const inserisciPassword = prompt('Inserisci password');


// # Fase di elaborazione
if (inserisciUsername === username && inserisciPassword === password) {
  alert('Login effettuato');
}
else {
  alert('Credenziali errate');
}


// # Fase di output

