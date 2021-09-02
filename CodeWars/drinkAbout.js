// Description:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
//
// Rules:
//
// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// Prep:
// if less than 14 == drink toddy
// if less than 18 and more than 13 == drink coke
// if less than 21 and more than 17 == drink beer
// if 21 and more than 21 == drink whisky

// My Solution:
function peopleWithAgeDrink(old) {
  if (old < 14){
    return "drink toddy";
  }
  else if (old<18 && old >13) {
    return "drink coke";
  }
  else if (old<21 && old > 17) {
    return "drink beer";
  }
  else if (old >= 21) {
    return "drink whisky";
  }
}

// Test Cases:
console.log(peopleWithAgeDrink(13))
console.log(peopleWithAgeDrink(17))
console.log(peopleWithAgeDrink(18))
console.log(peopleWithAgeDrink(20))
console.log(peopleWithAgeDrink(21))
console.log(peopleWithAgeDrink(30))

//Answers:
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 21 --> "drink whisly"
// 30 --> "drink whisky"

// Best Solution:
// const peopleWithAgeDrink = (age) =>
//   age < 14 ? "drink toddy" :
//   age < 18 ? "drink coke" :
//   age < 21 ? "drink beer" : "drink whisky"
