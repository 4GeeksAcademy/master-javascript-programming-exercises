const rewire = require('rewire');
const getLongestOfThreeWords = rewire('./app.js').__get__(
  'getLongestOfThreeWords'
);

test('Function getLongestOfThreeWords must exist', () => {
  expect(getLongestOfThreeWords).not.toBe(undefined);
});
test('Function getLongestOfThreeWords must return something', () => {
  expect(getLongestOfThreeWords('test', 'tes', 'te')).not.toBe(undefined);
});
test('Function getLongestOfThreeWords must return a string', () => {
  expect(typeof getLongestOfThreeWords('test', 'tes', 'te')).toBe('string');
});

test('Given 3 words, return the longest of the three words.', () => {
  expect(getLongestOfThreeWords('small', 'medium', 'large')).toBe('medium');
});

test('If they are the same length, it should return the first word found.', () => {
  expect(getLongestOfThreeWords('these', 'three', 'words')).toBe('these');
});
