
console.log("affichage de la table: " + document.getElementsByTagName("table")[0]);
console.log("affichage du contenu de la case 1: " + document.getElementById("case1"));

let tableMorpion=document.getElementsByTagName("table")[0];

let case1=document.getElementById("case1");
case1.innerHTML="X";

let case2= document.getElementById("case2");
case2.innerHTML="O";

let case3=document.getElementById("case3");
case3.innerHTML="X";

let case4= document.getElementById("case4");
case4.innerHTML="O";

let case5=document.getElementById("case5");
case5.innerHTML="X";

let case6= document.getElementById("case6");
case6.innerHTML="O";

let case7=document.getElementById("case7");
case7.innerHTML="X";

let case8= document.getElementById("case8");
case8.innerHTML="O";

let case9=document.getElementById("case9");
case9.innerHTML="X";

let nombreDeClic=0;
let play ='X'


function QuandOnClique(){
    console.log("j'ai cliqué")
    console.log(EventTarget)
    nombreDeClic++
    if((nombreDeClic % 2) == 0){
        play = 'X';
    } else {
        play = '0';
    }
}



case1.addEventListener("click", quandOnClique);

let nombreDeClic=0;
let play = "O";

function quandOnClique(){
    console.log("clique");
    console.log (EventTarget);
    nombreDeClic++
    if((nombreDeClic % 2) == 0);{
    play = 'O';
    }else {
    play = '0';
}


let nombreDeClic=0;
let play = "X";

function quandOnClique(){
    console.log("J'ai cliqué");
    console.log (EventTarget);
    nombreDeClic++
    if((nombreDeClic % 2) == 0){
        play = 'X';
    } else {
        play = '0';
    }
}


caseMorpion1.addEventListener("click", quandOnClique);
caseMorpion2.addEventListener("click", quandOnClique);
caseMorpion3.addEventListener("click", quandOnClique);
caseMorpion4.addEventListener("click", quandOnClique);
caseMorpion5.addEventListener("click", quandOnClique);
caseMorpion6.addEventListener("click", quandOnClique);
caseMorpion7.addEventListener("click", quandOnClique);
caseMorpion8.addEventListener("click", quandOnClique);
caseMorpion9.addEventListener("click", quandOnClique);

function verifierVainqueur(){
    // if() {}
if( (caseMorpion1.innerText.length != 0) (caseMorpion2.innerText.length != 0) (caseMorpion3.innerText.length != 0)) {
    let result = caseMorpion1 + caseMorpion2 + caseMorpion3;
    if (result.toString() === "XXX") {
        partieWin = true;
        messMorpion("XXX a gagner");
    }
}
if (result.toString() === "OOO") {
    partieWin = true;
    messMorpion("OOO a gagner");
}


if( (caseMorpion4.innerText.length != 0) (caseMorpion5.innerText.length != 0) (caseMorpion6.innerText.length !=0)) {
    let result = caseMorpion4 + caseMorpion5 + caseMorpion6;
    if (result.toString() === "OOO") {
        partieWin = true;
        messMorpion("OOO a gagner");
    }
}
if((caseMorpion7.innerText.length !=0) (caseMorpion8.innerText.length !=0) (caseMorpion9.innerText.length !=0)){
}
}







 







