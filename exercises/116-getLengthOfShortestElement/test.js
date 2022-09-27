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

test('Function must returns the length of the shortest string in the array. Testing with example values.', () => {
  expect(getLengthOfShortestElement(['one', 'two', 'three'])).toBe(3);
});

test('Function must returns the length of the shortest string in the array.', () => {
  expect(getLengthOfShortestElement(['1234', 'rocky', 'eerie'])).toBe(4);
});

test('If array is empty must return 0', () => {
  let output = getLengthOfShortestElement([]);
  expect(output).toBe(0);
});
