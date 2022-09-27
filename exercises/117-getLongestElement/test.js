const rewire = require('rewire');
const getLongestElement = rewire('./app.js').__get__('getLongestElement');

test('Function getLongestElement must exist', () => {
  expect(getLongestElement).not.toBe(undefined);
});

test('Function getLongestElement must return something', () => {
  expect(getLongestElement([])).not.toBe(undefined);
});

test('Function getLongestElement must return a string', () => {
  expect(typeof getLongestElement([])).toBe('string');
});

test('Function must returns the length of the longest string in the array.', () => {
  expect(getLongestElement(['one', 'two', 'three'])).toBe('three');
});

test('If there are strings with the same length, must returns the first element found.', () => {
  expect(getLongestElement(['1234', 'rocky', 'eerie'])).toBe('rocky');
});

test('If array is empty must return empty string ', () => {
  let output = getLongestElement([]);
  expect(output).toBe('');
});