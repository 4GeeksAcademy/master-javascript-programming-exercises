const rewire = require('rewire');
const getEvenLengthWordsAtProperty = rewire('./app.js').__get__(
  'getEvenLengthWordsAtProperty'
);

test('Function getEvenLengthWordsAtProperty must exist', () => {
  expect(getEvenLengthWordsAtProperty).not.toBe(undefined);
});
test('Function getEvenLengthWordsAtProperty must return something', () => {
  expect(getEvenLengthWordsAtProperty({ key: ['te'] }, 'key')).not.toBe(
    undefined
  );
});
test('Function getEvenLengthWordsAtProperty must return an array', () => {
  expect(Array.isArray(getEvenLengthWordsAtProperty({ key: ['te'] }, 'key'))).toBeTruthy()
});

test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: ['a', 'long', 'game'],
  };
  let output = getEvenLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual(['long', 'game']);
});
test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: [],
  };
  let output = getEvenLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If it does not contain any elements whose length is even, it must return an empty array.', () => {
  let obj = {
    key: ['a', 'b', 'c'],
  };
  let output = getEvenLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property in the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: 3,
  };
  let output = getEvenLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
test('If the property in the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: {},
  };
  let output = getEvenLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
test('If the property in the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: 'a',
  };
  let output = getEvenLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If there is no property on the key, it should return an empty array.', () => {
  let obj = {};
  let output = getEvenLengthWordsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
