/* CHALLENGE
Given a string of text, find and return the most recurring character.
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(str) {
    const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxRecurringChar())
