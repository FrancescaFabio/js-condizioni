// Traccia 09 · Come mi vesto?
// La consegna è nel README, alla voce "09 · Come mi vesto?".

/*
  STEPS
  1 - chiedi la temperatura esterna
  2 - Se non è un numero,  il messaggio è `Scrivi la temperatura`

  3 - Se è sotto i 15 °C, chiedi anche se piove (si risponde `si` o `no`, senza accento):
  se piove il messaggio è `Metti l'impermeabile`,
  altrimenti `Metti la giacca`
  4 - Da 15 °C in su il messaggio è `Vai leggero`,
   e la domanda sulla pioggia **non** compare.
*/
// # Fase di preparazione

// # Fase di raccolta dati
const temperaturaEsterna = parseInt(prompt("Quanti gradi fanno fuori?"));


// # Fase di elaborazione
if (isNaN(temperaturaEsterna)) {
  alert("Scrivi la temperatura")
}
else if (temperaturaEsterna < 15) {
  const piove = prompt("Piove?");
  if (piove === "si") {
    alert("Metti l'impermeabile");
  } else {
    alert("Metti la giacca");
  }
}

else {
  alert("Vai leggero");
}

// # Fase di output

