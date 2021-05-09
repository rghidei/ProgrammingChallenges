/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


// function vowelsCounter(text) {
//     // Code goes here
// let text = text.toLowerCase().split('')
// let counter = 0
//
// for(let i = 0; i < text.length; i++){
//     if(text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u'){
//         counter++
//     }
// }
// return counter
// }
//FASTER WAY MORE ALGORTHIC WAY
// function vowelsCounter(text) {
//     let vowelsCount = text.match(/[aeiou]/gi);
//     return vowelsCount ? vowelsCount.length : 0;
// }

function vowelsCounter(text) {
    // Code goes here
 text = text.toLowerCase().split('')
let vowels= ["a", "e", "i", "o", "u"]
let counter = 0
  text.forEach(num => {
    if(vowels.includes(num) === true){
      counter++
    }
  })
  return counter
}
//
// P: a string of text
// R: nunber of vovewls found in the text
// E: Input = 'hello' OutPut = 2
// P:

module.exports = vowelsCounter;
