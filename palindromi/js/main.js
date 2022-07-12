const parola = prompt("Inserisci una parola");
let palindroma = isPalindroma(parola);
function isPalindroma(sillabe){ 
    let temp=[];
    for(let i = sillabe.length; i >= 0; i--) {
      temp.push(sillabe[i]);
    }
    for(let i=0;i<parola.length;i++) {
       if(parola[i] != temp[i+1]) {
        alert('NON Palindroma')
        return;
       } else {
        alert('Palindroma')
        return;
       }
    }
}