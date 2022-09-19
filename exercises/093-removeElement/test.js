const rewire = require('rewire');
const file = rewire('./app.js');
const removeElement = file.__get__('removeElement');

test('Function removeElement should exist', function () {
  expect(removeElement).not.toBe(undefined);
});

test('Function removeElement should return something', function () {
  expect(removeElement([1, 2], 2)).not.toBe(undefined);
});

test('Function removeElement should return an array', function () {
  expect(typeof removeElement([1, 2], 1)).toBe('object');
});

test('Function removeElement should return an array with all the elements except the discarder', function () {
  expect(removeElement([1, 2, 3, 2, 1], 2)).toEqual([1, 3, 1]);
});

test('Function removeElement should return an array with all the elements except the discarder, testing with different values', function () {
  expect(removeElement([6, 4, 4, 5, 1, 0, 4, 2, 3], 4)).toEqual([6, 5, 1, 0, 2, 3,]);
});

test('Function removeElement should return an empty array when receives an empty array', function () {
  expect(removeElement([], 3)).toEqual([]);
});

test('Function removeElement should return an empty array when the discarder matches all the values', function () {
  expect(removeElement([3, 3, 3, 3], 3)).toEqual([]);
});