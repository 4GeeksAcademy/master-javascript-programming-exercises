const rewire = require('rewire');
const flipPairs = rewire('./app.js').__get__('flipPairs');

test('Function flipPairs must exist', () => {
  expect(flipPairs).not.toBe(undefined);
});
test('Function flipPairs must return something', () => {
  expect(flipPairs('test!')).not.toBe(undefined);
});
test('Function flipPairs must return a string', () => {
  expect(typeof flipPairs('test!')).toBe('string');
});

test('The function must Mix each pair of characters in a string.', () => {
  let output = flipPairs(
    "check out how interesting this problem is, it's insanely interesting!"
  );
  expect(output).toBe(
    "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!"
  );
});
test('The function must Mix each pair of characters in a string.', () => {
  let output = flipPairs('check my backflip!');
  expect(output).toBe('hcce kymb cafkil!p');
});
