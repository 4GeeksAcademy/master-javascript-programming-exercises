const rewire = require('rewire');
const search = rewire('./app.js').__get__('search');

test('Function search must exist', () => {
  expect(search).not.toBe(undefined);
});

test('Function search must return something', () => {
  expect(search([1, 2], 2)).not.toBe(undefined);
});

test('Function search must return a number', () => {
  expect(typeof search([1, 2], 2)).toBe('number');
});

test('The function must return the index of the number within the array.', () => {
  let arr = [1, 3, 16, 22, 31, 33, 34];

  expect(search(arr, 31)).toBe(4);
});

test('The function must return the index of the number within the array.', () => {
  let arr = [1, 3, 16, 22, 31, 33, 34];

  expect(search(arr, 16)).toBe(2);
});

test('The function must return the index of the number within the array.', () => {
  let arr = [1, 3, 16, 22, 31, 33, 34];

  expect(search(arr, 34)).toBe(6);
});

test("The function must return null if number isn't in the array.", () => {
  let arr = [1, 3, 16, 22, 31, 33, 34];

  expect(search(arr, 38)).toBe(null);
});

test('The function must return the index of the number within the array.', () => {
  let arr = [1, 3, 16, 22, 31, 33, 34];

  expect(search(arr, 3)).toBe(1);
});
