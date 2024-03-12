/*
BONUS:
- Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
 */

//Chiedo un numero di 4 cifre all'utente 
const userNumber = (prompt("Inserisci un numero di 4 cifre"));
let sum = 0;
//trasformo la stringa in numero e scorro le sue cifre
for (let i = 0; i < userNumber.length; i++) {
    sum += parseInt(userNumber[i]);
} 
alert("la somma delle cifre del tuo numero è " + sum)