const rewire = require('rewire');
const getLengthOfLongestElement = rewire('./app.js').__get__(
  'getLengthOfLongestElement'
);
test('Function getLengthOfLongestElement must exist', () => {
  expect(getLengthOfLongestElement).not.toBe(undefined);
});
test('Function getLengthOfLongestElement must return something ', () => {
  expect(getLengthOfLongestElement(['test', 'test2'])).not.toBe(undefined);
});
test('Function getLengthOfLongestElement must return a number', () => {
  expect(typeof getLengthOfLongestElement(['test', 'test2'])).toBe('number');
});

test('Must returns 0 if the array is empty.', () => {
  let output = getLengthOfLongestElement([]);
  expect(output).toBe(0);
});

test('Must returns the length of the longest string in the array.', () => {
  let output = getLengthOfLongestElement(['one', 'two', 'three']);
  expect(output).toBe(5);
});
test('Must returns the length of the longest string in the array.', () => {
  let output = getLengthOfLongestElement(['es', 'hora', 'de', 'comer','comida']);
  expect(output).toBe(6);
});

