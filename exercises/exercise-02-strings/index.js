/**
 * Function which accepts a list of words and returns the longest word.
 * If elements are not strings, ignore them.
 * If there is more than one result, return the one which is first alphabetically.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @returns {String} Longest word
 */
const longestWord = (words) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a list of words and returns the shortest word.
 * If elements are not strings, ignore them.
 * If there is more than one result, return the one which is first alphabetically.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @returns {String} Shortest word
 */
const shortestWord = (words) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a list of words and returns the word with the most vowels.
 * If elements are not strings, ignore them.
 * If there is more than one result, return the one which is first alphabetically.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @returns {String} Word with most vowels
 */
const wordWithMostVowels = (words) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a list of words and returns the word with the least vowels.
 * If elements are not strings, ignore them.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @returns {String} Word with least vowels
 */
const wordWithLeastVowels = (words) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a list of words and a number and returns all words which have more letters than that number.
 * If elements are not strings, ignore them.
 * If x is not a number, return an empty array.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @param {Number} x Number that indicates longer than what words should be.
 * @returns {Array.<String>} All words with more letters than x.
 */
const wordsLongerThanX = (words, x) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a list of words and returns longest word.
 * If elements are not strings, ignore them.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @param {Number} x Number that indicates shorter than what words should be.
 * @returns {String} All words with less letters than x.
 */
const wordsShorterThanX = (words, x) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a word and a letter and returns how many of those letters are in the word.
 * If word or letter is not a string, return null.
 * @param {String} word Word in which to look for letters.
 * @param {String} letter Letter to count
 * @returns {Number} Number of provided letter in provided word.
 */
const numberOfLettersInWord = (word, letter) => {
  // TODO: Implement this function
}

/**
 * Function which accepts a word and returns number of unique letters.
 * If word is not a string, return null.
 * @param {String} word Word  
 * @returns {Number} Number of unique letters 
 */
const numberOfUniqueLettersInWord = (word) => {
  // TODO: Implement this function
}

module.exports = {
  longestWord,
  shortestWord,
  wordWithMostVowels,
  wordWithLeastVowels,
  wordsLongerThanX,
  wordsShorterThanX,
  numberOfLettersInWord,
  numberOfUniqueLettersInWord
};