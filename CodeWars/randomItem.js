let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


let randomIndex = Math.floor(Math.random()*3)
console.log(randomIndex)

 function randonItem(){
     return hands[randomIndex]
 }
 console.log(randonItem())
