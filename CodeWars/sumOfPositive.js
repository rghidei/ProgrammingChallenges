// Description:
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let posNums = arr.filter(function(number){
    if(number >= 0){
      return arr}})
  if(posNums.length === 0){
    return 0
  } else{
    let sum = posNums.reduce(function (total, number){ return total + number})
    return sum
  }
}
console.log(positiveSum())
