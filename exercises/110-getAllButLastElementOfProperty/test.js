const rewire = require('rewire');
const getAllButLastElementOfProperty = rewire('./app.js').__get__(
  'getAllButLastElementOfProperty'
);
test('Function getAllButLastElementOfProperty must exist', () => {
  expect(getAllButLastElementOfProperty).not.toBe(undefined);
});
test('Function getAllButLastElementOfProperty must return something', () => {
  expect(getAllButLastElementOfProperty({ key: [1, 2] }, 'key')).not.toBe(
    undefined
  );
});
test('Function getAllButLastElementOfProperty must return an array', () => {
  expect(Array.isArray(getAllButLastElementOfProperty({ key: [1, 2] }, 'key'))).toBeTruthy();
});

test('The function must returns an array that contains all but the last element of the array located at the given Key.', () => {
  
  let obj = {
    key: [3, 2, 1],
  };
  let output = getAllButLastElementOfProperty(obj, 'key');
  expect(output).toEqual([3, 2]);
});

test('If the array is empty, it should return an empty array.', () => {
  
  let obj = {
    key: [],
  };
  let output = getAllButLastElementOfProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If the property in the given key is not an array, it should return an empty array.', () => {
  
  let obj = {
    key: 9,
  };
  let output = getAllButLastElementOfProperty(obj, 'key');
  expect(output).toEqual([]);
});

test('If there is no property on the key, it should return an empty array.', () => {
  
  let obj = {};
  let output = getAllButLastElementOfProperty(obj, 'key');
  expect(output).toEqual([]);
});
