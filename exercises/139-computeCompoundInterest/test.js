const rewire = require('rewire');
const computeCompoundInterest = rewire('./app.js').__get__(
  'computeCompoundInterest'
);

test('Function computeCompoundInterest must exist.', () => {
  expect(computeCompoundInterest).not.toBe(undefined);
});
test('Function computeCompoundInterest must return something.', () => {
  expect(computeCompoundInterest(1500, 0.043, 4, 6)).not.toBe(undefined);
});
test('Function computeCompoundInterest must return a number.', () => {
  expect(typeof computeCompoundInterest(1500, 0.043, 4, 6)).toBe('number');
});

test('Function must return  the amount of compound interest generated. Testing with example values.', () => {
  expect(computeCompoundInterest(1500, 0.043, 4, 6)).toBe(438.83682213410543);
});
test('Function must return  the amount of compound interest generated.', () => {
  expect(computeCompoundInterest(600, 0.021, 2, 4)).toBe(52.29161102351213);
});
