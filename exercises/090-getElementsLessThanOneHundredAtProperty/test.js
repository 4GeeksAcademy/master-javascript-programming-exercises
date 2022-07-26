const rewire = require('rewire');
const getElementsLessThan100AtProperty = rewire('./app.js').__get__(
  'getElementsLessThan100AtProperty'
);

test('Function getElementsLessThan100AtProperty must exist', () => {
  expect(getElementsLessThan100AtProperty).not.toBe(undefined);
});

test('Function getElementsLessThan100AtProperty must return something', () => {
  expect(getElementsLessThan100AtProperty({ key: [20] }, 'key')).not.toBe(undefined);
});

test('Function getElementsLessThan100AtProperty must return an array', () => {
  expect(typeof getElementsLessThan100AtProperty({ key: [20] }, 'key')).toBe('object');
});

test('The function must return every element less than 100 on a given key.', () => {
  let obj = {
    key: [1000, 20, 50, 500],
  };

  let output = getElementsLessThan100AtProperty(obj, 'key');
  expect(output).toBe([20, 50]);
});

test('The function must return every element less than 100 on a given key.', () => {
  let obj = {
    key: [10, 50, 10, 20, 6, 10, 98, 10, 100],
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  expect(output).toBe([10, 50, 10, 20, 6, 10, 98, 10]);
});

test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: [],
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  expect(output).toBe([]);
});

test('If the array contains no elements less than 100, it should return an empty array.', () => {
  let obj = {
    key: [100, 101, 200],
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  expect(output).toBe([]);
});

test('If the property at the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: { a: 10 },
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  expect(output).toBe([]);
});

test('If there is no property at the key, it should return an empty array.', () => {
  let obj = {};
  let output = getElementsLessThan100AtProperty(obj, 'key');
  expect(output).toBe([]);
});
