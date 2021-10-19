/* DO NOT COMMIT AND PUSH CHANGES TO MASTER */

/**
 * Function which accepts a list of numbers and returns the highest number in the list.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Highest number
 */

// If list is empty return 'Null'
const highestNumber = (numbers) => {
  if (numbers.length === 0) {
    return null;
  }
// Returns the highest number currently in the list
  let currentmax = numbers[0]
  console.log('Max before starting loop ', currentmax)
  console.log('Length of list ', numbers.length)

  // Iterates through the list one index at a time 
  for (let i = 0; i < numbers.length; i++) {
    // Compares current index from list with current max number
    console.log(`is ${numbers[i]} bigger than ${currentmax}?`);
    // If current index is smaller than current max and current index is not a string
    if (numbers[i] > currentmax && typeof (numbers[i]) !== 'string') {
    // replace current max with the current index
      currentmax = numbers[i];
    }
  }
  return currentmax;
}

/**
 * Function which accepts a list of numbers and returns the lowest number in the list.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Lowest number
 */

// If list is empty return 'Null'
const lowestNumber = (numbers) => {
  if (numbers.length === 0) {
    return null;
  }

// Returns the lowest number currently in the list
  let currentmin = numbers[0]
  console.log('Minimum before starting loop ', currentmin)
  console.log('Length of list ', numbers.length)
// Iterates through the list one index at a time 
  for (let i = 0; i < numbers.length; i++) {
    // Compares current index from list with current minimum number
    console.log(`is ${numbers[i]} smaller than ${currentmin}?`);
    // If current index is smaller than current minimum and current index is not a string
    if (numbers[i] < currentmin && typeof (numbers[i]) !== 'string') {
    // replace current minimum with the current index
      currentmin = numbers[i];
    }
  }
  return currentmin;
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
