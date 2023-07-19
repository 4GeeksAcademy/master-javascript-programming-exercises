const rewire = require('rewire');

const findSmallestNumberAmongMixedElements = rewire('./app.js').__get__(
  'findSmallestNumberAmongMixedElements'
);

test('Function findSmallestNumberAmongMixedElements must exist', () => {
  expect(findSmallestNumberAmongMixedElements).not.toBe(undefined);
});

test('Function findSmallestNumberAmongMixedElements must return something', () => {
  expect(findSmallestNumberAmongMixedElements(['a', 'b', 1, 2])).not.toBe(
    undefined
  );
});

test('Function findSmallestNumberAmongMixedElements must return a number', () => {
  expect(typeof findSmallestNumberAmongMixedElements(['a', 'b', 1, 2])).toBe(
    'number'
  );
});

test('Function must return the smallest number within the array', () => {
  let output = findSmallestNumberAmongMixedElements([
    4,
    'lincoln',
    9,
    'octopus',
  ]);
  expect(output).toBe(4);

  output = findSmallestNumberAmongMixedElements(['a', 'b', 2, 3, 'clear']);
  expect(output).toBe(2);
});

test('If the given array contains no number elements, it should return 0', () => {
  let output = findSmallestNumberAmongMixedElements(['a', 'b', 'clear']);
  expect(output).toBe(0);
});

test('If the array is empty, it must return 0', () => {
  let output = findSmallestNumberAmongMixedElements([]);
  expect(output).toBe(0);
});
