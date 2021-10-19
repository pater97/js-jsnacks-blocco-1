//JSNACK 7:
/*
Stampa le potenze di 2 fino a 1000.
*/

/*
//variabile per inserimento 
const stamp = document.querySelector(`body`)
//variabile per la potenza 
const theNumber = 2
//ciclo for


for (let i = 2; i <= 1000; i++){
    let potenza = `<div>${theNumber**i}</div>`
    stamp.innerHTML += potenza
}
*/

//correzione 
let n = 0

while (Math.pow(2,n) < 1000){
    console.log(Math.pow(2,n));
    n++
}