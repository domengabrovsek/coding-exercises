/* DO NOT COMMIT AND PUSH CHANGES TO MASTER */

const {
  longestWord,
  shortestWord,
  wordWithMostVowels,
  wordWithLeastVowels,
  wordsLongerThanX,
  wordsShorterThanX,
  numberOfLettersInWord,
  numberOfUniqueLettersInWord
} = require('./index');

describe('tests for exercise-02-strings', () => {
  describe('tests for longestWord function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { words: [], expectedResult: null },
      { words: [1], expectedResult: [] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear'], expectedResult: 'pikachu' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', null], expectedResult: 'pikachu' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', {}], expectedResult: 'pikachu' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'rainbow'], expectedResult: 'pikachu' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'gingers'], expectedResult: 'gingers' }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = longestWord(testCase.words);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });

  describe('tests for shortestWord function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { words: [], expectedResult: null },
      { words: [1], expectedResult: [] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear'], expectedResult: 'x' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', null], expectedResult: 'x' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', {}], expectedResult: 'x' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'a'], expectedResult: 'a' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'z'], expectedResult: 'x' }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = shortestWord(testCase.words);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });

  describe('tests for wordWithMostVowels function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { words: [], expectedResult: null },
      { words: [1], expectedResult: [] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear'], expectedResult: 'banana' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', null], expectedResult: 'banana' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', {}], expectedResult: 'banana' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'a'], expectedResult: 'banana' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'ababab'], expectedResult: 'ababab' }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = wordWithMostVowels(testCase.words);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });

  describe('tests for wordWithLeastVowels function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { words: [], expectedResult: null },
      { words: [1], expectedResult: [] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear'], expectedResult: 'x' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', null], expectedResult: 'x' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', {}], expectedResult: 'x' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'a'], expectedResult: 'x' },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'c'], expectedResult: 'c' }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = wordWithLeastVowels(testCase.words);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });

  describe('tests for wordsLongerThanX function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { words: [], x: 5, expectedResult: null },
      { words: [1], x: 5, expectedResult: [] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear'], x: 1, expectedResult: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'pear'] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', null], x: 1, expectedResult: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'pear'] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', {}], x: 3, expectedResult: ['pikachu', 'banana', 't-rex', 'pizza', 'pear'] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'a'], x: 4, expectedResult: ['pikachu', 'banana', 'pizza'] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'c'], x: 6, expectedResult: ['pikachu'] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'c'], x: 10, expectedResult: [] }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = wordsLongerThanX(testCase.words, testCase.x);

        // assert
        expect(result).equals(testCase.expectedResult);
      });
    })
  });

  describe('tests for wordsShorterThanX function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { words: [], x: 5, expectedResult: null },
      { words: [1], x: 5, expectedResult: [] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear'], x: 1, expectedResult: [] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', null], x: 1, expectedResult: [] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', {}], x: 3, expectedResult: ['x'] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'a'], x: 4, expectedResult: ['dog', 'x', 'a'] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'c'], x: 6, expectedResult: ['dog', 't-rex', 'pizza', 'x', 'pear', 'c'] },
      { words: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'c'], x: 10, expectedResult: ['pikachu', 'banana', 'dog', 't-rex', 'pizza', 'x', 'pear', 'c'] }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = wordsShorterThanX(testCase.words, testCase.x);

        // assert
        expect(result).equals(testCase.expectedResult);
      });
    })
  });

  describe('tests for numberOfLettersInWord function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { word: [], letter: 5, expectedResult: null },
      { word: [1], letter: 5, expectedResult: null },
      { word: 15, letter: 2, expectedResult: null },
      { word: 'pikachu', letter: 1, expectedResult: null },
      { word: 'pikachu', letter: '1', expectedResult: 0 },
      { word: 'pikachu', letter: 'a', expectedResult: 1 },
      { word: 'pikachu', letter: 'i', expectedResult: 1 },
      { word: 'pikachuchu', letter: 'c', expectedResult: 2 },
      { word: 'pikachuuuuuu', letter: 'u', expectedResult: 6 },
      { word: 'pikachuuuuuu', letter: 'b', expectedResult: 0 }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = numberOfLettersInWord(testCase.word, testCase.letter);

        // assert
        expect(result).equals(testCase.expectedResult);
      });
    })
  });

  describe('tests for numberOfUniqueLettersInWord function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { word: [], letter: 5, expectedResult: null },
      { word: [1], letter: 5, expectedResult: null },
      { word: 15, letter: 2, expectedResult: null },
      { word: 'pikachu', expectedResult: 7 },
      { word: 'pikachuu', expectedResult: 6 },
      { word: 'pikachuchu', expectedResult: 4 },
      { word: 'pikapika', expectedResult: 0 },
      { word: 'p', expectedResult: 1 },
      { word: 'thunderbolt', expectedResult: 8 }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = numberOfUniqueLettersInWord(testCase.word);

        // assert
        expect(result).equals(testCase.expectedResult);
      });
    })
  });
})