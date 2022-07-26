const rewire = require('rewire');
const select = rewire('./app.js').__get__('select');

test('Function select must exist', () => {
  expect(select).not.toBe(undefined);
});

test('Function select must return something', () => {
  expect(select(['a'], { a: 1 })).not.toBe(undefined);
});

test('Function select must return an object', () => {
  expect(typeof select(['a'], { a: 1 })).toBe('object');
});

test('The return object must contain the properties specified on the array.', () => {
  let arr = ['a', 'c', 'e'];
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };
  let output = select(arr, obj);
  expect(output).toBe({ a: 1, c: 3 });
});

test('The return object must not contain the properties that are not present in both arr and obj.', () => {
  let arr = ['c', 'e', 'l'];
  let obj = {
    a: 5,
    b: 2,
    c: 4,
    d: 9,
    h: 8,
    l: 12,
  };
  let output = select(arr, obj);

  expect(output['a']).toBe(undefined);
  expect(output['b']).toBe(undefined);
  expect(output['d']).toBe(undefined);
  expect(output['h']).toBe(undefined);
});

test('The return object must not contain the properties that are not present in both arr and obj.', () => {
  let arr = ['c', 'f'];
  let obj = {
    a: 5,
    b: 2,
    c: 4,
  };
  let output = select(arr, obj);
  expect(output).toBe({ c: 4 });
});