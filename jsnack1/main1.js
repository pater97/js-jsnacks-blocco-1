//JSNACK 1:
/*
 l'utente inserisce due numeri in successione, con due prompt. il software stampa il maggiore
*/

//prompt
const nOne = parseInt(prompt(`inserisci un numero!`))
const nTwo = parseInt(prompt(`inserisci un'altro numero!`))
//log test
console.log(nOne,nTwo);
//selezionare attraverso una variabile dove verrà stampato il numero
const stamp = document.querySelector("h1")
//inserimento del numero maggiore con condizionale 
if(nOne>nTwo){
    stamp.innerHTML = nOne
} else {
    stamp.innerHTML = nTwo
}