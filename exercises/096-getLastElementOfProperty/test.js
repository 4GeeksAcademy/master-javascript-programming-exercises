const rewire = require('rewire');
const getLastElementOfProperty = rewire('./app.js').__get__(
  'getLastElementOfProperty'
);

test('Function getLastElementOfProperty must exist', () => {
  expect(getLastElementOfProperty).not.toBe(undefined);
});

test('Function getLastElementOfProperty must return something', () => {
  expect(getLastElementOfProperty({ key: [1, 2] }, 'key')).not.toBe(undefined);
});
test('Function getLastElementOfProperty must return a number', () => {
  expect(typeof getLastElementOfProperty({ key: [1, 2] }, 'key')).toBe(
    'number'
  ) ||
    expect(typeof getLastElementOfProperty({ key: [1, 'test'] }, 'key')).toBe(
      'string'
    ) ||
    expect(typeof getLastElementOfProperty({ key: [1, { a: 2 }] }, 'key')).toBe(
      'object'
    );
});

test('The function must return the last element of the array located at a given key. It can be a number.', () => {
  let obj = {
    key: [1, 2, 5],
  };
  let output = getLastElementOfProperty(obj, 'key');

  expect(output).toBe(5);
});

test('The function must return the last element of the array located at a given key. It can be a string.', () => {
  let obj = {
    key: [1, 2, 5, 7, 4, 3, 'test'],
  };
  let output = getLastElementOfProperty(obj, 'key');

  expect(output).toBe('test');
});
test('The function must return the last element of the array located at a given key. It can be an object.', () => {
  let obj = {
    key: [1, 2, 5, 7, 4, 3, { a: 8 }],
  };
  let output = getLastElementOfProperty(obj, 'key');

  expect(output).toBe({ a: 8 });
});
test('The function must return the last element of the array located at a given key. It can be an array.', () => {
  let obj = {
    key: [1, 2, 5, 7, 4, 3, [6, 8]],
  };
  let output = getLastElementOfProperty(obj, 'key');

  expect(output).toBe([6, 8]);
});

test('If the array is empty, it should return undefined.', () => {
  let obj = {
    key: [],
  };
  let output = getLastElementOfProperty(obj, 'key');

  expect(output).toBe(undefined);
});
test('If the property at the given key is not an array, it should return undefined.', () => {
  let obj = {
    key: 2,
  };
  let output = getLastElementOfProperty(obj, 'key');

  expect(output).toBe(undefined);
});
test('If the property at the given key is not an array, it should return undefined.', () => {
  let obj = {
    key: {},
  };
  let output = getLastElementOfProperty(obj, 'key');

  expect(output).toBe([]);
});
test('If there is no property at the key, it should return undefined.', () => {
  let obj = {};
  let output = getLastElementOfProperty(obj, 'key');

  expect(output).toBe(undefined);
});
