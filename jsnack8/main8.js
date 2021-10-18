
//JSNACK 8:
/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

//prompt
const number = parseInt(prompt(`scrivi un numero di 4 cifre`))
//array vuota 
const output = []
//trasformazione in stringa 
const numberSplit = number.toString()
let len = numberSplit.length;
//ciclo for
for ( let i = 0; i < len; i++){
    output.push(+numberSplit.charAt(i));
}
//verifica che i numeri siano all'interno dell'array
console.log(output);
//somma dei numeri all'interno dell'array
const sum = output[0]+output[1]+output[2]+output[3]
console.log(sum);

