const rewire = require('rewire');
const getLengthOfShortestElement = rewire('./app.js').__get__(
  'getLengthOfShortestElement'
);

test('Function getLengthOfShortestElement must exist', () => {
  expect(getLengthOfShortestElement).not.toBe(undefined);
});

test('Function getLengthOfShortestElement must return something', () => {
  expect(getLengthOfShortestElement(['test', 'tes'])).not.toBe(undefined);
});

test('Function getLengthOfShortestElement must return a number', () => {
  expect(typeof getLengthOfShortestElement(['test', 'tes'])).toBe('number');
});

test('Function must return the length of the shortest string in the array', () => {
  expect(getLengthOfShortestElement(['one', 'two', 'three'])).toBe(3);
});

test('Function must return the length of the shortest string in the array. Testing with different values', () => {
  expect(getLengthOfShortestElement(['1234', 'rocky', 'eerie'])).toBe(4);
});

test('If array is empty, it must return 0', () => {
  let output = getLengthOfShortestElement([]);
  expect(output).toBe(0);
});
