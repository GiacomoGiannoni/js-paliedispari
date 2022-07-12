const buttons=document.querySelectorAll(".box");

const userTextBox=document.getElementById("user-text");
const endText=document.getElementById("end-text");

let userPosition;
let computerPosition;

let userNumber;
let computerNumber;
let sum=0;

for(let element of buttons){
    element.addEventListener("click",function(){    
        if(element.id=="pari"){
            userPosition="pari";
            computerPosition="dispari";
        }else{
            userPosition="dispari";
            computerPosition="pari";
        }
        enterNumber();
    })
}

function enterNumber(){
    userNumber=parseInt(prompt("Inserisci un numero da 1 a 5"));
    while(userNumber<1 || userNumber>5){
        userNumber=parseInt(prompt("Inserisci un numero da 1 a 5"));
    }
    userTextBox.textContent=userNumber;
    console.log(`il giocatore ha scelto ${userPosition} e il numero inserito è ${userNumber}`);
    computerNumberGenerator();
}

function computerNumberGenerator(){
    computerNumber = Math.floor(Math.random() * 5)+1;
    userTextBox.innerHTML+=" ---- "+computerNumber;
    console.log(`il computer invece è ${computerPosition}, ha scelto ${computerNumber}`);
    whoIsTheWinner();
}

function whoIsTheWinner(){
    sum=userNumber+computerNumber;
    endText.textContent=`il totale è ${sum}`;
    console.log(sum);
    if(sum%2==0 && userPosition=="pari"){
        endText.innerHTML+=` VINCE IL GIOCATORE`;
    }else if(sum%2!=0 && userPosition=="dispari"){
        endText.innerHTML+=` VINCE IL GIOCATORE`;
    }else{
        endText.innerHTML+=` VINCE IL COMPUTER`;
    }
}

