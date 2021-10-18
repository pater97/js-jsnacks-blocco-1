//JSNACK 2:
/*
l'utente inserisce due parole in successione , con due prompt , Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//prompt:
const wordOne = prompt(`scrivi una parola`)
const wordTwo = prompt(`scrivi un altra parola`)
//definire variabile per l'inserimento 
const stamp = document.querySelector(".stamp")
//test
console.log(wordOne,wordTwo,stamp);
//stampare attraverso condizionale, lenght e innerhtml
if(wordOne.length<wordTwo.length){
    stamp.innerHTML = `
    <div>${wordOne} <br>
    ${wordTwo}</div>
    `
} else{
    stamp.innerHTML = `
    <div>${wordTwo} <br>
    ${wordOne}</div>
    `
}