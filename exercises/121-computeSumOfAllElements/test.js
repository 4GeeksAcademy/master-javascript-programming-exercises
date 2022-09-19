const rewire = require('rewire');
const computeSumOfAllElements = rewire('./app.js').__get__(
  'computeSumOfAllElements'
);
test('Function computeSumOfAllElements must exist', () => {
  expect(computeSumOfAllElements).not.toBe(undefined);
});
test('Function computeSumOfAllElements must return something', () => {
  expect(computeSumOfAllElements([1, 2])).not.toBe(undefined);
});
test('Function computeSumOfAllElements must return a number', () => {
  expect(typeof computeSumOfAllElements([1, 2])).toBe('number');
});

test('Function must returns the sum of all elements of the array. Testing with example values.', () => {
  expect(computeSumOfAllElements([1, 2, 3])).toBe(6);
});

test('Function must returns the sum of all elements of the array.', () => {
  expect(computeSumOfAllElements([5, 3, 9])).toBe(17);
});
