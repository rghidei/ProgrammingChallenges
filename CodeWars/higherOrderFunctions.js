function countDevelopers(list) {
  let counter = 0
  list.forEach(item => {
    if(item.continent === 'Europe' && item.language === 'JavaScript'){
     counter++
    }

  })
   return counter

}
