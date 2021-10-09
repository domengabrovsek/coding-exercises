/**
 * Function which accepts a list of numbers and returns the highest number in the list.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Highest number
 */
const highestNumber = (numbers) => {
  if (!numbers || numbers.length === 0) { return null; }
  return Math.max(...numbers.filter(x => typeof (x) === 'number'));
};

/**
 * Function which accepts a list of numbers and returns the lowest number in the list.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Lowest number
 */
const lowestNumber = (numbers) => {
  if (!numbers || numbers.length === 0) { return null; }
  return Math.min(...numbers.filter(x => typeof (x) === 'number'));
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
  if (!numbers || numbers.length === 0) { return null; }
  return Math.min(...numbers
    .filter(x => typeof (x) === 'number')
    .map(x => ({
      number: x, decimals: String(x)
        .split('')
        .filter(x => x !== '-')
        .join('').length
    }))
    .filter(x => x.decimals === Math.max(...numbers
      .filter(x => typeof (x) === 'number')
      .map(x => (String(x)
        .split('')
        .filter(x => x !== '-')
        .join('').length))))
    .map(x => x.number));
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
  if (!numbers || numbers.length === 0) { return null; }
  return Math.max(...numbers
    .filter(x => typeof (x) === 'number')
    .map(x => ({
      number: x, decimals: String(x)
        .split('')
        .filter(x => x !== '-')
        .join('').length
    }))
    .filter(x => x.decimals === Math.min(...numbers
      .filter(x => typeof (x) === 'number')
      .map(x => (String(x)
        .split('')
        .filter(x => x !== '-')
        .join('').length))))
    .map(x => x.number));
};

/**
 * Function which accepts a list of numbers and returns the sum of all numbers.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} Number sum of all numbers
 */
const sumNumbers = (numbers) => {
  if (!numbers || numbers.length === 0) { return null; }
  return numbers.filter(x => typeof (x) === 'number').reduce((x, y) => x + y, 0);
};

/**
 * Function which accepts a list of numbers and returns the sum of odd numbers multiplied by sum of even numbers.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers
 * @returns {Number} sum of odd numbers multiplied by sum of even numbers.
 */
const productOfEvenAndOddSums = (numbers) => {
  if (!numbers || numbers.length === 0) { return null; }
  return (numbers
    .filter(x => typeof (x) === 'number')
    .filter(x => x % 2 === 0)
    .reduce((x, y) => x + y, 0)) * (numbers
      .filter(x => typeof (x) === 'number')
      .filter(x => x % 2 !== 0)
      .reduce((x, y) => x + y, 0));
};

module.exports = {
  highestNumber,
  lowestNumber,
  mostDigits,
  leastDigits,
  sumNumbers,
  productOfEvenAndOddSums
};
