/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition.
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/
//shorten version
function mergeArrays(arr1, arr2) {

let text = arr1.concat(arr2).sort()
// console.log(text)
return [...new Set([...text])]
// console.log(text)

}
// console.log(mergeArrays([1,2,3,3,3], [1,4,5,2]))

//longer version
function mergeArrays(arr1, arr2) {

let text = arr1.concat(arr2)
// console.log(text)
text = text.sort()
// console.log(text)
text = [...new Set([...text])]
// console.log(text)
  return text
}
console.log(mergeArrays([1,2,3,3,3], [1,4,5,2]))


function mergeArrays(...arrays) {

    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    return [...new Set([...jointArray])]


}
const mergeArrays = (...arrays) => arrSet = [...new Set(arrays.flat())];

// function mergeArrays(...arrays) {
//     let newArray = []
//     arrays.forEach(array => {
//         newArray = [...newArray, ...array]
//     });
//     return [...new Set([...newArray])]
// }

// function mergeArrays(...arrays) {
//     return [...new Set(arrays.flat())];
// }
//
// let arr = [...arrays]
//
//     arr = arrays.flat()
//
//     let arrSet = new Set(arr)
//
//     let uniqueArray = [...arrSet]
//     return uniqueArray
