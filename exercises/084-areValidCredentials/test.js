const rewire = require('rewire');
const areValidCredentials = rewire('./app.js').__get__('areValidCredentials');

test('Function areValidCredentials must exist', () => {
  expect(areValidCredentials).not.toBe(undefined);
});

test('Function areValidCredentials must return something', () => {
  expect(areValidCredentials('test', 'test')).not.toBe(undefined);
});

test('Function areValidCredentials must return a boolean', () => {
  expect(typeof areValidCredentials('test', 'test')).toBe('boolean');
});

test('The name should have more than 3 characters. and, the password at least 8 characters long. Testing with different values (1/5)', () => {
  let output = areValidCredentials('Ritu', 'mylongpassword');
  expect(output).toBe(true);
});

test('The name should have more than 3 characters. and, the password at least 8 characters long. Testing with different values (2/5)', () => {
  let output = areValidCredentials('Johnathan', '123456789J');
  expect(output).toBe(true);
});

test('The name should have more than 3 characters. and, the password at least 8 characters long. Testing with different values (3/5)', () => {
  let output = areValidCredentials('ko', '123321');
  expect(output).toBe(false);
});

test('The name should have more than 3 characters. and, the password at least 8 characters long. Testing with different values (4/5)', () => {
  let output = areValidCredentials('john', '123321');
  expect(output).toBe(false);
});

test('The name should have more than 3 characters. and, the password at least 8 characters long. Testing with different values (5/5)', () => {
  let output = areValidCredentials('El', '123321890');
  expect(output).toBe(false);
});