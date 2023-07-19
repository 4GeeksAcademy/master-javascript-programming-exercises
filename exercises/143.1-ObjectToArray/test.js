const rewire = require('rewire');
const getAllKeys = rewire('./app.js').__get__('getAllKeys');

test('Function getAllKeys must exist', () => {
  expect(getAllKeys).not.toBe(undefined);
});

test('Function getAllKeys must return something', () => {
  expect(
    getAllKeys({
      name: 'Test',
      age: 1,
      role: 'Tester',
    })
  ).not.toBe(undefined);
});

test('Function getAllKeys must return an array', () => {
  expect(
    typeof getAllKeys({
      name: 'Test',
      age: 1,
      role: 'Tester',
    })
  ).toBe('object');
});

test('The function must return an array of all keys on the entry object', () => {
  let output = getAllKeys({
    name: 'Sam',
    age: 25,
    hasPets: true,
  });
  expect(output).toEqual(['name', 'age', 'hasPets']);
});

test('The function must return an array of all keys on the entry object. Testing with different values', () => {
  let output = getAllKeys({
    name: 'Johnny',
    age: 57,
    role: 'actor',
  });
  expect(output).toEqual(['name', 'age', 'role']);
});
