//Complete the solution so that it reverses the string passed into it.

function solution(str){
  const splitString = str.split('')
  const reverseString = splitString.reverse('')
  const joinString = reverseString.join('')
  return joinString
}
console.log(solution("Hello"));
