/*const parola = prompt("Inserisci una parola");
let palindroma = isPalindroma(parola);
function isPalindroma(sillabe){ 
    let temp=[];
    for(let i = sillabe.length; i >= 0; i--) {
      temp.push(sillabe[i]);
    }
    for(let i = 0; i < parola.length ; i++) {
       if(parola[i] != temp[i+1]) {
        alert('NON Palindroma')
       } else {
        alert('Palindroma')
       }
       return;
    }
}
*/


//correzione

const parola = prompt('inserisci la parola che vuoi testare');
const parolaGirata = giraParola(parola);
if (parola == parolaGirata) {
  alert('Palindroma');
} else {
  alert('NON Palindroma');
}

function giraParola(pippo) {
  let parolaGirata = '';
  for (let 1 = pippo.lenght - 1; i>= 0; i--) {
    parolaGirata += pippo[1];
  }
  return parolaGirata;
}