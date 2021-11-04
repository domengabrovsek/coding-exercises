/**
 * Function which accepts a list of words and returns the longest word.
 * If elements are not strings, ignore them.
 * If there is more than one result, return the one which is first alphabetically.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @returns {String} Longest word
 */
const longestWord = (words) => {
  if (!words || words.length === 0) {
    return null;
  }

  let longestWord = [];
  let longestWordLength = 0;
  let wordsAarray = [];

  for (let i = 0; i < words.length; i++) {

    if (typeof (words[i]) === 'string' && longestWordLength < words[i].length) {
      longestWordLength = words[i].length;
      wordsAarray = [];
      wordsAarray.push(words[i]);
      longestWord = wordsAarray[0]
    }

    else if (typeof (words[i]) === 'string' && longestWordLength === words[i].length) {
      wordsAarray.push(words[i]);
      wordsAarray.sort();
      longestWord = wordsAarray[0]
    }

  }
  return longestWord;

};

/**
 * Function which accepts a list of words and returns the shortest word.
 * If elements are not strings, ignore them.
 * If there is more than one result, return the one which is first alphabetically.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @returns {String} Shortest word
 */
const shortestWord = (words) => {
  if (!words || words.length === 0) {
    return null;
  }

  let shortestWord = [];
  let shortestWordLength = words[0].length;
  let wordsAarray = [];

  for (let i = 0; i < words.length; i++) {

    if (typeof (words[i]) === 'string' && shortestWordLength > words[i].length) {
      shortestWordLength = words[i].length;
      wordsAarray = [];
      wordsAarray.push(words[i]);
      shortestWord = wordsAarray[0]
    }

    else if (typeof (words[i]) === 'string' && shortestWordLength === words[i].length) {
      wordsAarray.push(words[i]);
      wordsAarray.sort();
      shortestWord = wordsAarray[0]
    }

  }
  return shortestWord;
};

/**
 * Function which accepts a list of words and returns the word with the most vowels.
 * If elements are not strings, ignore them.
 * If there is more than one result, return the one which is first alphabetically.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @returns {String} Word with most vowels
 */
const wordWithMostVowels = (words) => {
  if (!words || words.length === 0) {
    return null;
  }

  let highestVowelsCount = 0;
  let vowelsWord = [];
  let wordsArray = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  words.forEach(word => {
    if (typeof (word) === 'string') {
      let vowelsCount = 0;
      for (let letter of word) {
        if (vowels.includes(letter)) {
          vowelsCount++;
        }
      }

      if (highestVowelsCount < vowelsCount) {
        highestVowelsCount = vowelsCount;
        wordsArray = [];
        wordsArray.push(word);
        vowelsWord = wordsArray[0];
      }

      else if (highestVowelsCount === vowelsCount) {
        wordsArray.push(word);
        wordsArray.sort();
        vowelsWord = wordsArray[0];
      }
    }
  });
  return vowelsWord;
};

/**
 * Function which accepts a list of words and returns the word with the least vowels.
 * If elements are not strings, ignore them.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @returns {String} Word with least vowels
 */
const wordWithLeastVowels = (words) => {
  if (!words || words.length === 0) {
    return null;
  }

  let lowestVowelCount = words[0].length;
  let vowelsWord = [];
  let wordsArray = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  words.forEach(word => {
    if (typeof (word) === 'string') {
      let vowelsCount = 0;
      for (let letter of word) {
        if (vowels.includes(letter)) {
          vowelsCount++;
        }
      }

      if (lowestVowelCount > vowelsCount) {
        lowestVowelCount = vowelsCount;
        wordsArray = [];
        wordsArray.push(word);
        vowelsWord = wordsArray[0];
      }

      else if (lowestVowelCount === vowelsCount) {
        wordsArray.push(word);
        wordsArray.sort();
        vowelsWord = wordsArray[0];
      }
    }
  });
  return vowelsWord;
};

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

  wordsArray = [];

  if (!words || words.length === 0) {
    return null;
  }

  if (typeof (x) != 'number') {
    return wordsArray;
  }

  words.forEach(word => {
    if (typeof (word) === 'string' && word.length > x) {
      wordsArray.push(word);
    }
  }
  );

  return wordsArray;
};

/**
 * Function which accepts a list of words and a number and returns all words which have less letters than that number.
 * If elements are not strings, ignore them.
 * If the array is empty, return null.
 * @param {Array.<String>} words An array of strings.
 * @param {Number} x Number that indicates shorter than what words should be.
 * @returns {String} All words with less letters than x.
 */
const wordsShorterThanX = (words, x) => {
  wordsArray = [];

  if (!words || words.length === 0) {
    return null;
  }

  if (typeof (x) != 'number') {
    return wordsArray;
  }

  words.forEach(word => {
    if (typeof (word) === 'string' && word.length < x) {
      wordsArray.push(word);
    }
  }
  );

  return wordsArray;
};

/**
 * Function which accepts a word and a letter and returns how many of those letters are in the word.
 * If word or letter is not a string, return null.
 * @param {String} word Word in which to look for letters.
 * @param {String} letter Letter to count
 * @returns {Number} Number of provided letter in provided word.
 */
const numberOfLettersInWord = (word, letter) => {

  if (typeof (word) != 'string' || typeof (letter) != 'string') {
    return null;
  }
  let letterCount = 0;

  for (let letters of word) {
    if (letter.includes(letters)) {
      letterCount++;
    }
  }
  return letterCount;
}
  ;

/**
 * Function which accepts a word and returns number of unique letters.
 * If word is not a string, return null.
 * @param {String} word Word
 * @returns {Number} Number of unique letters
 */
const numberOfUniqueLettersInWord = (word) => {

  if (!word || typeof (word) != 'string') {
    return null;
  }
  
  const uniqueLet = [];
  for (let i = 0; i < word.length; i++) {
    if (uniqueLet.includes(word[i]) === false) {
      uniqueLet.push(word[i]);
    }

  }
  return uniqueLet.length;
  
};

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
