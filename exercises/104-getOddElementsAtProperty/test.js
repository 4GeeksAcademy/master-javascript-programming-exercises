const rewire = require('rewire');
const getOddElementsAtProperty = rewire('./app.js').__get__(
  'getOddElementsAtProperty'
);

test('Function getOddElementsAtProperty must exist', () => {
  expect(getOddElementsAtProperty).not.toBe(undefined);
});
test('Function getOddElementsAtProperty must return something', () => {
  expect(getOddElementsAtProperty({ key: [1, 2, 3] }, 'key')).not.toBe(
    undefined
  );
});
test('Function getOddElementsAtProperty must return an array', () => {
  expect(Array.isArray(getOddElementsAtProperty({ key: [1, 2, 3] }, 'key'))).toBeTruthy();
});

test('The function must return the odd elements of the array located in the given key.', () => {
  let obj = {
    key: [1, 2, 3, 4, 5],
  };
  let output = getOddElementsAtProperty(obj, 'key');
  expect(output).toEqual([1, 3, 5]);
});

test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: [],
  };
  let output = getOddElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
test('If it contains no odd elements, it should return an empty array.', () => {
  let obj = {
    key: [2, 4],
  };
  let output = getOddElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property in the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: 20,
  };
  let output = getOddElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
test('If the property in the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: {},
  };
  let output = getOddElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
test('If the property in the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: 'test',
  };
  let output = getOddElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If there is no property on the key, it should return an empty array.', () => {
  let obj = {};
  let output = getOddElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
