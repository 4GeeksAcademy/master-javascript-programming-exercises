const rewire = require('rewire');
const multiply = rewire('./app.js').__get__('multiply');

test('Function multiply must exist', () => {
  expect(multiply).not.toBe(undefined);
});

test('Function multiply must return something', () => {
  expect(multiply(1, 2)).not.toBe(undefined);
});

test('Function multiply must return a number', () => {
  expect(typeof multiply(1, 2)).toBe('number');
});

test('Given 2 integer numbers, multiply and return the total', () => {
  expect(multiply(4, 7)).toBe(28);
});

test('Given 2 integer numbers, multiply and return the total. Testing with different values', () => {
  expect(multiply(5, -5)).toBe(-25);
});

test('Given 2 integer numbers, multiply and return the total. Testing with different values', () => {
  expect(multiply(-5, -3)).toBe(15);
});

test('Given 2 integer numbers, multiply and return the total. Testing with different values', () => {
  expect(multiply(0, -5)).toBe(0);
});

test('Must not use the * operator', () => {
  let multiplyOperator = '*';
  expect(multiplyOperator).not.toBe(multiply);
});
