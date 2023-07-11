const rewire = require('rewire');
const isEvenWithoutModulo = rewire('./app.js').__get__('isEvenWithoutModulo');

test('Function isEvenWithoutModulo must exist', () => {
  expect(isEvenWithoutModulo).not.toBe(undefined);
});

test('Function isEvenWithoutModulo must return something', () => {
  expect(isEvenWithoutModulo(1)).not.toBe(undefined);
});

test('Function isEvenWithoutModulo must return a boolean', () => {
  expect(typeof isEvenWithoutModulo(1)).toBe('boolean');
});

test('Function returns true or false if the given number is even. Testing with 8', () => {
  expect(isEvenWithoutModulo(8)).toBe(true);
});

test('Function returns true or false if the given number is even. Testing with 17', () => {
  expect(isEvenWithoutModulo(17)).toBe(false);
});

test('Function returns true or false if the given number is even. Testing with 6', () => {
  expect(isEvenWithoutModulo(6)).toBe(true);
});

test('Function must work for negative numbers and zero. Testing with -17', () => {
  expect(isEvenWithoutModulo(-17)).toBe(false);
});

test('Function must work for negative numbers and zero. Testing with 0', () => {
  expect(isEvenWithoutModulo(0)).toBe(true);
});

test('Function must work for negative numbers and zero. Testing with -6', () => {
  expect(isEvenWithoutModulo(-4)).toBe(true);
});
