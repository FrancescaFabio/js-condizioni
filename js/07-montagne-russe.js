// Traccia 07 · Le montagne russe
// La consegna è nel README, alla voce "07 · Le montagne russe".

/*
  STEPS
  1 - requisiti per salire sulle montagne russe:
  almeno 14 anni
  almeno 140 cm di altezza
  2 - chiedi l'altezza in cm e l'età
  3 -mostra con alert 'puoi salire!' oppure 'mi dispiace, non puoi salire'
  4 - se uno dei due dati non è un numero 'Dati non validi'
*/

// # Fase di preparazione
const etaMinima = 14;
const altezzaMinima = 140;

// # Fase di raccolta dati
const inserisciEta = parseInt(prompt('Quanti anni hai?'));
const inserisciAltezza = parseInt(prompt('Quanto sei alto in cm?'));

// # Fase di elaborazione
if (isNaN(inserisciEta) || isNaN(inserisciAltezza)) {
  alert('Dati non validi');
}
else if (inserisciEta >= 14 && inserisciAltezza >= 140) {
  alert('Puoi salire!');
}
else {
  alert('Mi dispiace, non puoi salire');
}
// # Fase di output

