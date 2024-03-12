/*
- L'utente inserisce un numero nel prompt, se è pari stampa il numero,
se è dispari stampa il numero successivo
 */

//Chiedo all'utente di inserire un numero
const userNumber = parseInt(prompt("Inserisci un numero!"));
//Controllo se il numero inserito sia pari e stampo il risultato corrispettivo alla consegna
if (userNumber % 2 === 0){
    alert(userNumber);
} else {
    alert(userNumber + 1);
}
