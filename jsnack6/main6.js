//JSNACK 6:
/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

/*
//variabile per inserimento 
const stamp = document.querySelector(`body`)
//prompt
const chosenNumber = parseInt(prompt(`scegli un numero`))
//ciclo for 
for ( let i = 0;i <= chosenNumber;i++){
    let cubo = `<div>${i*i*i}</div>`
    stamp.innerHTML += cubo
}
*/

//correzione 
//variabile per inserimento 
const stamp = document.querySelector(`body`)
//prompt
const chosenNumber = parseInt(prompt(`scegli un numero`))
//ciclo for 
for ( let i = 1;i <= chosenNumber;i++){
    let cubo = Math.pow(i,3)
    let stampa = `<div>${cubo}</div>`
    stamp.innerHTML += stampa
}