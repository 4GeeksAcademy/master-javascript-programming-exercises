const rewire = require('rewire');
const getNthElementOfProperty = rewire('./app.js').__get__('getNthElementOfProperty');

test('Function getNthElementOfProperty must exist', () => {
  expect(getNthElementOfProperty).not.toBe(undefined);
});

test('Function getNthElementOfProperty must return something', () => {
  let obj = {
    key: [1, 2, 6]
  };
  expect(getNthElementOfProperty(obj, 'key', 1)).not.toBe(undefined);
});

test('The function must return ONLY the nth element located at a given key in the given array', () => {
  let obj1 ={
    key: [1, 2]
  }
  let obj2 ={
    key: [1, 'test']
  }
  let obj3 ={
    key: [1, { a: 1 }]
  }
  expect(typeof getNthElementOfProperty(obj1, 'key', 1)).toBe('number')
  expect(typeof getNthElementOfProperty(obj2, 'key', 1)).toBe('string')
  expect(typeof getNthElementOfProperty(obj3, 'key', 1)).toBe('object');
});

test('The function must return ONLY the nth element located at a given key in the given array. It can be a number', () => {
  let obj = {
    key: [1, 2, 6],
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  expect(output).toBe(2);
});

test('The function must return ONLY the nth element located at a given key in the given array. It can be an object', () => {
  let obj = {
    key: [4, 6, { a: 1 }],
  };
  let output = getNthElementOfProperty(obj, 'key', 2);
  expect(output).toEqual({ a: 1 });
});

test('The function must return ONLY the nth element located at a given key in the given array. It can be a string', () => {
  let obj = {
    key: [1, 2, 'test'],
  };
  let output = getNthElementOfProperty(obj, 'key', 2);
  expect(output).toBe('test');
});

test('If the array is empty, it should return undefined', () => {
  let obj = {
    key: [],
  };
  let output = getNthElementOfProperty(obj, 'key', 3);

  expect(output).toBe(undefined);
});

test("If there's no property at the given key the function should return undefined", () => {
  let obj = {};
  let output = getNthElementOfProperty(obj, 'key', 3);
  expect(output).toBe(undefined);
});

test('If n is out of range, it should return undefined', () => {
  let obj = {
    key: [1, 2],
  };
  let output = getNthElementOfProperty(obj, 'key', 3);
  expect(output).toBe(undefined);
});

test('If the property at the given key is not an array, it should return undefined', () => {
  let obj = {
    key: 2,
  };
  let output = getNthElementOfProperty(obj, 'key', 3);
  expect(output).toBe(undefined);
});

test('If the property at the given key is not an array, it should return undefined. Testing with different values', () => {
  let obj = {
    key: {},
  };
  let output = getNthElementOfProperty(obj, 'key', 2);
  expect(output).toBe(undefined);
});
