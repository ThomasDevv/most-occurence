/*
  @param ${string} str
  
  Retrieves the character with the most occurences in a string.
*/

const mostOccurence = (str) => {
  if(typeof str !== 'string') return console.log('You must pass a string.')
  
  for(const element of str.split('')) {
    if(!obj[element]) obj[element] = 0

    obj[element]++
  }

  const sorted = Object.keys(obj).sort((a, b) => { return obj[b] - obj[a] })

  return sorted[0]
} 

console.log(mostOccurence('test')) // returns t
console.log(mostOccurence('thomas')) // returns t as there are no repeated characters
