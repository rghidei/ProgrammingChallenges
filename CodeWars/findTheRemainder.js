//Task:
// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Test Cases:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
//
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
//
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
//
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

//My Solutions:
function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  let remain = 0
  if(a > b){
    remain = a % b
  } else{
    remain = b % a
  }
  return remain
}
console.log(remainder(17, 5))

// Answer:
// 2
// 
// Best Answer:
// function remainder(a, b){
//   return a > b ? a % b : b % a;
// }
