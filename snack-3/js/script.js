/*
- Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
 */

//Creo il mio array
const listNumbers = [1,2,3,4,5,6,7,8,9,10];
//Seleziono i due div del dom
const numbersRed = document.querySelector("#red");
const numbersGreen = document.querySelector("#green");
//Controllo quali sono i pari e i dispari e li stampo di conseguenza
for(let i = 0; i < listNumbers.length; i++){
    let numbers  = listNumbers[i];
    if(numbers % 2 !== 0) {
    numbersRed.append(numbers);
    } else {
        numbersGreen.append(numbers);
    }
}

