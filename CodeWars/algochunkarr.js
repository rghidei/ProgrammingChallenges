/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition.
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/
///

function chunkArray(array, size) {
    console.log('===============================================')
    console.log(`THE ARRAY IS ${array}`)
    console.log(`THE SIZE IS: ${size}`)
    let newArray = []
    for(let i = 0; i < array.length ;i+=size){
      newArray.push(array.slice(i, i+size))
      console.log(newArray)
    }
    console.log(`solution: ${newArray}`)
    return newArray
}

// function chunkArray(array, innerSize){
//   let newArray = []
//   for(let i = 0 ; i < array.length ; i += innerSize) {
//     let smallArray = array.slice(i, i+innerSize)
//     newArray.push(smallArray)
//   }
//   return newArray
// }
