// Traccia 10 · Il bancomat
// La consegna è nel README, alla voce "10 · Il bancomat".

/*
  STEPS
  1 - chiedi il saldo del conto e quanto vuoi prelevare
  2 - Prima controlla che l'importo sia maggiore di 0:
  se non lo è, il messaggio è `Importo non valido`
  3 - Se l'importo è valido e il saldo basta,
  il messaggio è `Prelievo effettuato. Nuovo saldo: 300 €`
  4 - se il saldo non basta, `Saldo insufficiente`
  5- Mostra il messaggio con `alert`
*/

// # Fase di preparazione


// # Fase di raccolta dati
const saldoConto = parseInt(prompt("Quanto è il tuo saldo nel tuo conto?"));
const totalePrelievo = parseInt(prompt("Quanto vuoi prelevare?"));


// # Fase di elaborazione

if (totalePrelievo > 0) {

  if (saldoConto >= totalePrelievo) {
    const nuovoSaldo = saldoConto - totalePrelievo;
    alert(`Prelievo effettuato. Nuovo saldo: ${nuovoSaldo} €`);
  } else {
    alert("Saldo insufficiente");
  }
} else {

  alert("Importo non valido");
}


