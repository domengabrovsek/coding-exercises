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

  let localMax = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (typeof (numbers[i]) === 'number' && localMax < numbers[i]) {
      localMax = numbers[i];
    }
  }
  return localMax;
};

/**
 * Function which accepts a list of numbers and returns the lowest number in the list.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Lowest number
 */
const lowestNumber = (numbers) => {
  if (!numbers || numbers.length === 0) {
    return null;
  }

  let localMin = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (typeof (numbers[i]) === 'number' && localMin > numbers[i]) {
      localMin = numbers[i];
    }
  }
  return localMin;
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

  if (!numbers || numbers.length === 0) {
    return null;
  }

  let mostDigCount = numbers[0].toString().length;
  let mostDig = numbers[0];

  for (let i = 0; i < numbers.length; i++) {

    if (typeof (numbers[i]) === 'number' && mostDigCount < numbers[i].toString().length) {
      mostDigCount = numbers[i].toString().length;
      mostDig = numbers[i];
    }
    else if (typeof (numbers[i]) === 'number' && mostDigCount === numbers[i].toString().length) {
      mostDigCount = numbers[i].toString().length;
      mostDig = Math.min(numbers[i], mostDig);
    }

  }
  return mostDig;
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

  if (!numbers || numbers.length === 0) {
    return null;
  }

  let leastDigCount = numbers[0].toString().length;
  let leastDig = numbers[0];

  for (let i = 0; i < numbers.length; i++) {

    if (typeof (numbers[i]) === 'number' && leastDigCount > numbers[i].toString().length) {
      leastDigCount = numbers[i].toString().length;
      leastDig = numbers[i];
    }
    else if (typeof (numbers[i]) === 'number' && leastDigCount === numbers[i].toString().length) {
      leastDigCount = numbers[i].toString().length;
      leastDig = Math.max(numbers[i], leastDig);
    }

  }
  return leastDig;
};

/**
 * Function which accepts a list of numbers and returns the sum of all numbers.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Number sum of all numbers
 */
const sumNumbers = (numbers) => {

  if (!numbers || numbers.length === 0) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof (numbers[i]) === 'number') {
      sum = sum + numbers[i];
    }
  }
  return sum;
};

/**
 * Function which accepts a list of numbers and returns the sum of odd numbers multiplied by sum of even numbers.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} sum of odd numbers multiplied by sum of even numbers.
 */
const productOfEvenAndOddSums = (numbers) => {
  if (!numbers || numbers.length === 0) {
    return null;
  }

  let sumOdd = 0;
  let sumEven = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof (numbers[i]) === 'number' && numbers[i] % 2 === 0) {
      sumEven = sumEven + numbers[i];
    }
    else if (typeof (numbers[i]) === 'number' && numbers[i] % 2 !== 0) {
      sumOdd = sumOdd + numbers[i];
    }

  }
  return sumEven * sumOdd;
};

module.exports = {
  highestNumber,
  lowestNumber,
  mostDigits,
  leastDigits,
  sumNumbers,
  productOfEvenAndOddSums
};
