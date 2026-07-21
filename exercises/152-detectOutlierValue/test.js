const rewire = require('rewire');
const detectOutlierValue = rewire('./app.js').__get__('detectOutlierValue');

test('Function detectOutlierValue must exist', () => {
  expect(detectOutlierValue).not.toBe(undefined);
});

test('Function detectOutlierValue must return something', () => {
  expect(detectOutlierValue('2 4 7 8 10')).not.toBe(undefined);
});

test('Function detectOutlierValue must return a number', () => {
  expect(typeof detectOutlierValue('2 4 7 8 10')).toBe('number');
});

test('The function must find the position of the only odd or even number. Testing with ("2 4 7 8 10")', () => {
  expect(detectOutlierValue('2 4 7 8 10')).toBe(3);
});

test('The function must find the position of the only odd or even number. Testing with ("1 2 8 4")', () => {
  expect(detectOutlierValue('1 2 8 4')).toBe(1);
});

test('The function must find the position of the only odd or even number. Testing with ("1 10 1 1")', () => {
  expect(detectOutlierValue('1 10 1 1')).toBe(2);
});
