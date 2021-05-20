/* CHALLENGE
Given a sentence, return the longest word in the string. E.g
longestWord('Top Shelf Web Development Training on Scotch')
*/

// function longestWord(text) {
//     // Code goes here
//    text = text.split(' ')
//    text = text.sort((a, b) => b.length - a.length)

//    return text[0]

// }
// console.log(longestWord('lulu loves you'))

// function longestWord(text) {
//     // Code goes here
//     text = text.split(' ')
//     let longest =''
//     text.forEach(item=>{
//       if (item.length>longest.length){
//         longest=item
//       }
//     })
//     return longest
// }
// function longestWord(text) {
//     Code goes here
//    text = text.split(' ')
//    space splits the sentence into words
//    text = text.sort((a, b) => a.length - b.length)
//    sort is going to sort them from lowest to highest, and it is going to compare the length of the first([0]) string(word) to the length of the second([1])string, and sort will put the lower one in front
//
//
//    return text[text.length - 1]
//     therefore the text array is orderd by the shorest word to the highest, so we will return the last element in the array
//
// }
console.log(longestWord('lulu loves you'))

function longestWord(text) {
    // Code goes here

     return text.split(' ').sort((a,b)=> b.length - a.length)[0]

}
// function reverseString(text) {
//     return [...text].reverse().join('')
// }
// function reverseString(text) {
//     return text.split("").reduce((acc, char) => char + acc, '')
// }

// function reverseString(text) {
//     return [...text].reduce((acc, char) => char + acc, '')
// }
