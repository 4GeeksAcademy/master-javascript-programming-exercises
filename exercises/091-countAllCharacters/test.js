const rewire = require('rewire');
const countAllCharacters = rewire('./app.js').__get__('countAllCharacters');

test('Function countAllCharacters must exist', () => {
  expect(countAllCharacters).not.toBe(undefined);
});

test('Function countAllCharacters must return something', () => {
  expect(countAllCharacters('test')).not.toBe(undefined);
});

test('Function countAllCharacters must return an object', () => {
  expect(typeof countAllCharacters('test')).toBe('object');
});

test("The function must return a key with the amount of times a character is repeated in a given string. Testing with 'banana'", () => {
  expect(countAllCharacters('banana')).toEqual({ b: 1, a: 3, n: 2 });
});

test("The function must return a key with the amount of times a character is repeated in a given string. Teting with 'ciao'", () => {
  expect(countAllCharacters('ciao')).toEqual({ c: 1, i: 1, a: 1, o: 1 });
});

test('If given an empty string, countAllCharacters should return an empty object', () => {
  expect(countAllCharacters('')).toEqual({});
});