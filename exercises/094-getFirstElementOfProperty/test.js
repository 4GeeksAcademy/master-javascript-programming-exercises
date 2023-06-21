const rewire = require('rewire');
const getFirstElementOfProperty = rewire('./app.js').__get__(
  'getFirstElementOfProperty'
);

test('Function getFirstElementOfProperty must exist', () => {
  expect(getFirstElementOfProperty).not.toBe(undefined);
});

test('Function getFirstElementOfProperty must return something', () => {
  let obj = {
    key: [1, 2, 4]
  };
  expect(getFirstElementOfProperty(obj, "key")).not.toBe(undefined);
});

test('Function getFirstElementOfProperty must return a number', () => {
  let obj = {
    key: [1, 2, 4]
  };
  expect(typeof getFirstElementOfProperty(obj, "key")).toBe('number');
});

test('The function must return the first element of the array located at a given key', () => {
  let obj = {
    key: [1, 2, 4],
  };
  let output = getFirstElementOfProperty(obj, 'key');
  expect(output).toBe(1);
});

test('The function must return the first element of the array located at a given key. Testing with different values', () => {
  let obj = {
    key: [9, 8, 6, 0, 2, 4],
  };
  let output = getFirstElementOfProperty(obj, 'key');
  expect(output).toBe(9);
});

test('If the array is empty, it should return undefined', () => {
  let obj = {
    key: [],
  };
  let output = getFirstElementOfProperty(obj, 'key');
  expect(output).toBe(undefined);
});

test('If the property at the given key is not an array, it should return undefined', () => {
  let obj = {
    key: 1,
  };
  let output = getFirstElementOfProperty(obj, 'key');
  expect(output).toBe(undefined);
});

test('If there is no property at the key, it should return undefined', () => {
  let obj = {};
  let output = getFirstElementOfProperty(obj, 'key');
  expect(output).toBe(undefined);
});
