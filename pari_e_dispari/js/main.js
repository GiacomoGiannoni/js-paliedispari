const buttons=document.querySelectorAll(".box");


let userPosition;
let computerPosition;

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

