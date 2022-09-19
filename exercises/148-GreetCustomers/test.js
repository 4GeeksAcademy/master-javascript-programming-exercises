const rewire = require('rewire');
const greetCustomer = rewire('./app.js').__get__('greetCustomer');

test('Function greetCustomer must exist', () => {
  expect(greetCustomer).not.toBe(undefined);
});

test('Function greetCustomer must return something', () => {
  expect(greetCustomer('Test')).not.toBe(undefined);
});

test('Function greetCustomer must return a string', () => {
  expect(typeof greetCustomer('Test')).toBe('string');
});

test('If the name is not found in customerData you should welcome as the first time', () => {
  let output = greetCustomer('Carl');
  expect(output).toBe('Welcome! Is this your first time?');
});

test('If the Client who has visited only once must say "Welcome back ..."', () => {
  let output = greetCustomer('Joe');
  expect(output).toBe(
    "Welcome back, Joe! We're glad you liked us the first time!"
  );
});

test('If the Client who has visited more than once must say "Welcome back ..."', () => {
  let output = greetCustomer('Carol');
  expect(output).toBe('Welcome back, Carol! So glad to see you again!');
});
