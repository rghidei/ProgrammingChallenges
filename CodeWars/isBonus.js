// Description:
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
//
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
let total = salary * 10

let isBooLean = (bonus === true) ? total:salary

return "£" + isBooLean
}




//you want me to create a function that tells you if you are getting a bonus, and if you are, how much are you receiving
//okay, and you want me to pass in two agruments
//salary is a intager and bonus is a  boolean
//will the intager every be negative or a decmial ?
//no? okay
//and you want me to return the total firgure with a string in front of it ?
//lasty, if the second agrument you pass in (bonus) is true, then you want me to muliply how much the salary was by 10 ? And if false is passed in for bonus then the do nothing to salary
//okay, can i give you examples of possible solutions ?
//ex. input = (80,000, true)
//output = E800000
//is that correct?
//great, can i should you another example?
//ex. input is the two agruemnts passed in (24, 200, false) and return the total figure prefixed by a string which is the output
//is that correct?
//awesome! lasty can i show you an example of a solution that wont work?
//yay okay, ex.
//input = (-30, 000, true)
//output = E-300, 000
//is this solution wrong? yes? awesome
//okay first thing i am going to do is create a function that takes in two agruemnts, salary with can only be whole, poisitive intragers numbers and bonus which represents a boolean data type
function bonusTime(salary, bonus) {
// your code here
//next I am going to create an if statement to check to see if bonus is either true or false,and if it is true, i will take salary and mulity by ten and return the total figure and a string, if it is false, i will return salary as is with a string in front
//variablename = (condition) ? value1:value2

 let total = salary * 10

 let isBooLean = (bonus === true) ? total:salary

 return "£" + isBooLean
}
