const rewire = require('rewire');
const PhoneNumberFormatter = rewire('./app.js').__get__('PhoneNumberFormatter');

test('Function PhoneNumberFormatter must exist', () => {
  expect(PhoneNumberFormatter).not.toBe(undefined);
});

test('Function getAreaCode must exist on PhoneNumberFormatter', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).getAreaCode).not.toBe(undefined);
});

test('Function getExchangeCode must exist on PhoneNumberFormatter', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).getExchangeCode).not.toBe(undefined);
});

test('Function getLineNumber must exist on PhoneNumberFormatter', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).getLineNumber).not.toBe(undefined);
});

test('Function parenthesize must exist on PhoneNumberFormatter', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).parenthesize).not.toBe(undefined);
});

test('Function slice must exist on PhoneNumberFormatter', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).slice).not.toBe(undefined);
});

test('Function getAreaCode must return something', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).getAreaCode()).not.toBe(undefined);
});

test('Function getExchangeCode must return something', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).getExchangeCode()).not.toBe(undefined);
});

test('Function getLineNumber must return something', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).getLineNumber()).not.toBe(undefined);
});

test('Function parenthesize must return something', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).parenthesize()).not.toBe(undefined);
});

test('Function slice must return something', () => {
  expect(new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).slice()).not.toBe(undefined);
});

test('Function PhoneNumberFormatter must return something', () => {
  expect(
    new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render()
  ).not.toBe(undefined);
});

test('Function PhoneNumberFormatter must return a string', () => {
  expect(
    typeof new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render()
  ).toBe('string');
});

test('The function must transform the array into a phone format string as expected. Testing getAreaCode.', () => {
  expect(
    new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).getAreaCode()
  ).toEqual('650');
});

test('The function must transform the array into a phone format string as expected. Testing getExchangeCode.', () => {
  expect(
    new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).getExchangeCode()
  ).toEqual('835');
});

test('The function must transform the array into a phone format string as expected. Testing getLineNumber.', () => {
  expect(
    new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).getLineNumber()
  ).toEqual('9172');
});

test('The function must transform the array into a phone format string as expected. Testing render.', () => {
  expect(
    new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render()
  ).toEqual('(650) 835-9172');
});

test('The solution should work with another entries. Testing with [3, 0, 7, 2, 1, 7, 9, 5, 7, 3]', () => {
  expect(
    new PhoneNumberFormatter([3, 0, 7, 2, 1, 7, 9, 5, 7, 3]).render()
  ).toEqual('(307) 217-9573');
});
