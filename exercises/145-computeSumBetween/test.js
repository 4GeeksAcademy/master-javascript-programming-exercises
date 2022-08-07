const rewire = require('rewire');
const computeSumBetween = rewire('./app.js').__get__('computeSumBetween');

test('Function computeSumBetween must exist', () => {
  expect(computeSumBetween).not.toBe(undefined);
});
test('Function computeSumBetween must return something', () => {
  expect(computeSumBetween(1, 2)).not.toBe(undefined);
});
test('Function computeSumBetween must return a number', () => {
  expect(typeof computeSumBetween(1, 2)).toBe('number');
});

test('The function must return the sum of all numbers, between the two given integers, starting at num1 and excluding num2. Testing with 2, 5.', () => {
  expect(computeSumBetween(2, 5)).toBe(9);
});
test('The function must return the sum of all numbers, between the two given integers, starting at num1 and excluding num2. Testing with 4, 8.', () => {
  expect(computeSumBetween(4, 8)).toBe(22);
});

test('If num2 is not greater than num1, it should return 0. Testing with 3, 2.', () => {
  expect(computeSumBetween(3, 2)).toBe(0);
});
test('If num2 is not greater than num1, it should return 0. Testing with 5, 3.', () => {
  expect(computeSumBetween(5, 3)).toBe(0);
});
