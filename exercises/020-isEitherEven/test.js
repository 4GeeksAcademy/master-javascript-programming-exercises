
const rewire = require('rewire');
const isEitherEven = rewire('./app.js').__get__('isEitherEven');

test('Function isEitherEven must exist', () => {
  expect(isEitherEven).not.toBe(undefined);
});

test('Function isEitherEven must return a boolean', () => {
  expect(typeof isEitherEven(3, 3)).toBe('boolean');
});

test('Testing with (15, 17) and it should return false', () => {
  expect(isEitherEven(15, 17)).toBe(false);
});

test('Testing with (7, 12) and it should return true', () => {
  expect(isEitherEven(7, 12)).toBe(true);
});

test('Testing with (4, 12) and it should return true', () => {
  expect(isEitherEven(4, 12)).toBe(true);
});

test('Testing with (2, 14) and it should return true', () => {
  expect(isEitherEven(2, 14)).toBe(true);
});

test('Testing with (1, 3) and it should return false', () => {
  expect(isEitherEven(1, 3)).toBe(false);
});
