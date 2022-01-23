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
  // Boolian operators - evaluates from left to right
  if (numbers === undefined || numbers.length === 0) {
    return null;
  }

  let currentmax = numbers[0]

  console.log('Preden se zanka zacne');

  for (let i = numbers[numbers.length - 1]; i >= 0; i--) { //nastavi mi stevec na nic ker hocem neki stet.

    console.log('Trenutni index:', i, 'Trenutna vrednost:', numbers[i], 'Trenutni max: ', currentmax);

    if (numbers[i] > currentmax && typeof (numbers[i]) !== 'string') {
      console.log(`Trenutna stevilka(${numbers[i]}) je vecja od trenutnega maxa(${currentmax})`);
      currentmax = numbers[i];
    }
    else {
      console.log(`Trenutna stevilka(${numbers[i]}) ni vecja od trenutnega maxa(${currentmax})`);
    }

    console.log('\n');
  }

  console.log('Zanka se konca');
  console.log('Vrnemo vrednost:', currentmax);

  return currentmax;
};

/**
 * Function which accepts a list of numbers and returns the lowest number in the list.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Lowest number
 */

const lowestNumber = (numbers) => { // If list is empty return 'Null'
  if (numbers === undefined || numbers.length === 0) { // Boolian operators - evaluates from left to right
    return null;
  }

  let currentmin = numbers[0]; // Returns the lowest number currently in the list
  console.log('Minimum before starting loop ', currentmin);
  console.log('Length of list ', numbers.length);
  for (let i = 0; i < numbers.length; i++) { // Iterates through the list one index at a time
    console.log(`is ${numbers[i]} smaller than ${currentmin}?`); // Compares current index from list with current minimum number
    if (numbers[i] < currentmin && typeof (numbers[i]) !== 'string') { // If current index is smaller than current minimum and current index is not a string
      currentmin = numbers[i]; // replace current minimum with the current index
    }
  }
  return currentmin;
};

/**
 * Function which accepts a list of numbers and returns the number with the most digits in the list.
 * If there is more than one, return the smallest one.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Number with most digits
 */

const mostDigits = (numbers) => {
  // Check if list is empty
  if (numbers === undefined || numbers.length === 0) {
    return null;
  }
  for (let i = 0; i < numbers.length; i++) { // iterates through the array
    if (numbers[i] === 'number') { // if array element is a number
      console.log(numbers[i]);
    }
  }
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
