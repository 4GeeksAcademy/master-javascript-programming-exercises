const rewire = require('rewire');
const filterEvenLengthWords = rewire('./app.js').__get__(
  'filterEvenLengthWords'
);

test('Function filterEvenLengthWords must exist', () => {
  expect(filterEvenLengthWords).not.toBe(undefined);
});

test('Function filterEvenLengthWords must return something', () => {
  expect(filterEvenLengthWords(['some', 'text'])).not.toBe(undefined);
});

test('Function filterEvenLengthWords must return an array', () => {
  expect(Array.isArray(filterEvenLengthWords(['some', 'text']))).toBeTruthy()
});

test('The function should return only the elements of the array whose length is an even number.', () => {
  let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
  expect(output).toEqual(['word', 'word']);
});

test('The function should return only the elements of the array whose length is an even number. Testing with different values.', () => {
  let output = filterEvenLengthWords(['tres', 'tigres', 'tristes']);
  expect(output).toEqual(['tres', 'tigres']);
});

test("If the given array didn't contains an even length word, the function should return an empty array.", () => {
  let output = filterEvenLengthWords(['tre', 'tig', 't']);
  expect(output).toEqual([]);
});

test('If the array is empty, it should return an empty array.', () => {
  let output = filterEvenLengthWords([]);
  expect(output).toEqual([]);
});
