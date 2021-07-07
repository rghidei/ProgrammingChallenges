/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
  let splitA = stringA.split('')
  let splitB = stringB.split('')
  let counter = 0
  for(let i = 0; i < splitA.length; i++){
    if(splitA[i] !== splitB[i]){
        counter++
    }
  }
  return counter
}
console.log(hammingDistance())
