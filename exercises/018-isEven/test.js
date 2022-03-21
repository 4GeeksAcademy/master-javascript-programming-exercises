const rewire = require ("rewire");
const isEven = rewire ('./app.js').__get__("isEven");
test('Function isEven must exist', () => {
    expect(isEven).not.toBe(undefined);
});

test('Function isEven must return soomething', () => {
    expect(isEven(20)).not.toBe(undefined);
});

test('Function isEven must return a boolean (true or false)', () => {
    expect(typeof(isEven(20))).toBe("boolean");
});

test ('The function must return false when the number isn\'t even. Testing with 11', () => {
    expect(isEven(11)).toBe(false);
})
test ('The function must return false when the number isn\'t even. Testing with 63', () => {
    expect(isEven(63)).toBe(false);
})
test ('The function must return true when the number is even. Testing with 12', () => {
    expect(isEven(12)).toBe(true);
})
test ('The function must return true when the number is even. Testing with 4', () => {
    expect(isEven(4)).toBe(true);
})