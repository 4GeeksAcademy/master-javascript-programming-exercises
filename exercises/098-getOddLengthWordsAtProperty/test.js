const rewire = require('rewire');
const getOddLengthWordsAtProperty = rewire('./app.js').__get__(
  'getOddLengthWordsAtProperty'
);

test('Function getOddLengthWordsAtProperty must exist', () => {
  expect(getOddLengthWordsAtProperty).not.toBe(undefined);
});
test('Function getOddLengthWordsAtProperty must return something', () => {
  expect(getOddLengthWordsAtProperty({ key: ['tes'] })).not.toBe(undefined);
});
test('Function getOddLengthWordsAtProperty must return a string', () => {
  expect(typeof getOddLengthWordsAtProperty({ key: ['tes'] })).toBe('string');
});

test('The function must return only the odd elements on a given key.', () => {
  let obj = {
    key: ['It', 'has', 'some', 'tests'],
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');

  expect(output).toBe(['has', 'tests']);
});

test('The function must return only the odd elements on a given key.', () => {
  let obj = {
    key: ['It', 'apple', 'some', 'flags', 'car'],
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');

  expect(output).not.toBe(['It', 'some']);
});

test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: [],
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');

  expect(output).toBe([]);
});
test('If it contains no odd length elements, it should return an empty array.', () => {
  let obj = {
    key: ['It', 'some'],
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');

  expect(output).toBe([]);
});
test('If the property at the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: 2,
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');

  expect(output).toBe([]);
});
test('If the property at the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: {},
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');

  expect(output).toBe([]);
});
test('If there is no property at the given key, it should return an empty array..', () => {
  let obj = {};
  let output = getOddLengthWordsAtProperty(obj, 'key');

  expect(output).toBe([]);
});
