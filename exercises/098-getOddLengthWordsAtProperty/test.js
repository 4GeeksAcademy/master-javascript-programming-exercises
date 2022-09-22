const rewire = require('rewire');
const getOddLengthWordsAtProperty = rewire('./app.js').__get__('getOddLengthWordsAtProperty');

test('Function getOddLengthWordsAtProperty must exist', () => {
  expect(getOddLengthWordsAtProperty).not.toBe(undefined);
});

test('Function getOddLengthWordsAtProperty must return something', () => {
  expect(getOddLengthWordsAtProperty({ key: ['tes'] }, "key")).not.toBe(undefined);
});

test('Function getOddLengthWordsAtProperty must return an array', () => {
  expect(typeof getOddLengthWordsAtProperty({ key: ['tes'] }, "key")).toBe('object');
});

test('The function must return only the odd elements on a given key.', () => {
  let obj = {
    key: ['It', 'has', 'some', 'tests'],
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual(['has', 'tests']);
});

test('The function must return only the odd elements on a given key.', () => {
  let obj = {
    key: ['It', 'apples', 'some', 'flags', 'car'],
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual(['flags', 'car']);
});

test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: [],
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If it contains no odd length elements, it should return an empty array.', () => {
  let obj = {
    key: ['It', 'some'],
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property at the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: 2,
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property at the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: {},
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If there is no property at the given key, it should return an empty array..', () => {
  let obj = {};
  let output = getOddLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});