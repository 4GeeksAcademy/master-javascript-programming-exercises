const rewire = require('rewire');
const squareElements = rewire('./app.js').__get__('squareElements');
test('Function squareElements must exist', () => {
  expect(squareElements).not.toBe(undefined);
});
test('Function squareElements must return something', () => {
  expect(squareElements([1, 2, 3])).not.toBe(undefined);
});
test('Function squareElements must return an array', () => {
  expect(typeof squareElements([1, 2, 3])).toBe('object');
});

test('Function should return the square of the given number', () => {
  expect(squareElements([4, 7, 12, 33])).toEqual([16, 49, 144, 1089]);
});
test('Function should return the square of the given number. Testing with different values', () => {
  expect(squareElements([1, 2, 3])).toEqual([1, 4, 9]);
});
