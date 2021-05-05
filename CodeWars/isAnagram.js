/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// function isAnagram(stringA, stringB) {
//     // Code goes here
// }
//
//
// module.exports = isAnagram

function isAnagram(stringA, stringB) {
    // Code goes here
    let splitA = stringA.split("");
    console.log(splitA)
    let splitB = stringB.split("");
    console.log(splitB)
    let ret = true;
    console.log(splitA.length)
    console.log(splitA.length)
    if (splitA.length == splitB.length) {
        splitA.forEach((val, i) => {
          console.log(val)
          console.log(i)
          console.log(ret)
        if (ret){
            console.log(splitB.includes(val))
            ret = splitB.includes(val);
            console.log(ret)
        }
        });
    }
    return ret;
}
// 1.
// we have to words and we are going to split them up by their letters in two seprate collections
// we have two strings that we will turn into an array by spliting the elements up by space
// 2.create a third var and assign it to true
// 3.
// so if both words are the same length then we know the words have a good chance of being anagram
// if the length of both strings are the same, we can continure with the rest of function.
// 4.
// in the first word, we are want to go through each letter and if it inlcudes that same letter in the second and its true for eahc letter in thr word, then it is true that it is an anagram.
// if the second string(stringB) contains the same letters(val) as the first string(stringA) then we know it is true. so we assign ret to true and return ret

///inculedes checks if every letter is in the the string, if it comees out true then it will return  true,

// console.log(isAnagram("eat", "at"))
