const rewire = require('rewire');
const filterOddLengthWords = rewire('./app.js').__get__('filterOddLengthWords');

test('Function filterOddLengthWords must exist', () => {
  expect(filterOddLengthWords).not.toBe(undefined);
});

test('Function filterOddLengthWords must return something', () => {
  expect(filterOddLengthWords(['you'])).not.toBe(undefined);
});

test('Function filterOddLengthWords must return an array', () => {
  expect(Array.isArray(filterOddLengthWords(['you']))).toBeTruthy();
});

test('The function should return odd strings.', () => {
  let output = filterOddLengthWords(['you', 'can', 'do', 'it']);
  expect(output).toEqual(['you', 'can']);
});

test('The function should return odd strings.', () => {
  let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
  expect(output).toEqual(['there', 'now']);
});

