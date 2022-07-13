/*
const buttons = document.querySelectorAll(".box");
const userTextBox= document.getElementById("user-text");
const endText = document.getElementById("end-text");
let userPosition;
let computerPosition;
let userNumber;
let computerNumber;
let sum = 0;
for(let element of buttons) {
    element.addEventListener("click",function(){    
        if(element.id == "pari") {
            userPosition = "pari";
            computerPosition = "dispari";
        }else {
            userPosition = "dispari";
            computerPosition = "pari";
        }
        enterNumber();
    })
}
function enterNumber() {
    userNumber=parseInt(prompt("Inserisci un numero da 1 a 5"));
    while(userNumber<1 || userNumber>5){
        userNumber=parseInt(prompt("Inserisci un numero da 1 a 5"));
    }
    userTextBox.textContent = userNumber;
    computerNumberGenerator();
}
function computerNumberGenerator() {
    computerNumber = Math.floor(Math.random() * 5)+1;
    userTextBox.innerHTML += " Vs "+computerNumber;
    whoIsTheWinner();
}
function whoIsTheWinner() {
    sum = userNumber + computerNumber;
    endText.textContent = `il totale è ${sum}`;
    console.log(sum);
    if(sum%2 == 0 && userPosition == "pari") {
        endText.innerHTML += ` VINCE IL GIOCATORE`;
    }else if(sum%2 != 0 && userPosition == "dispari") {
        endText.innerHTML += ` VINCE IL GIOCATORE`;
    }else{
        endText.innerHTML += ` VINCE IL COMPUTER`;
    }
}*/

//correzione
const sceltaPariDispari = prompt('scegli p o d');
const numeroScelta = parseInt(prompt('inserisci un numbero compreso tra 1 e 5'));

const numeroComputer = getRandomNumber(1,5);
const sommaNumeri = numeroComputer + numeroScelta;
const risultatoPariODispari = checkPariDispari(sommaNumeri);
console.log(numeroComputer);

if (sceltaPariDispari == risultatoPariODispari) {
    alert('Hai vinto!');
} else {
    alert('Ha vinto il computer!');
}

function checkPariDispari (numero) {
    if (numero % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

function getRandomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}