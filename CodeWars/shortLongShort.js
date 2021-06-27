// Description:
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).
//
// For example:
//
// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

//you want me to create a function thats passes in two arguments and return a string back with the longest string in betweeen the short string
////input: a= one string and b = second string
//output: shortest string longest string shortest string
//or aba or bab
//will the strings ever be the same length?
//no
//will the strings length ever be zero?
//yes
//and do you want me to add space between the strings in the single string?
//no, okay
//okay, can i give you a simple example of possible solutions?
//ex. two arguments passed are "hello", "friend"
//what gets returned is "hellofriendhello"
//is that correct?  yes. can i show you another ex?
//pass in "water", "cat" retrun "catwatercat"
//and can i show you an ex of solution that is incorrect?
//okay pass in "cat", "willow" return "willowcatwillow"
//is that incorrect? yes, okay.
//first thing i want to do a create a function named solution, that will pass in two arguments a and b, which both represent strings
// function solution(a, b){
//   // your code here

// }
//next thing i want to check is the length of both strings, show i can find out which one is the longest
// function solution(a, b){
//   // your code here
//   let isLengthA = a.length
//   let isLengthB = b.length
//   console.log(a.length)
//   console.log(b.length)
// }
// solution("cat", "willow")
//Next, I know i need to create a conditional statement
//the situantion will be, if a or b is longer, i want to the longer string to be inserted in the middle of 2 of the same shorter string
function solution(a, b){

  let isLengthA = a.length
  let isLengthB = b.length
  console.log(a.length)
  console.log(b.length)
  if(a.length > b.length){
    return b + a + b
  } else {
    return a + b + a
  }
}
console.log(solution("astonish", "willow"))
