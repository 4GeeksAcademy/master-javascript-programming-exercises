const rewire = require('rewire');
const isIsogram = rewire('./app.js').__get__('isIsogram');

test('Function isIsogram must exist', () => {
  expect(isIsogram).not.toBe(undefined);
});

test('Function isIsogram must return something', () => {
  expect(isIsogram('Test')).not.toBe(undefined);
});

test('Function isIsogram must return a boolean', () => {
  expect(typeof isIsogram('Test')).toBe('boolean');
});

test('Function must return true or false if no letters are repeated. Testing with Dermatoglyphics.', () => {
  expect(isIsogram('Dermatoglyphics')).toBe(true);
});

test('Function must return true or false if no letters are repeated. Testing with Camile.', () => {
  expect(isIsogram('Camile')).toBe(true);
});

test('Function must return true or false if no letters are repeated. Testing with Camille.', () => {
  expect(isIsogram('Camille')).toBe(false);
});
