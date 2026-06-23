const rewire = require('rewire');
const getLargestNumberAmongMixedElements = rewire('./app.js').__get__(
  'getLargestNumberAmongMixedElements'
);

test('Function getLargestNumberAmongMixedElements must exist', () => {
  expect(getLargestNumberAmongMixedElements).not.toBe(undefined);
});

test('Function getLargestNumberAmongMixedElements must return something', () => {
  expect(getLargestNumberAmongMixedElements([1])).not.toBe(undefined);
});

test('Function getLargestNumberAmongMixedElements must return a number', () => {
  expect(typeof getLargestNumberAmongMixedElements([1])).toBe('number');
});

test('The function must return the largest number in the array', () => {
  let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up']);
  expect(output).toBe(5);
});

test('If the given array contains no numbers, it should return 0', () => {
  let output = getLargestNumberAmongMixedElements(['1', '2', 'three']);
  expect(output).toBe(0);
});

test('If the array is empty, it must return 0', () => {
  let output = getLargestNumberAmongMixedElements([]);
  expect(output).toBe(0);
});

