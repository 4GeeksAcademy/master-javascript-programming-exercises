const rewire = require ("rewire");
const computePower = rewire("./app.js").__get__("computePower");

test('Function computePower must exist', () => {
    expect(computePower).not.toBe(undefined);
});

test('Function computePower must return something', () => {
    expect(computePower(1,1)).not.toBe(undefined);
});

test('Function computePower must return a number', () => {
    expect(typeof computePower(1,1)).toBe("number");
});

test('Must return the number raised to the exponent. Testing with 5,7', () => {
    expect(computePower(5, 7)).toBe(78125)
});

test('Must return the number raised to the exponent. Testing with 2,3', () => {
    expect(computePower(2, 3)).toBe(8)
});