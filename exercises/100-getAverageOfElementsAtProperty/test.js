const rewire = require('rewire');
const getAverageOfElementsAtProperty = rewire('./app.js').__get__('getAverageOfElementsAtProperty');

test('Function getAverageOfElementsAtProperty must exist', () => {
  expect(getAverageOfElementsAtProperty).not.toBe(undefined);
});

test('Function getAverageOfElementsAtProperty must return something', () => {
  expect(getAverageOfElementsAtProperty({ key: [4, 8, 6] }, 'key')).not.toBe(undefined);
});

test('Function getAverageOfElementsAtProperty must return a number', () => {
  expect(typeof getAverageOfElementsAtProperty({ key: [4, 8, 6] }, 'key')).toBe('number');
});

test('If array is empty must return 0', () => {
  let obj = {
    key: [],
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  expect(output).toBe(0);
});

test('If the property at the given key is not an array, it should return 0', () => {
  let obj = {
    key: 2,
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  expect(output).toBe(0);
});

test('If the property at the given key is not an array, it should return 0', () => {
  let obj = {
    key: {},
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  expect(output).toBe(0);
});

test('If there is no property at the given key, it should return 0', () => {
  let obj = {};
  let output = getAverageOfElementsAtProperty(obj, "key");
  expect(output).toBe(0);
});

test('Fuction returns the average of array elements.', () => {
  let obj = {
    key: [4, 8, 6],
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  expect(output).toBe(6);
});

test('Fuction returns the average of array elements. Testing with different values.', () => {
  let obj = {
    key: [10, 9, 7],
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  expect(output).toBe(8.666666666666666);
});
