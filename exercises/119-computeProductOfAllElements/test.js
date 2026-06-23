const rewire = require('rewire');
const computeProductOfAllElements = rewire('./app.js').__get__(
  'computeProductOfAllElements'
);

test('Function computeProductOfAllElements must exist', () => {
  expect(computeProductOfAllElements).not.toBe(undefined);
});
test('Function computeProductOfAllElements must return something', () => {
  expect(computeProductOfAllElements([1, 2])).not.toBe(undefined);
});

test('Function must return the products of all the elements in the given array. Testing with [2,5,6]', () => {
  expect(computeProductOfAllElements([2, 5, 6])).toBe(60);
});
test('Function must return the products of all the elements in the given array. Testing with [2,8,6]', () => {
  expect(computeProductOfAllElements([2, 8, 6])).toBe(96);
});
test('Function must return the products of all the elements in the given array. Testing with [1,2,3]', () => {
  expect(computeProductOfAllElements([1, 2, 3])).toBe(6);
});

test('If given array is empty, it should return 0', () => {
  expect(computeProductOfAllElements([])).toBe(0);
});
