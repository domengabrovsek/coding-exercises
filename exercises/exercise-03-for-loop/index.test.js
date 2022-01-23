const { sumArrays } = require('./index');

describe('tests for exercise-03-for-loops', () => {

  describe('tests for sumArrays function', () => {

    // arrange
    const testCases = [
      { expectedResult: null },
      { arr1: [1], arr2: [1], expectedResult: 2 },
      { arr1: [1, 3], arr2: [1], expectedResult: 5 },
      { arr1: [1, -1], arr2: [1], expectedResult: 1 },
      { arr1: [1, -1], arr2: [1], expectedResult: 1 },
      { arr1: [9123, 1231, 1111, 4442, 444225, 2112, 22, 442, 1], arr2: [], expectedResult: 462709 }
    ];

    testCases.forEach(testCase => {
      test(`should return ${testCase.expectedResult}`, () => {

        // act
        const result = sumArrays(testCase.numbers);

        // assert
        expect(result).toBe(testCase.expectedResult);
      });
    });
  });
});
