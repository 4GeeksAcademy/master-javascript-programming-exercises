const rewire = require('rewire');
const addToFrontOfNew = rewire('./app.js').__get__('addToFrontOfNew');

test('Function addToFrontOfNew must exist', () => {
  expect(addToFrontOfNew).not.toBe(undefined);
});
test('Function addToFrontOfNew must return something', () => {
  expect(addToFrontOfNew([1], [2])).not.toBe(undefined);
});
test('Function addToFrontOfNew must return an array', () => {
  expect(typeof addToFrontOfNew([1], [2])).toBe('object');
});

test('The returned array should have one more item than the original one .', () => {
  let input = [1, 2];
  let output = addToFrontOfNew(input, 3);
  expect(output.length > input.length).toBe(true);
});
test('Function returns a new array containing all the elements of the given array, with the given element added to the front.', () => {
  expect(addToFrontOfNew([1, 2], 3)).toEqual([3, 1, 2]);
});
test('Function returns a new array containing all the elements of the given array, with the given element added to the front.', () => {
  expect(addToFrontOfNew([12, 16], 10)).toEqual([10, 12, 16]);
});
