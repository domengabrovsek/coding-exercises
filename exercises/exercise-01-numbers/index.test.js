/* DO NOT COMMIT AND PUSH CHANGES TO MASTER */

const { highestNumber, lowestNumber, mostDecimals, leastDecimals, sumNumbers, productOfEvenAndOddSums } = require('./index');

describe('tests for exercise-01-numbers', () => {
  describe('tests for highest number function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { numbers: [1, 2, 3, 4, 5], expectedResult: 5 },
      { numbers: [1, 2, 3, 4, "5"], expectedResult: 4 },
      { numbers: [1, 2, 3, 4, "5",{}], expectedResult: 4 },
      { numbers: [1, 2, undefined, 4, 5], expectedResult: 5 },
      { numbers: [1, 2, 3, -4, -5], expectedResult: 3 },
      { numbers: [], expectedResult: null },
      { numbers: [1234, 55352, 5443, 45433, 52235, 99999, 12345, 222.24, 333, 66], expectedResult: 99999 }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = highestNumber(testCase.numbers);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });

  describe('tests for lowest number function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { numbers: [1, 2, 3, 4, 5], expectedResult: 1 },
      { numbers: [1, 2, 3, 4, "5"], expectedResult: 1 },
      { numbers: [1, 2, undefined, 4, 5], expectedResult: 1 },
      { numbers: [1, 2, 3, -4, -5], expectedResult: -5 },
      { numbers: [], expectedResult: null },
      { numbers: [1234, 55352, 5443, 45433, 52235, 99999, 12345, 222.24, 333, 66], expectedResult: 66 }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = lowestNumber(testCase.numbers);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });

  describe('tests for most decimals number function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { numbers: [1, 2, 3, 4, 5], expectedResult: 1 },
      { numbers: [1, 21, "333", 4, "5"], expectedResult: 21 },
      { numbers: [1, 2, undefined, 4, 5], expectedResult: 1 },
      { numbers: [1, 2, 3, -422, -54], expectedResult: -422 },
      { numbers: [], expectedResult: null },
      { numbers: [1234, 55352, 5443, 45433, 52235, 99999, 12345, 222.24, 333, 66], expectedResult: 12345 }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = mostDecimals(testCase.numbers);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });

  describe('tests for least decimals number function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { numbers: [1, 2, 3, 4, 5], expectedResult: 5 },
      { numbers: [1, 21, "333", 4, "5"], expectedResult: 4 },
      { numbers: [1, 2, undefined, 4, 5], expectedResult: 5 },
      { numbers: [144, 21, 43, -422, -54], expectedResult: 43 },
      { numbers: [], expectedResult: null },
      { numbers: [1234, 55352, 5443, 45433, 52235, 99999, 12345, 222.24, 333, 66], expectedResult: 66 }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = leastDecimals(testCase.numbers);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });

  describe('tests for sumNumbers function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { numbers: [1, 2, 3, 4, 5], expectedResult: 15 },
      { numbers: [1, 21, "333", 4, "5"], expectedResult: 26 },
      { numbers: [1, 21, "333", 4, { name: 'Gandalf' }, [{ name: 'Bob' }]], expectedResult: 26 },
      { numbers: [1, 2, undefined, 4, 5, null], expectedResult: 12 },
      { numbers: [144, 21, 43, -422, -54, ""], expectedResult: -268 },
      { numbers: [], expectedResult: null },
      { numbers: [1234, 55352, 5443, 45433, 52235, 99999, 12345, 222.24, 333, 66], expectedResult: 272662.24 }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = sumNumbers(testCase.numbers);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });

  describe('tests for productOfEvenAndOddSums function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { numbers: [1, 2, 3, 4, 5], expectedResult: 54 },
      { numbers: [1, 21, "333", 4, "5"], expectedResult: 88 },
      { numbers: [1, 21, "333", 4, { name: 'Gandalf' }, [{ name: 'Bob' }]], expectedResult: 88 },
      { numbers: [1, 2, undefined, 4, 5, null], expectedResult: 36 },
      { numbers: [144, 21, 43, -422, -54, ""], expectedResult: -21248 },
      { numbers: [], expectedResult: null },
      { numbers: [1234, 55352, 5443, 45433, 52235, 99999, 12345, 222.24, 333, 66], expectedResult: 12237412116.48 }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = productOfEvenAndOddSums(testCase.numbers);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    })
  });
})