const rewire = require('rewire');
const computeSummationToN = rewire('./app.js').__get__('computeSummationToN');

test('Function computeSummationToN must exist', () => {
  expect(computeSummationToN).not.toBe(undefined);
});

test('Function computeSummationToN must return something', () => {
  expect(computeSummationToN(1)).not.toBe(undefined);
});
test('Function computeSummationToN must return a number', () => {
  expect(typeof computeSummationToN(1)).toBe('number');
});

test('The function must returns the sum of sequential numbers leading to the given number, starting at 0.', () => {
  expect(computeSummationToN(2)).toBe(3);
});
test('The function must returns the sum of sequential numbers leading to the given number, starting at 0.', () => {
  expect(computeSummationToN(6)).toBe(21);
});
test('The function must returns the sum of sequential numbers leading to the given number, starting at 0.', () => {
  expect(computeSummationToN(8)).toBe(36);
});
