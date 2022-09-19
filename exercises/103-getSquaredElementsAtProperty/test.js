const rewire = require('rewire');
const getSquaredElementsAtProperty = rewire('./app.js').__get__(
  'getSquaredElementsAtProperty'
);

test('Function getSquaredElementsAtProperty must exist', () => {
  expect(getSquaredElementsAtProperty).not.toBe(undefined);
});

test('Function getSquaredElementsAtProperty must return something', () => {
  expect(getSquaredElementsAtProperty({ key: [1, 2, 3] }, 'key')).not.toBe(
    undefined
  );
});

test('Function getSquaredElementsAtProperty must return an array', () => {
  expect(Array.isArray(getSquaredElementsAtProperty({ key: [1, 2, 3] }, 'key'))).toBeTruthy();
});

test('The Function must return an array containing all the squared elements of the array, located at the given key.', () => {
  let obj = {
    key: [2, 1, 5],
  };
  let output = getSquaredElementsAtProperty(obj, 'key');
  expect(output).toEqual([4, 1, 25]);
});

test('The Function must returns an array containing all the squared elements of the array, located at the given key. Testing with different values.', () => {
  let obj = {
    key: [10, 32, 7],
  };
  let output = getSquaredElementsAtProperty(obj, 'key');
  expect(output).toEqual([100, 1024, 49]);
});

test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: [],
  };
  let output = getSquaredElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property in the given key is not an array, it should return an empty array. Testing with a number.', () => {
  let obj = {
    key: 20,
  };
  let output = getSquaredElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property in the given key is not an array, it should return an empty array. Testing with an object.', () => {
  let obj = {
    key: {},
  };
  let output = getSquaredElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property in the given key is not an array, it should return an empty array. Testing with a string.', () => {
  let obj = {
    key: 'a',
  };
  let output = getSquaredElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If there is no property on the key, it should return an empty array.', () => {
  let obj = {};
  let output = getSquaredElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
