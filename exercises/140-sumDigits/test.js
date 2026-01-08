const rewire = require('rewire');
const sumDigits = rewire('./app.js').__get__('sumDigits');

test('Function sumDigits must exist', () => {
  expect(sumDigits).not.toBe(undefined);
});

test('Function sumDigits must return something', () => {
  expect(sumDigits(12)).not.toBe(undefined);
});

test('Function sumDigits must return a number', () => {
  expect(typeof sumDigits(1)).toBe('number');
});

test('Function must return the sum of all its digits. Testing with (316)', () => {
  expect(sumDigits(316)).toBe(10);
});

test('Function must return the sum of all its digits. Testing with (124)', () => {
  expect(sumDigits(124)).toBe(7);
});

test('If the number is negative, the first digit must count as negative. Testing with (-316)', () => {
  expect(sumDigits(-316)).toBe(4);
});

test('If the number is negative, the first digit must count as negative. Testing with (-124)', () => {
  expect(sumDigits(-124)).toBe(5);
});
