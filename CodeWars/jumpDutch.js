function sc(floor){
const fall = 'Aa~ '
const hit = 'Pa! '
const hit2 = 'Pa!'
const final = 'Aa!'

let totaYell = 0
let repeatYell = null
let yell = null 
  if(floor > 6){
    totalYell = floor - 1
    repeatYell = fall.repeat(totalYell)
    yell = repeatYell + hit2 
  } else if (floor <= 6 && floor > 1){
     totalYell = floor - 1
     repeatYell = fall.repeat(totalYell)
     yell = repeatYell + hit + final
  } else if (floor <= 1){
      let blah = ""
      yell = blah 
  }
  return yell
}
