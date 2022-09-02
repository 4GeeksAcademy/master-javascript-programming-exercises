const rewire = require('rewire');
const joinArrayOfArrays = rewire('./app.js').__get__('joinArrayOfArrays');
const path = require('path');
const fs = require('fs');
const app_content = fs.readFileSync(
  path.resolve(__dirname, './app.js'),
  'utf8'
);

test('Function joinArrayOfArrays must exist', () => {
  expect(joinArrayOfArrays).not.toBe(undefined);
});

test('Function joinArrayOfArrays must return something', () => {
  expect(
    joinArrayOfArrays([
      [1, 4],
      [true, false],
      ['x', 'y'],
    ])
  ).not.toBe(undefined);
});

test('Function joinArrayOfArrays must return an array', () => {
  expect(
    typeof joinArrayOfArrays([
      [1, 4],
      [true, false],
      ['x', 'y'],
    ])
  ).toBe('object');
});

test('Function must returns a single array containing the elements of the nested arrays.', () => {
  expect(
    joinArrayOfArrays([
      [1, 4],
      [true, false],
      ['x', 'y'],
    ])
  ).toEqual([1, 4, true, false, 'x', 'y']);
});

test('Function must returns a single array containing the elements of the nested arrays. Testing with different values', () => {
  expect(
    joinArrayOfArrays([
      [2, 6],
      [4, true],
    ])
  ).toEqual([2, 6, 4, true]);
});
