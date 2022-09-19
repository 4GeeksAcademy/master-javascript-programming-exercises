const rewire = require('rewire');
const isOddWithoutModulo = rewire('./app.js').__get__('isOddWithoutModulo');

test('Function isOddWithoutModulo must exist', () => {
  expect(isOddWithoutModulo).not.toBe(undefined);
});

test('Function isOddWithoutModulo must return something', () => {
  expect(isOddWithoutModulo(1)).not.toBe(undefined);
});

test('Function isOddWithoutModulo must return a boolean', () => {
  expect(typeof isOddWithoutModulo(1)).toBe('boolean');
});

test('Function returns true or false if the given number is odd. Testing with 6.', () => {
  expect(isOddWithoutModulo(6)).toBe(false);
});

test('Function returns true or false if the given number is odd. Testing with 17.', () => {
  expect(isOddWithoutModulo(17)).toBe(true);
});

test('Function must work for negative numbers and zero. Testing with -19.', () => {
  expect(isOddWithoutModulo(-19)).toBe(true);
});

test('Function must work for negative numbers and zero. Testing with -8.', () => {
  expect(isOddWithoutModulo(-8)).toBe(false);
});

test('Function must work for negative numbers and zero. Testing with 0.', () => {
  expect(isOddWithoutModulo(0)).toBe(false);
});
