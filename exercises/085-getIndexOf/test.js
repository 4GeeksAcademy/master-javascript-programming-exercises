const rewire = require('rewire');
const getIndexOf = rewire('./app.js').__get__('getIndexOf');

test('Function getIndexOf must exist', () => {
  expect(getIndexOf).not.toBe(undefined);
});

test('Function getIndexOf must return something', () => {
  expect(getIndexOf('e', 'test')).not.toBe(undefined);
});

test('Function getIndexOf must return a number', () => {
  expect(typeof getIndexOf('e', 'test')).toBe('number');
});

test('The funtion must return the first position (index) of the given character in the given string.', () => {
  let output = getIndexOf('a', 'I am a hacker');
  expect(output).toBe(2);
});

test('The funtion must return the first position (index) of the given character in the given string. Testing with different values.', () => {
  let output = getIndexOf('c', 'The world is changing');
  expect(output).toBe(13);
});

test('The function must return -1 If the character does not exist in the string', () => {
  let output = getIndexOf('z', 'hello');
  expect(output).toBe(-1);
});
