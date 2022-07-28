const rewire = require('rewire');
const findShortestWordAmongMixedElements = rewire('./app.js').__get__(
  'findShortestWordAmongMixedElements'
);

test('Function findShortestWordAmongMixedElements must exist', () => {
  expect(findShortestWordAmongMixedElements).not.toBe(undefined);
});
test('Function findShortestWordAmongMixedElements must return something', () => {
  expect(findShortestWordAmongMixedElements([4, 'two', 2, 'three'])).not.toBe(
    undefined
  );
});
test('Function findShortestWordAmongMixedElements must return a string', () => {
  expect(
    typeof findShortestWordAmongMixedElements([4, 'two', 2, 'three'])
  ).toBe('string');
});

test('Function must return the shortest string within the array.', () => {

  let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
  expect(output).toBe('two');
});


test('If there are strings with the same length, then it should return the first element found.', () => {
  expect(findShortestWordAmongMixedElements([1, 'i', 2, 'a'])).toBe('i');
});

test('If the given array contains no string, it should return an empty string.', () => {
  expect(findShortestWordAmongMixedElements([1, 2, 3, 4])).toBe('');
});

test('If array is empty must return empty string', () => {
  let output = findShortestWordAmongMixedElements([]);
  expect(output).toBe('');
});

