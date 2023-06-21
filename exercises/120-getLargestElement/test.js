const rewire = require('rewire');
const getLargestElement = rewire('./app.js').__get__('getLargestElement');

test('Function getLargestElement must exist', () => {
  expect(getLargestElement).not.toBe(undefined);
});

test('Function getLargestElement must return something', () => {
  expect(getLargestElement([1, 2])).not.toBe(undefined);
});

test('Function getLargestElement must return a number', () => {
  expect(typeof getLargestElement([1, 2])).toBe('number');
});

test('Function must return the largest number within the array', () => {
  expect(getLargestElement([5, 2, 8, 3])).toBe(8);
});

test('Function must return the largest number within the array. Testing with different values', () => {
  expect(getLargestElement([15, 22, 18, 23])).toBe(23);
});

test('If array is empty, it should return 0', () => {
  let output = getLargestElement([]);
  expect(output).toBe(0);
});
