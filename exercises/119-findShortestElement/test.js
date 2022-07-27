const rewire = require('rewire');
const findShortestElement = rewire('./app.js').__get__('findShortestElement');
test('Function findShortestElement must exist', () => {
  expect(findShortestElement).not.toBe(undefined);
});
test('Function findShortestElement must return something', () => {
  expect(findShortestElement(['a', 'ab'])).not.toBe(undefined);
});
test('Function findShortestElement must return a number', () => {
  expect(typeof findShortestElement(['a', 'b'])).toBe('string');
});
test('Function must returns the smallest number within the array.', () => {
  let output = findShortestElement(['a', 'two', 'three']);
  expect(output).toBe('a');
});

test('If there are elements with the same length, then it should return the first element found.', () => {
  expect(findShortestElement(['i', 'w', 'as here'])).toBe('i');
});

test('If array is empty must return empty string', () => {
  let output = findShortestElement([]);
  expect(output).toBe('');
});
