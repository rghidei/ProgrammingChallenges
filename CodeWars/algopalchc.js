/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/





function palindromeChecker(text) {
  return text.split("").reverse().join("") === text ? true: false;
    let palindromeText = text.split("").reverse().join("");

    if(text == palindromeText){
        return true
    }
    else {
        return false
    }
}
console.log(palindromeChecker())
// const palindromeChecker = (text) => text.split('').reverse().join('') === text ? true : false
