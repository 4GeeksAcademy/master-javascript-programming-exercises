const rewire = require('rewire');
const findMaxLengthOfThreeWords = rewire('./app.js').__get__(
  'findMaxLengthOfThreeWords'
);

test('Function findMaxLengthOfThreeWords must exist', () => {
  expect(findMaxLengthOfThreeWords).not.toBe(undefined);
});
test('Function findMaxLengthOfThreeWords must return something', () => {
  expect(findMaxLengthOfThreeWords('te', 'tes', 'test')).not.toBe(undefined);
});
test('Function findMaxLengthOfThreeWords must return a number', () => {
  expect(typeof findMaxLengthOfThreeWords('te', 'tes', 'test')).toBe('number');
});

test('The function should return the element with more characters.', () => {
  let output = findMaxLengthOfThreeWords('past', 'present', 'future');

  expect(output).toBe(7);
});
test('The function should return the element with more characters.', () => {
  let output = findMaxLengthOfThreeWords('Toyota', 'Honda', 'Chevrolet');
  expect(output).toBe(9);
});
