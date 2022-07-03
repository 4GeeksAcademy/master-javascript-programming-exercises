const rewire = require('rewire');
const addToBackOfNew = rewire('./app.js').__get__('addToBackOfNew');

test('Function addToBackOfNew must exist', () => {
  expect(addToBackOfNew).not.toBe(undefined);
});
test('Function addToBackOfNew must return something', () => {
  expect(addToBackOfNew([1], [2])).not.toBe(undefined);
});
test('Function addToBackOfNew must return an array', () => {
  expect(typeof addToBackOfNew([1], [2])).toBe('object');
});

test('The returned array should have one more item than the original one .', () => {
  let input = [1, 2];
  let output = addToBackOfNew(input, 3);
  expect(output.length > input.length).toBe(true);
});

test('The returned array should have the new number as the last element of the array.', () => {
  expect(addToBackOfNew([1, 2], 3)).toEqual([1, 2, 3]);
});
test('The returned array should have the new number as the last element of the array.', () => {
  expect(addToBackOfNew([10, 12], 15)).toEqual([10, 12, 15]);
});
