const rewire = require('rewire');
const computeAverageOfNumbers = rewire('./app.js').__get__(
  'computeAverageOfNumbers'
);
test('Function computeAverageOfNumbers must exist', () => {
  expect(computeAverageOfNumbers).not.toBe(undefined);
});
test('Function computeAverageOfNumbers must return something', () => {
  expect(computeAverageOfNumbers([1, 2, 3])).not.toBe(undefined);
});
test('Function computeAverageOfNumbers must return a number', () => {
  expect(typeof computeAverageOfNumbers([1, 2, 3])).toBe('number');
});

test('The function must return the average of the given list of numbers', () => {
  let input = [1, 2, 3, 4, 5];
  let output = computeAverageOfNumbers(input);
  expect(output).toBe(3);
});

test('The function must return the average of the given list of numbers (Testing with a different list)', () => {
  let input = [1, 2, 3, 4, 5, 7, 8, 9];
  let output = computeAverageOfNumbers(input);
  expect(output).toBe(4.875);
});

test('If the list is empty the function must return 0', () => {
  let input = [];
  let output = computeAverageOfNumbers(input);
  expect(output).toBe(0);
});
