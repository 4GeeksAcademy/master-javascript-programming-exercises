const rewire = require('rewire');
const getAllElementsButNth = rewire('./app.js').__get__('getAllElementsButNth');

test('Function getAllElementsButNth must exist', () => {
  expect(getAllElementsButNth).not.toBe(undefined);
});

test('Function getAllElementsButNth must return something', () => {
  expect(getAllElementsButNth([1], 0)).not.toBe(undefined);
});

test('Function getAllElementsButNth must return an array', () => {
  expect(typeof getAllElementsButNth([1], 0)).toBe('object');
});

test('The function must returns an array with all elements except the nth .', () => {
  expect(getAllElementsButNth(['f', 'c', 'q'], 2)).toEqual(['f', 'c']);
});

test('The function must returns an array with all elements except the nth .', () => {
  expect(getAllElementsButNth(['a', 'b', 'c'], 1)).toEqual(['a', 'c']);
});