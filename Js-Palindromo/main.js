/*ESERCIZIO 1
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita 
è palindroma */

//creo una funzione palindroma 

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




