const rewire = require('rewire');
const areValidCredentials = rewire('./app.js').__get__('areValidCredentials');

test('Function areValidCredentials must exist', () => {
  expect(areValidCredentials).not.toBe(undefined);
});
test('Function areValidCredentials must return something', () => {
  expect(areValidCredentials('test', 'test')).not.toBe(undefined);
});
test('Function areValidCredentials must return a boolean', () => {
  expect(typeof areValidCredentials('test', 'test')).toBe('object');
});

test('The name should have more than 3 characters. and, the password is at least 8 characters long', () => {
  let output = areValidCredentials('Ritu', 'mylongpassword');
  expect(output).toBe(true);
});
test('The name should have more than 3 characters. and, the password is at least 8 characters long', () => {
  let output = areValidCredentials('ko', '123321');
  expect(output).toBe(false);
});
