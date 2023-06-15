const rewire = require('rewire');
const findMinLengthOfThreeWords = rewire('./app.js').__get__('findMinLengthOfThreeWords');

test('Function findMinLengthOfThreeWords must exist', () => {
  expect(findMinLengthOfThreeWords).not.toBe(undefined);
});

test('Function findMinLengthOfThreeWords must return something', () => {
  expect(findMinLengthOfThreeWords('past', 'present', 'future')).not.toBe(undefined);
});

test('Function findMinLengthOfThreeWords must return a number', () => {
  expect(typeof findMinLengthOfThreeWords('test', 't', 'est')).toBe('number');
});

test('The function should return the element with less characters', () => {
  let output = findMinLengthOfThreeWords('past', 'present', 'future');
  expect(output).toBe(4);
});

test('The function should return the element with less characters. Testing with different values', () => {
  let output = findMinLengthOfThreeWords('Toyota', 'Honda', 'Chevrolet');
  expect(output).toBe(5);
});
