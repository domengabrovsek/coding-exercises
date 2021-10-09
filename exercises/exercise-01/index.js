/**
 * Implement a function which accepts a list of numbers and returns the highest number in the list. 
 * If the array is empty, return null.
 * @returns {Number} Highest number
 */
const highestNumber = (numbers) => {
  if(numbers.length === 0){
    return null;
  }
  
  let currentmax = numbers[0]
  console.log('Max before starting loop ', currentmax)
  console.log('Length of list ', numbers.length)
  
  for(let i = 0; i < numbers.length; i++){
    console.log(`is ${numbers[i]} bigger than ${currentmax}?`);
    if(numbers[i] > currentmax && typeof(numbers[i]) !== 'string'){
      currentmax = numbers[i];
    }
  }
  return currentmax;
}

/**
 * TODO: Implement a function which accepts a list of numbers and returns the lowest number in the list. 
 * If the array is empty, return null.
 * @returns {Number} Lowest number
 */
const lowestNumber = (numbers) => {
  // TODO: Implement this function
}

/**
 * TODO: Implement a function which accepts a list of numbers and returns the number with the most decimals in the list. 
 * If there is more than one, return the smallest one. 
 * If the array is empty, return null.
 * @returns {Number} Number with most decimals
 */
const mostDecimals = (numbers) => {
  // TODO: Implement this function
}

/**
 * TODO: Implement a function which accepts a list of numbers and returns the number with the least decimals in the list. 
 * If there is more than one, return the highest one. 
 * If the array is empty, return null.
 * @returns {Number} Number with most decimals
 */
const leastDecimals = (numbers) => {
  // TODO: Implement this function
}

const indexOfHighestNumber = () => {

}

const indexOfLowestNumber = () => {

}

const numberOfOccurencesInString = () => {

}

const numberOfOccurencesInStringByIndex = () => {

}


module.exports = {
  highestNumber,
  lowestNumber,
  mostDecimals,
  leastDecimals
};