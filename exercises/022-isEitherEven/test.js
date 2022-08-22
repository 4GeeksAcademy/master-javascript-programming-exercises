const rewire = require('rewire');
const isEitherEven = rewire('./app.js').__get__('isEitherEven');

test('Function isEitherEven must exist', () => {
  expect(isEitherEven).not.toBe(undefined);
});

test('Function isEitherEven must return boolean', () => {
  expect(typeof isEitherEven(3, 3)).toBe('boolean');
});

test('Tested with (15, 17) and it should return false', () => {
  expect(isEitherEven(15, 17)).toBe(false);
});

test('Tested with (7,12) and it should return true', () => {
  expect(isEitherEven(7, 12)).toBe(true);
});

test('Tested with (4, 12) and it should return false', () => {
  expect(isEitherEven(4, 12)).toBe(true);
});

test('Tested with (2, 14) and it should return false', () => {
  expect(isEitherEven(2, 14)).toBe(true);
});
test('Tested with (1, 3) and it should return false', () => {
  expect(isEitherEven(1, 3)).toBe(false);
});
