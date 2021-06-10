//Description:
//Remove all exclamation marks from the end of sentence.
//Examples:
//remove("Hi!") === "Hi"
//remove("Hi!!!") === "Hi"
//remove("!Hi") === "!Hi"
//remove("Hi! Hi!") === "Hi! Hi"
//remove("Hi") === "Hi"

function remove(s){
  let result = s

  for(let i = 0; i <= s.length;i++)
  if(result[result.length - 1] === "!"){

   result =  result.slice(0, -1)
   continue
  }
  return result
}
//
