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
  expect(typeof getLongestWordOfMixedElements).not.toBe('string');
});

test('Function must returns the longest string in the array.', () => {
  let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
  expect(output).toBe('word');
});

test('If the given array, not contains string , it should return a empty string.', () => {
  let output = getLongestWordOfMixedElements([1, 2, 3, 4]);
  expect(output).toBe('');
});

test('If array is empty must return a empty string', () => {
  let output = getLongestWordOfMixedElements([]);
  expect(output).toBe('');
});
