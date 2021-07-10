// Grade B
//
// Challenge:
//
// Complete the square sum function so that it squares each number passed into it
// and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
//
// Prep:

// p: array of numbers
// r: return the result of squaring each number and add them all up
// e: input: [1, 2, 2] output: 9
// p:
// -loop through array
// -square each number
// -add all the numbers and return it

// Final Solution:

function squareSum(numbers){
  let arr = []
  numbers.forEach(num => {
    let n = num * num
    arr.push(n)
  })
  let result = arr.reduce((acc, cur) => cur + acc, 0)
  return result
}

// Test Cases:

console.log(squareSum([1, 2, 2]))

//Other Answers:

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

function squareSum(numbers){
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}
