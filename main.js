/*ESERCIZIO 1
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita 
è palindroma 

creo una funzione palindroma 

function palindrome (word) { //nome funzione si puo mettere quello che si vuole, è una variabile che conterrà il parametro che gli passiamo quando evochiamo la funzione

    //dichiaro ritorno come variabile da ritornare all'uscita della funzione (un possibile approccio)
    let ritorno;

    //trasformo la stringa in un array con split, con reverse iverto l'array, e con join la ritrasformo in un array
    let secondWord  = word.toLowerCase().split("").reverse().join("");

    //verifica della palindromità
    if (word == secondWord) {
        ritorno = "La parola inserita è palindroma";
    } else {
        ritorno = "La parola inserita non è palindroma";
    }

    //ritorno variabile in uscita
    return ritorno;
    
}
//chiedo all'utente di inserire una parola tramite prompt
let userWord = prompt("Inserisci una parola e verificheremo se è palindroma oppure no.");

//dichiaro una variabile "verifica" che contiene il risultato della funzione, a cui verrà passato la parola dell'utente "userWord"
let verifica = palindrome(userWord);
console.log(verifica);

*/





//ESERCIZIO 2

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto. */



//chiedo all'utente se pari o dispari
let userChoice = prompt("Scegli pari o dispari").toLowerCase();


let isOdd= true;

let badChoice = true;
while(badChoice) {
    if (userChoice == "pari" || userChoice == "dispari") {
        badChoice = false; 
    } else {
        console.log("Scrivi pari o dispari");
        userChoice = prompt("Scegli pari o dispari").toLowerCase();
    }
}

if (userChoice == "pari") {
isOdd = false;
}

//chiedo all'utente il numero da 1 a 5

let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5."));
console.log(userNumber);

let notNumber = true;
while(notNumber) {
if ( isNaN(userNumber) || userNumber > 5 || userNumber < 1) {
    console.log("Non hai inserito un numero nel range");
    userNumber = parseInt(prompt("Inserisci un numero da 1 a 5."));
} else {
    notNumber = false;
}
}

//Generiamo il numero casuale del computer
let computerNumber = getRandomInt(1,5);


//somma dei due numeri
let sum = userNumber + computerNumber;
alert(`La somma di ${userNumber} e ${computerNumber} è ${sum}`);

let result = evenOdd(sum);

if (result == 0 && userChoice == "pari") {
    console.log("La somma è PARI e il giocatore ha vinto")
} else if (result != 0 && userChoice == "dispari") {
    console.log("La somma è DISPARI e il giocatore ha vinto");
} else {
    console.log("Il giocatore ha perso");
}
    

//funzione che ritorna 0 se pari
function evenOdd (sum) {
    let ritorno = sum % 2;
    return ritorno;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

