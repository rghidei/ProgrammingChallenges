// Description:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//
// Write a code that gives out the total amount for different days(d).

// Test Cases:
// (rentalCarCost(3), 100);
// (rentalCarCost(4), 140);
// (rentalCarCost(5), 180);
// (rentalCarCost(6), 220);

//Prep:
// Your solution here
// if its less than 3 days == 40 per day
// if its 3 days or more than 3 day and less than 7 days  == 40 per day, minus 20
// if its 7 days or more than 7 days  == 40 per day, minus 50

// My Solution:
function rentalCarCost(d) {
  let total = 40 * d
  if(d >= 7) {
    total = total - 50
  } else if(d >= 3 && d < 7) {
    total = total - 20
  }
  return total
}
console.log(rentalCarCost(1))
console.log(rentalCarCost(4))
console.log(rentalCarCost(7))

Answer:
40
140
230
