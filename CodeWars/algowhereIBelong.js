/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



function whereIBelong(array, num) {
   // Code goes here
   if(array.length === 0) return 0
   array.push(num)
   return array.sort((a, b) => a - b).indexOf(num)


 // return array.concat([num]).sort((a,b) => a - b).indexOf(num)
}
console.log(whereIBelong([1, 2, 3, 4], 1.5))
