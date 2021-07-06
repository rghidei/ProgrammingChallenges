// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
//
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
//
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
  function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  let mainArr = arr1.concat(arr2)
  let mainArray = mainArr.sort(compare)
  let arr = []
  let previousItem = 0;
  mainArray.map(function (item, index) {
    if(item !== previousItem){
      arr.push(mainArray[index])
    }
    previousItem = item
  } )
  return arr
}
console.log(mergeArrays())
