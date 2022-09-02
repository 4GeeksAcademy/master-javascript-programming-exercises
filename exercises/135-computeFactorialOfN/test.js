const rewire = require('rewire');
const computeFactorialOfN = rewire('./app.js').__get__('computeFactorialOfN');

test('Function computeFactorialOfN must exist', () => {
  expect(computeFactorialOfN).not.toBe(undefined);
});

test('Function computeFactorialOfN must return something', () => {
  expect(computeFactorialOfN(1)).not.toBe(undefined);
});

test('Function computeFactorialOfN must return a number', () => {
  expect(typeof computeFactorialOfN(1)).toBe('number');
});

test('Given an integer greater than 0, returns a factorial number. Testing with 3.', () => {
  expect(computeFactorialOfN(3)).toBe(6);
});

test('Given an integer greater than 0, returns a factorial number. Testing with 12.', () => {
  expect(computeFactorialOfN(12)).toBe(479001600);
});

test('Given an integer greater than 0, returns a factorial number. Testing with 4.', () => {
  expect(computeFactorialOfN(4)).toBe(24);
});
