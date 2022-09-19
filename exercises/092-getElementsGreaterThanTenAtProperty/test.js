const rewire = require('rewire');
const getElementsGreaterThan10AtProperty = rewire('./app.js').__get__(
  'getElementsGreaterThan10AtProperty'
);

test('Function getElementsGreaterThan10AtProperty must exist', () => {
  expect(getElementsGreaterThan10AtProperty).not.toBe(undefined);
});

test('Function getElementsGreaterThan10AtProperty must return something', () => {
  expect(getElementsGreaterThan10AtProperty([11])).not.toBe(undefined);
});

test('Function getElementsGreaterThan10AtProperty must return a number', () => {
  expect(typeof getElementsGreaterThan10AtProperty([11])).toBe('object');
});

test('The function must return only the elements of the array that are greater than 10.', () => {
  let obj = {
    key: [1, 20, 30],
  };

  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  expect(output).toEqual([20, 30]);
});

test('The function must return only the elements of the array that are greater than 10. Testing with different values.', () => {
  let obj = {
    key: [1, 60, 30, 90, 12],
  };

  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  expect(output).toEqual([60, 30, 90, 12]);
});

test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: [],
  };

  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the array contains no elements greater than 10, it should return an empty array.', () => {
  let obj = {
    key: [1, 9, 10],
  };

  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property at the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: 2,
  };

  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If there is no property at the key, it should return an empty array.', () => {
  let obj = {};

  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  expect(output).toEqual([]);
});