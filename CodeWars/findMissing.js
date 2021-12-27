// findMissing([2,4,8,32]) returns 16
// 1.target the first two elemes element
// 2. a loop to iterate
// times that by the first element
// 3.check if the outcome is in the array,
// if it is contiune, if not stop the loop and return

// function findMissing(arr){
// let firstTwoEleArr = arr.slice(0, 2)
// console.log(firstTwoEleArr)

// let total = firstTwoEleArr.reduce((acc, cur)=> acc * cur)
// console.log(total)
// let result = arr.includes(total)
// console.log(result)


// for(let i = 0; i < arr.length; i++){

//   console.log(i)
//   if(total === i){
//     console.log("do nothing")// do nothing lol
//   } else {
//     return total
//   }
// }


// }

function findMissing(arr){
  let prev = arr[0];
  //prev = 2
  //prev2 = 4
  const multiplier= arr[1]/prev;
  //multiplier = 4 / 2 === 2
  for(let i =1; i<arr.length;i++){
    if(prev*multiplier !== arr[i]){
      // 2 * 2 !== 4
      //4 != 4 === false
      //4 * 2 !== 8
      //8 * 2 !== 32
      return multiplier*prev;
      //2 * 8 =16
    }
    prev = arr[i];
    //prev = 4
    //prev = 8
  }
}
console.log(findMissing([2,4,8,32]));

//
