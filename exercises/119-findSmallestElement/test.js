const rewire = require('rewire');
const findSmallestElement = rewire('./app.js').__get__('findSmallestElement');

test('Function findSmallestElement must exist', () => {
  expect(findSmallestElement).not.toBe(undefined);
});

test('Function findSmallestElement must return something', () => {
  expect(findSmallestElement([1, 2])).not.toBe(undefined);
});

test('Function findSmallestElement must return a number', () => {
  expect(typeof findSmallestElement([1, 2])).toBe('number');
});

test('Function must return the smallest number within the array', () => {
  expect(findSmallestElement([4, 1, 9, 10])).toBe(1);
});

test('Function must return the smallest number within the array. Testing with different values', () => {
  expect(findSmallestElement([11, 32, 8, 19, 51, 13])).toBe(8);
});

test('If array is empty, it must return 0', () => {
  let output = findSmallestElement([]);
  expect(output).toBe(0);
});
