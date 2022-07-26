const rewire = require('rewire');
const filterOddElements = rewire('./app.js').__get__('filterOddElements');

test('Function filterOddElements must exist', () => {
  expect(filterOddElements).not.toBe(undefined);
});
test('Function filterOddElements must return something', () => {
  expect(filterOddElements([1, 2])).not.toBe(undefined);
});
test('Function filterOddElements must return an array', () => {
  expect(filterOddElements([1, 2])).toBe('object');
});

test('Function must returns an array containing only the odd numbers of the given array.', () => {
  expect(filterOddElements([3, 9, 12, 37])).toEqual([3, 9, 37]);
});

test('Function must returns an array containing only the odd numbers of the given array. Testing with example values.', () => {
  expect(filterOddElements([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
});
