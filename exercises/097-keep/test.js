const rewire = require('rewire');
const keep = rewire('./app.js').__get__('keep');

test('Function keep must exist', () => {
  expect(keep).not.toBe(undefined);
});

test('Function keep must return something', () => {
  expect(keep([1, 2, 3], 2)).not.toBe(undefined);
});

test('Function keep must return an array.', () => {
  expect(typeof keep([1, 2, 1], 1)).toBe('object');
});

test('The function must return only the elements that match the given keeper element.', () => {
  let output = keep([1, 2, 3, 2, 1], 2);
  expect(output).toBe([2, 2]);
});

test('The function must return only the elements that match the given keeper element. Testing with different values.', () => {
  let output = keep([1, 2, 1, 2, 1], 1);
  expect(output).toBe([1, 1, 1]);
});

test('If no elements match, the function keep should return an empty array [].', () => {
  let output = keep([1, 2, 1, 2, 1], 3);
  expect(output).toBe([]);
});