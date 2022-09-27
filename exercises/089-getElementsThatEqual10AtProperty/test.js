const rewire = require('rewire');
const getElementsThatEqual10AtProperty = rewire('./app.js').__get__(
  'getElementsThatEqual10AtProperty'
);

test('Function getElementsThatEqual10AtProperty must exist', () => {
  expect(getElementsThatEqual10AtProperty).not.toBe(undefined);
});

test('Function getElementsThatEqual10AtProperty must return something', () => {
  expect(getElementsThatEqual10AtProperty({ key: [10] }, 'key')).not.toBe(undefined);
});

test('Function getElementsThatEqual10AtProperty must return an array', () => {
  expect(typeof getElementsThatEqual10AtProperty({ key: [10] }, 'key')).toBe('object');
});

test('The function must return every element equal to 10 on a given key.', () => {
  let obj = {
    key: [1000, 10, 50, 10],
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  expect(output).toEqual([10, 10]);
});

test('The function must return every element equal to 10 on a given key.', () => {
  let obj = {
    key: [1000, 10, 50, 10, 20, 6, 10, 98, 10],
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  expect(output).toEqual([10, 10, 10, 10]);
});

test('If the array is empty, it should return an empty array.', () => {
  let obj = {
    key: [],
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the array contains no elements equal to 10, it should return an empty array.', () => {
  let obj = {
    key: [11, 9, 20, 100],
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property at the given key is not an array, it should return an empty array.', () => {
  let obj = {
    key: { a: 10 },
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If there is no property at the key, it should return an empty array.', () => {
  let obj = {};
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  expect(output).toEqual([]);
});
