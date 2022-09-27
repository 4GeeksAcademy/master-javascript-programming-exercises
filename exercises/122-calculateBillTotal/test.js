const rewire = require('rewire');
const calculateBillTotal = rewire('./app.js').__get__('calculateBillTotal');
test('Function calculateBillTotal must exist', () => {
  expect(calculateBillTotal).not.toBe(undefined);
});
test('Function calculateBillTotal must return something', () => {
  expect(calculateBillTotal(1)).not.toBe(undefined);
});
test('Function calculateBillTotal must return a number', () => {
  expect(typeof calculateBillTotal(1)).toBe('number');
});

test('Function must returns the total amount owed after taxes and tips. Testing with example values.', () => {
  expect(calculateBillTotal(20)).toBe(24.9);
});
test('Function must returns the total amount owed after taxes and tips.', () => {
  expect(calculateBillTotal(36)).toBe(44.82);
});


