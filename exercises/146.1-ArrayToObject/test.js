const rewire = require('rewire');
const transformFirstAndLast = rewire('./app.js').__get__(
  'transformFirstAndLast'
);

test('Function transformFirstAndLast must exist', () => {
  expect(transformFirstAndLast).not.toBe(undefined);
});
test('Function transformFirstAndLast must return something', () => {
  expect(transformFirstAndLast(['Test', 'Done']).not.toBe(undefined));
});
test('Function transformFirstAndLast must return an object {}', () => {
  expect(typeof transformFirstAndLast(['Test', 'Done'])).toBe('object');
});

test('The function must return an object as the first element and the key as the last element in the array.', () => {
  let output = transformFirstAndLast([
    'Queen',
    'Elizabeth',
    'Of Hearts',
    'Beyonce',
  ]);
  expect(output).toEqual({ Queen: 'Beyonce' });
});
test('The function must return an object with the first element of the array as the key and the last value of the array as the value of that key.', () => {
  let output = transformFirstAndLast([
    'Kevin',
    'Bacon',
    'Love',
    'Hart',
    'Costner',
    'Spacey',
  ]);
  expect(output).toEqual({ Kevin: 'Spacey' });
});
