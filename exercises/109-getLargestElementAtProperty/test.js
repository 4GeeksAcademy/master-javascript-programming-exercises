const rewire = require('rewire');
const getLargestElementAtProperty = rewire('./app.js').__get__(
  'getLargestElementAtProperty'
);

test('Function getLargestElementAtProperty must exist', () => {
  expect(getLargestElementAtProperty).not.toBe(undefined);
});

test('Function getLargestElementAtProperty must return something', () => {
  expect(getLargestElementAtProperty({ key: [1, 2, 3] }, 'key')).not.toBe(
    undefined
  );
});

test('Function getLargestElementAtProperty must return a number', () => {
  expect(typeof getLargestElementAtProperty({ key: [1, 2, 3] }, 'key')).toBe(
    'number'
  );
});

test('The function must returns the largest element of the array located in the key.', () => {
  let obj = {
    key: [1, 2, 4],
  };
  let output = getLargestElementAtProperty(obj, 'key');
  expect(output).toBe(4);
});

test('The function must returns the largest element of the array located in the key. Testing with different values.', () => {
  let obj = {
    key: [5, 4, 15],
  };
  let output = getLargestElementAtProperty(obj, 'key');
  expect(output).toBe(15);
});

test('If the array is void, it should return an empty array `[]`.', () => {
  let obj = {
    key: [],
  };
  let output = getLargestElementAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property in the given key is not an array, it should return an empty array `[]`.', () => {
  let obj = {
    key: {},
  };
  let output = getLargestElementAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property in the given key is a number, it should return an empty array `[]`.', () => {
  let obj = {
    key: 9,
  };
  let output = getLargestElementAtProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If there is no property on the key, it should return an empty array `[]`.', () => {
  let obj = {};
  let output = getLargestElementAtProperty(obj, 'key');
  expect(output).toEqual([]);
});
