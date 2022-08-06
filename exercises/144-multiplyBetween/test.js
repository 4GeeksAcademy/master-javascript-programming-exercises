const rewire = require('rewire');
const multiplyBetween = rewire('./app.js').__get__('multiplyBetween');

test('Function multiplyBetween must exist', () => {
  expect(multiplyBetween).not.toBe(undefined);
});
test('Function multiplyBetween must return something', () => {
  expect(multiplyBetween(1, 2)).not.toBe(undefined);
});
test('Function multiplyBetween must return a number', () => {
  expect(typeof multiplyBetween(1, 2)).toBe('number');
});

test('Function must return the product multiplied of all numbers, between the two given integers, starting at num1 and excluding num2. Testing with 2, 5.', () => {
  expect(multiplyBetween(2, 5)).toBe(24);
});
test('Function must return the product multiplied of all numbers, between the two given integers, starting at num1 and excluding num2. Testing with 4, 8.', () => {
  expect(multiplyBetween(4, 8)).toBe(840);
});

test('If num2 is not greater than num1, it should return 0.', () => {
  expect(multiplyBetween(3, 2)).toBe(0);
});
