/*
- L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

 */

//Chiedo all'utente di inserire 2 parole 
const firstWord =prompt("inserisci la prima parola");
const secondWord =prompt("inserisci la seconda parola");
//Controllo quale parola è più lunga
if (firstWord.length < secondWord.length) {
    alert(firstWord + " " + secondWord);
} else {
    alert(secondWord + " " + firstWord);
}
