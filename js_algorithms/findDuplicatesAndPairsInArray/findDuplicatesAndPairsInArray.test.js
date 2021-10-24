const { uniqueNumbers, numberOfPairs, largestPair } = require('./script');

test('inputs array [] with 0 unique numbers', () => {
  expect(uniqueNumbers([])).toBe(0);
});

test('inputs array [1] with 1 unique numbers', () => {
  expect(uniqueNumbers([1])).toBe(1);
});

test('inputs array [1, 1, 5, 5] with 2 unique numbers', () => {
  expect(uniqueNumbers([1, 1, 5, 5])).toBe(2);
});

test('inputs array [2, 9, 7, 3, 7, 9] with 3 unique numbers', () => {
  expect(uniqueNumbers([2, 9, 20, 9, 7, 2])).toBe(4);
});

test('inputs array [] with 0 pairs', () => {
  expect(numberOfPairs([])).toBe(0);
});

test('inputs array [1] with 0 pairs', () => {
  expect(numberOfPairs([1])).toBe(0);
});

test('inputs array [1, 1, 5, 5] with 2 pairs', () => {
  expect(numberOfPairs([1, 1, 5, 5])).toBe(2);
});

test('inputs array [2, 9, 20, 9, 7, 2] with 2 pairs', () => {
  expect(numberOfPairs([2, 9, 20, 9, 7, 2])).toBe(2);
});

test('inputs array [] with no pairs in the input array', () => {
  expect(largestPair([])).toBe('No pairs in the input array');
});

test('inputs array [1] with no pairs in the input array', () => {
  expect(largestPair([1])).toBe('No pairs in the input array');
});

test('inputs array [1, 1, 5, 5] with largest pair of 5', () => {
  expect(largestPair([1, 1, 5, 5])).toBe(5);
});

test('inputs array [2, 9, 20, 9, 7, 2] with largest pair of 9', () => {
  expect(largestPair([2, 9, 20, 9, 7, 2])).toBe(9);
});
