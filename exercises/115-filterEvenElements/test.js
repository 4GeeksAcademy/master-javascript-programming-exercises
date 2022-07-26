const rewire = require('rewire');
const filterEvenElements = rewire('./app.js').__get__('filterEvenElements');

test('Function filterEvenElements must exist', () => {
  expect(filterEvenElements).not.toBe(undefined);
});
test('Function filterEvenElements must return something', () => {
  expect(filterEvenElements([1, 2])).not.toBe(undefined);
});
test('Function filterEvenElements must return an array', () => {
  expect(typeof filterEvenElements([1, 2])).toBe('object');
});

test('Function must returns an array that contains only the even numbers found in the array.', () => {
  expect(filterEvenElements([6, 8, 12, 81, 92])).toEqual([6, 8, 12, 92]);
});
test('Function must returns an array that contains only the even numbers found in the array. Testing with example values.', () => {
  expect(filterEvenElements([2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
});
