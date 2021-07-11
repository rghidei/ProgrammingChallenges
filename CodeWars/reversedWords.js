// Description:
// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
  str = str.split(' ')
  str = str.reverse()
  str = str.join(' ')
  return str
}
console.log(reverseWords('candy'))
//
