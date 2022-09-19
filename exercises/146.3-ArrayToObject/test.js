const rewire = require('rewire');
const transformEmployeeData = rewire('./app.js').__get__(
  'transformEmployeeData'
);

test('Function transformEmployeeData must exist', () => {
  expect(transformEmployeeData).not.toBe(undefined);
});

test('Function transformEmployeeData must return something', () => {
  expect(
    transformEmployeeData([
      ['test', 'test'],
      ['test', 'test'],
    ])
  ).not.toBe(undefined);
});

test('Function transformEmployeeData must return an object {}', () => {
  expect(
    typeof transformEmployeeData([
      ['test', 'test'],
      ['test', 'test'],
    ])
  ).toBe('object');
});

test('The function must transform employee data from one format to { key: value }.', () => {
  let output = transformEmployeeData([
    [
      ['firstName', 'Joe'],
      ['lastName', 'Blow'],
      ['age', 42],
      ['role', 'clerk'],
    ],
    [
      ['firstName', 'Mary'],
      ['lastName', 'Jenkins'],
      ['age', 36],
      ['role', 'manager'],
    ],
  ]);
  expect(output).toEqual([
    { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
    { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
  ]);
});

test('The function must transform employee data from one format to { key: value }.', () => {
  let output = transformEmployeeData([
    [
      ['firstName', 'Johnny'],
      ['lastName', 'Depp'],
      ['age', 57],
      ['role', 'actor'],
    ],
  ]);
  expect(output).toEqual([
    { firstName: 'Johnny', lastName: 'Depp', age: 57, role: 'actor' },
  ]);
});
