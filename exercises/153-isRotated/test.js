const rewire = require('rewire');
const isRotated = rewire('./app.js').__get__('isRotated');

test('Function isRotated must exist', () => {
  expect(isRotated).not.toBe(undefined);
});

test('Function isRotated must return something', () => {
  expect(isRotated('test', 'tste')).not.toBe(undefined);
});

test('Function isRotated must return a boolean', () => {
  expect(typeof isRotated('test', 'tste')).toBe('boolean');
});

test('The function should return true or false if there is one of the 2 given strings rotated.', () => {
  expect(isRotated('hello world', 'orldhello w')).toBe(true);
});

test('The function should return true or false if there is one of the 2 given strings rotated.', () => {
  expect(isRotated('Test ', 'stet')).toBe(false);
});

test('The function should return true or false if there is one of the 2 given strings rotated.', () => {
  expect(isRotated('Learning is fun', 'Lr aen ngiiufs')).toBe(true);
});

test('The function should return true or false if there is one of the 2 given strings rotated.', () => {
  expect(isRotated('Work from Home', 'kfmoemro Hor W')).toBe(true);
});
