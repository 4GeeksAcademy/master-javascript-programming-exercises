const rewire = require('rewire');
const getEvenElementsAtProperty = rewire('./app.js').__get__(
  'getEvenElementsAtProperty'
);

test('Function getEvenElementsAtProperty must exist', () => {
  expect(getEvenElementsAtProperty).not.toBe(undefined);
});
test('Function getEvenElementsAtProperty must return something', () => {
  expect(getEvenElementsAtProperty({ key: [2, 4, 5] }, 'key')).not.toBe(
    undefined
  );
});
test('Function getEvenElementsAtProperty must return an array', () => {
  expect(Array.isArray(getEvenElementsAtProperty({ key: [2, 4, 5] }, 'key'))).toBeTruthy()
});

test('Must returns an array containing all the even elements of the array located at the given key.', () => {
  let obj = {
    key: [1000, 11, 50, 17],
  };
  let output = getEvenElementsAtProperty(obj, 'key');
  expect(output).toEqual([1000, 50]);
});

test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: [],
  };
  let output = getEvenElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the array does not contain even elements, it should return an empty array.', () => {
  let obj = {
    key: [11, 17, 7],
  };
  let output = getEvenElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property in the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: 3,
  };
  let output = getEvenElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If there is no property on the key, it should return an empty array.', () => {
  let obj = {};
  let output = getEvenElementsAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
