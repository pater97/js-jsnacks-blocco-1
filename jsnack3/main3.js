//JSNACK 3: 
/*
Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
*/

//prompt
const nOne = parseInt(prompt(`scrivi un numero`))
const nTwo = parseInt(prompt(`scrivi un numero`))
const nTrhee = parseInt(prompt(`scrivi un numero`))
const nFour = parseInt(prompt(`scrivi un numero`))
const nFive = parseInt(prompt(`scrivi un numero`))
const nSix = parseInt(prompt(`scrivi un numero`))
const nSeven = parseInt(prompt(`scrivi un numero`))
const nEight = parseInt(prompt(`scrivi un numero`))
const nNine = parseInt(prompt(`scrivi un numero`))
const nTen = parseInt(prompt(`scrivi un numero`))
//variabile per inserimento 
const stamp = document.querySelector("body")
//somma 
const somma = nOne+nTwo+nTrhee+nFour+nFive+nSix+nSeven+nEight+nNine+nTen
//test
console.log(somma);
//inserimento
stamp.innerHTML = `<div>${somma}</div>`