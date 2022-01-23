/* DO NOT COMMIT AND PUSH CHANGES TO MASTER */

/**
 * Function which accepts a list of numbers and returns the highest number in the list. 
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers 
 * @returns {Number} Highest number
 */
const highestNumber = (numbers) => {
  if (numbers.length === 0) {
    return null;
  }

  let currentmax = numbers[0]

  console.log('Preden se zanka zacne');

  for (let i = numbers[numbers.length -1]; i >= 0; i--) { //nastavi mi stevec na nic ker hocem neki stet.

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
}

/**
 * Function which accepts a list of numbers and returns the lowest number in the list. 
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers 
 * @returns {Number} Lowest number
 */
const lowestNumber = (numbers) => {
  if (numbers.length === 0) {
    return null;
  }

  let currentmin = numbers[0]
  console.log('Minimum before starting loop ', currentmin)
  console.log('Length of list ', numbers.length)

  for (let i = 0; i < numbers.length; i++) {
    console.log(`is ${numbers[i]} smaller than ${currentmin}?`);
    if (numbers[i] < currentmin && typeof (numbers[i]) !== 'string') {
      currentmin = numbers[i];
    }
  }
  return currentmin;
}

/**
 * Function which accepts a list of numbers and returns the number with the most decimals in the list.
 * If there is more than one, return the smallest one. 
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers 
 * @returns {Number} Number with most decimals
 */
const mostDecimals = (numbers) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a list of numbers and returns the number with the least decimals in the list.
 * If there is more than one, return the highest one. 
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers 
 * @returns {Number} Number with most decimals
 */
const leastDecimals = (numbers) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a list of numbers and returns the sum of all numbers.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers 
 * @returns {Number} Number sum of all numbers
 */
const sumNumbers = (numbers) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a list of numbers and returns the sum of odd numbers multiplied by sum of even numbers.
 * If elements are not numbers, ignore them.
 * If the array is empty, return null.
 * @param {Array.<Number>} numbers 
 * @returns {Number} sum of odd numbers multiplied by sum of even numbers.
 */
const productOfEvenAndOddSums = (numbers) => {
  // TODO: Implement this function
}

module.exports = {
  highestNumber,
  lowestNumber,
  mostDecimals,
  leastDecimals,
  sumNumbers,
  productOfEvenAndOddSums
};