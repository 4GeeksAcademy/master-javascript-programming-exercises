const rewire = require('rewire');
const fromListToObject = rewire('./app.js').__get__('fromListToObject');

test('Function fromListToObject must exist', () => {
  expect(fromListToObject).not.toBe(undefined);
});

test('Function fromListToObject must return something', () => {
  expect(
    fromListToObject([
      ['test1', 'test2'],
      ['test2', 'test3'],
    ])
  ).not.toBe(undefined);
});

test('Function fromListToObject must return an object {}', () => {
  expect(
    typeof fromListToObject([
      ['test1', 'test2'],
      ['test2', 'test3'],
    ])
  ).toBe('object');
});

test('Function must return an object with each pair of elements as key-value.', () => {
  let output = fromListToObject([
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964],
  ]);
  expect(output).toEqual({ make: 'Ford', model: 'Mustang', year: 1964 });
});

test('Function must return an object with each pair of elements as key-value. Testing with different values.', () => {
  let output = fromListToObject([
    ['name', 'Jerry'],
    ['pet', 'Cat'],
  ]);
  expect(output).toEqual({ name: 'Jerry', pet: 'Cat' });
});
