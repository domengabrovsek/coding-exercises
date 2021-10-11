/* DO NOT COMMIT AND PUSH CHANGES TO MASTER */

/**
 * Function which accepts a list of numbers and returns the highest number in the list.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Highest number
 */
const highestNumber = (numbers) => {

  if (!numbers || numbers.length === 0) {
    return null;    
  }

  let currentMax = numbers[0];

  for(let i=0; i<numbers.length; i++){
      

      if (typeof(numbers[i])==='number' && currentMax < numbers[i]) {
        currentMax = numbers[i];
      }

      console.log("This is current max",currentMax);

  }
  return currentMax;

}

/**
 * Function which accepts a list of numbers and returns the lowest number in the list.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Lowest number
 */
const lowestNumber = (numbers) => {
  // TODO: Implement this function
  
  if (!numbers || numbers.length === 0) {
    return null;    
  }

  let currentMin = numbers[0];

  for(let i=0; i<numbers.length; i++){
      

      if (typeof(numbers[i])==='number' && currentMin > numbers[i]) {
        currentMin = numbers[i];
      }

      console.log("This is current min",currentMin);

  }
  return currentMin;

}

/**
 * Function which accepts a list of numbers and returns the number with the most digits in the list.
 * If there is more than one, return the smallest one.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Number with most digits
 */
const mostDigits = (numbers) => {
  // TODO: Implement this function
  return numbers;
};

/**
 * Function which accepts a list of numbers and returns the number with the least digits in the list.
 * If there is more than one, return the highest one.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Number with most digits
 */
const leastDigits = (numbers) => {
  // TODO: Implement this function
  return numbers;
};

/**
 * Function which accepts a list of numbers and returns the sum of all numbers.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Number sum of all numbers
 */
const sumNumbers = (numbers) => {
  // TODO: Implement this function
  return numbers;
};

/**
 * Function which accepts a list of numbers and returns the sum of odd numbers multiplied by sum of even numbers.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} sum of odd numbers multiplied by sum of even numbers.
 */
const productOfEvenAndOddSums = (numbers) => {
  // TODO: Implement this function
  return numbers;
};

module.exports = {
  highestNumber,
  lowestNumber,
  mostDigits,
  leastDigits,
  sumNumbers,
  productOfEvenAndOddSums
};
