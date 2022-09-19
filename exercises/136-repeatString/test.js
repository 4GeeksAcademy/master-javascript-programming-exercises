const rewire = require('rewire');
const repeatString = rewire('./app.js').__get__('repeatString');

test('Function repeatString must exist', () => {
  expect(repeatString).not.toBe(undefined);
});

test('Function repeatString must return something', () => {
  expect(repeatString('test', 2)).not.toBe(undefined);
});

test('Function repeatString must return a string', () => {
  expect(typeof repeatString('test', 2)).toBe('string');
});

test('Given a string and a number, it returns the given string as many times as the given number. Testing with example values.', () => {
  expect(repeatString('code', 3)).toBe('codecodecode');
});

test('Given a string with numerical values and a number, it returns the given string as many times as the given number.', () => {
  expect(repeatString('12', 3)).toBe('121212');
});

test('Given a string and a number, it returns the given string as many times as the given number.', () => {
  expect(repeatString('muda', 6)).toBe('mudamudamudamudamudamuda');
});
