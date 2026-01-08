const rewire = require('rewire');
const getProductOfAllElementsAtProperty = rewire('./app.js').__get__(
  'getProductOfAllElementsAtProperty'
);

test('Function getProductOfAllElementsAtProperty must exist', () => {
  expect(getProductOfAllElementsAtProperty).not.toBe(undefined);
});

test('Function getProductOfAllElementsAtProperty must return something', () => {
  expect(
    getProductOfAllElementsAtProperty(
      {
        key: [1, 2, 3, 4],
      },
      'key'
    )
  ).not.toBe(undefined);
});

test('Function getProductOfAllElementsAtProperty must return a number', () => {
  expect(
    typeof getProductOfAllElementsAtProperty(
      {
        key: [1, 2, 3, 4],
      },
      'key'
    )
  ).toBe('number');
});

test('Function must return the product of all elements in the array located at the key', () => {
  let obj = {
    key: [1, 2, 3, 4],
  };
  let output = getProductOfAllElementsAtProperty(obj, 'key');
  expect(output).toBe(24);
});

test('Function must return the product of all elements in the array located at the key. Testing with different values', () => {
  let obj = {
    key: [1, 2, 3],
  };
  let output = getProductOfAllElementsAtProperty(obj, 'key');
  expect(output).toBe(6);
});

test('If the array is empty, it should return 0', () => {
  let obj = {
    key: [],
  };
  let output = getProductOfAllElementsAtProperty(obj, 'key');
  expect(output).toBe(0);
});

test('If the property in the given key is not an array, it should return 0', () => {
  let obj = {
    key: 3,
  };
  let output = getProductOfAllElementsAtProperty(obj, 'key');
  expect(output).toBe(0);
});

test('If there is no property on the key, it should return 0', () => {
  let obj = {};
  let output = getProductOfAllElementsAtProperty(obj, 'key');
  expect(output).toBe(0);
});

