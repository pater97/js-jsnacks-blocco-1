//JSNACK 5:
/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

/*
//crazione dell'array 
const numeri = [];
//prompt
const nOne = parseInt(prompt(`scrivi un numero`))
const nTwo = parseInt(prompt(`scrivi un numero`))
const nTrhee = parseInt(prompt(`scrivi un numero`))
const nFour = parseInt(prompt(`scrivi un numero`))
const nFive = parseInt(prompt(`scrivi un numero`))
const nSix = parseInt(prompt(`scrivi un numero`))
//insrimenti con condizionali
if (nOne % 2 == 1) {
   numeri.push(nOne)
}
if (nTwo % 2 == 1) {
    numeri.push(nTwo)
}
if (nTrhee % 2 == 1) {
    numeri.push(nTrhee)
}
if (nFour % 2 == 1) {
    numeri.push(nFour)
}
if (nFive % 2 == 1) {
    numeri.push(nFive)
}
if (nSix % 2 == 1) {
    numeri.push(nSix)
}

console.log(nOne,nTwo,nTrhee,nFour,nFive,nSix);
console.log(numeri);
*/

//correzione
const odd_numbers = []

for (let i = 0; i < 6; i++){
    const user_number = parseInt(prompt(`scegli un numero`))

    if(user_number % 2 != 0) {
        odd_numbers.push(user_number)
    }
}

console.log(odd_numbers);