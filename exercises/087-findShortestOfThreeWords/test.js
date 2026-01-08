const rewire = require('rewire');
const findShortestOfThreeWords = rewire('./app.js').__get__(
  'findShortestOfThreeWords'
);

test('Function findShortestOfThreeWords must exist', () => {
  expect(findShortestOfThreeWords).not.toBe(undefined);
});

test('Function findShortestOfThreeWords must return something', () => {
  expect(findShortestOfThreeWords('test', 'tes', 'te')).not.toBe(undefined);
});

test('Function findShortestOfThreeWords must return a string', () => {
  expect(typeof findShortestOfThreeWords('test', 'tes', 'te')).toBe('string');
});

test('Given 3 words, return the shortest of the three words', () => {
  expect(findShortestOfThreeWords('a', 'two', 'three')).toBe('a');
});

test('Given 3 words, return the shortest of the three words. Testing with different values', () => {
  expect(findShortestOfThreeWords('small', 'medium', 'large')).toBe('small');
});

test('If they are the same length, it should return the first word found', () => {
  expect(findShortestOfThreeWords('three', 'tigers', 'three', 'tigers')).toBe(
    'three'
  );
});
