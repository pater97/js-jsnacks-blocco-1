//JSNACK 4:
/*
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/

//crazione dell'arrey 
const guestList = [`marco`,`tiziano`,`fabio`,`fabiola`,`giuseppe`,`stefano`,`andrea`,`gaia`,`greta`,`chiara`]
//prompt
const guestName = prompt(`qual'è il tuo nome `)
//variabile sentinella + variabile di inserimento
let sentinella = false
const stamp = document.querySelector("body")
//ciclo for 
for (let i = 0 ; i < guestList.length; i++){
    console.log(guestList[i]);
    if(guestList[i] == guestName)
    sentinella = true
}
//test
console.log(sentinella);
//stampare il messaggio in base alla condizione
if (sentinella == true){
    stamp.innerHTML = `<div>Complimenti, puoi entrare alla festa!</div>`
} else {
    stamp.innerHTML = `<div>mi dispiace, non puoi entrare alla festa...</div>`
}