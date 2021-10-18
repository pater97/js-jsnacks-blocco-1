//JSNAK 9:
/*
Calcola la somma e la media dei primi 10 numeri.
*/
//N.B:NON AVENDO CAPITO DALLA CONSEGNA DA DOVE DEVO ESTRAPOLARE QUESTI NUMERI, ripeterò jsnack 8,ma con 10 numeri.

//prompt
const number = parseInt(prompt(`scrivi un numero di 10 cifre`))
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
const sum = output[0]+output[1]+output[2]+output[3]+output[4]+output[5]+output[6]+output[7]+output[8]+output[9]
console.log(sum);
//calcolo della media
const avg = sum / output.length;
console.log(avg);