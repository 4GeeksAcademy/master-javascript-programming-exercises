const rewire = require('rewire');
const flipEveryNChars = rewire('./app.js').__get__('flipEveryNChars');

test('Function flipEveryNChars must exist', () => {
  expect(flipEveryNChars).not.toBe(undefined);
});
test('Function flipEveryNChars must return something', () => {
  expect(flipEveryNChars('test one', 2)).not.toBe(undefined);
});
test('Function flipEveryNChars must return a string', () => {
  expect(typeof flipEveryNChars('test two', 2)).toBe('string');
});

test('Function must create "n" characters separated according to the length of the string and mix them', () => {
  let output = flipEveryNChars('a short example', 5);
  expect(output).toBe('ohs axe trelpma');
});
test('Function must create "n" characters separated according to the length of the string and mix them', () => {
  let output = flipEveryNChars('watch my backflip', 3);
  expect(output).toBe('taw hc ymcablfkpi');
});
