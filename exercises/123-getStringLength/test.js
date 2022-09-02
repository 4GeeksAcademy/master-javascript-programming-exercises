const rewire = require('rewire');
const getStringLength = rewire('./app.js').__get__('getStringLength');

test('Function getStringLength must exist', () => {
  expect(getStringLength).not.toBe(undefined);
});

test('Function getStringLength must return something', () => {
  expect(getStringLength('test')).not.toBe(undefined);
});

test('Function getStringLength must return a number', () => {
  expect(typeof getStringLength('test')).toBe('number');
});

test('Function must returns the length of the string. Testing with example values.', () => {
  expect(getStringLength('hello')).toBe(5);
});

test('Function must returns the length of the string.', () => {
  expect(getStringLength('world wide web')).toBe(14);
});

test('Function must returns the length of the string.', () => {
  expect(getStringLength('python')).toBe(6);
});
