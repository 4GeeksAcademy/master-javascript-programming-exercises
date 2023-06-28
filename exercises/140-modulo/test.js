const rewire = require('rewire');
const modulo = rewire('./app.js').__get__('modulo');

test('Function modulo must exist', () => {
  expect(modulo).not.toBe(undefined);
});

test('Function modulo must return something', () => {
  expect(modulo(1, 2)).not.toBe(undefined);
});

test('Function modulo must return a number', () => {
  expect(typeof modulo(1, 2)).toBe('number');
});

test('Given 2 numbers, return the remainder after dividing num1 by num2. Testing with (5, 55)', () => {
  expect(modulo(5, 55)).toBe(5);
});

test('Given 2 numbers, return the remainder after dividing num1 by num2. Testing with (25, 4)', () => {
  expect(modulo(25, 4)).toBe(1);
});

test('The module always returns the sign of the first number. Testing with (-5, 55)', () => {
  expect(modulo(-5, 55)).toBe(-5);
});

test('The module always returns the sign of the first number. Testing with (-25, 4)', () => {
  expect(modulo(-25, 4)).toBe(-1);
});

test('If any of the operators is different from a number, then the result is NaN', () => {
  expect(modulo(25, 'hey')).toBe(NaN);
});
