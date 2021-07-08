// Create a function that takes 2 nonnegative integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39

// p: strings
// r: return the sum of the strings
// p:
// -convert the strings into an integer
// -add the integers to get their sum
// -convert back into a string

function sumStr(a,b) {
  if(a === '' && b === ''){
    a = 0
    b = 0
  } else if(a === '') {
    a = 0
  } else if (b === ''){
    b = 0
  }
  let conA = parseInt(a, 10)
  let conB = parseInt(b, 10)
  let sum = conA + conB
  return sum.toString()
};
console.log(sumStr())
