const { highestNumber, lowestNumber, mostDecimals, leastDecimals } = require('./index');

describe('tests for exercise-01', () => {
  describe('tests for highest number function', () => {

    // arrange
    const testCases = [
      { numbers: [1, 2, 3, 4, 5], expectedResult: 5 },
      { numbers: [1, 2, 3, 4, "5"], expectedResult: 4 },
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
})