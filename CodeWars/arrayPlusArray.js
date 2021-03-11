get the sum of two arrays...actually the sum of all their elements.

P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {


  let result = arr1.reduce((sum, current) => sum + current, 0);
  let result2 = arr2.reduce((sum, current) => sum + current, 0);

  return result + result2; //something went wrong
}
