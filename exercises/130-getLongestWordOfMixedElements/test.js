const rewire = require('rewire');
const getLongestWordOfMixedElements = rewire('./app.js').__get__(
  'getLongestWordOfMixedElements'
);

test('Function getLongestWordOfMixedElements must exist', () => {
  expect(getLongestWordOfMixedElements).not.toBe(undefined);
});

test('Function getLongestWordOfMixedElements must return something', () => {
  expect(getLongestWordOfMixedElements([])).not.toBe(undefined);
});

test('Function getLongestWordOfMixedElements must return a string', () => {
  expect(typeof getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1])).toBe('string');
});

test('Function must return the longest string in the array', () => {
  let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
  expect(output).toBe('word');
});

test('If the given array contain no strings, it should return an empty string', () => {
  let output = getLongestWordOfMixedElements([1, 2, 3, 4]);
  expect(output).toBe('');
});

test('If the array is empty, it must return a empty string', () => {
  let output = getLongestWordOfMixedElements([]);
  expect(output).toBe('');
});

