const rewire = require('rewire');
const convertObjectToList = rewire('./app.js').__get__('convertObjectToList');

test('Function convertObjectToList must exist', () => {
  expect(convertObjectToList).not.toBe(undefined);
});
test('Function convertObjectToList must return something', () => {
  expect(
    convertObjectToList({
      name: 'Test',
      age: 1,
      role: 'Tester',
    })
  ).not.toBe(undefined);
});
test('Function convertObjectToList must return an array', () => {
  expect(
    typeof convertObjectToList({
      name: 'Test',
      age: 1,
      role: 'Tester',
    })
  ).toBe('object');
});

test('The function should convert a literal object to an array and return all in to an array', () => {
  let output = convertObjectToList({
    name: 'Holly',
    age: 35,
    role: 'producer',
  });
  expect(output).toEqual([
    ['name', 'Holly'],
    ['age', 35],
    ['role', 'producer'],
  ]);
});
test('The function should convert a literal object to an array and return all in to an array', () => {
  let output = convertObjectToList({
    name: 'Johnny',
    age: 57,
    role: 'actor',
  });
  expect(output).toEqual([
    ['name', 'Johnny'],
    ['age', 57],
    ['role', 'actor'],
  ]);
});
