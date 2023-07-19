const rewire = require ("rewire");
const isEqualTo = rewire("./app.js").__get__("isEqualTo");

test('Function isEqualTo must exist', () => {
    expect(isEqualTo).toBeTruthy()
});

test('Function isEqualTo must return true or false', () => {
    expect(isEqualTo(21, 21)).not.toBe(undefined);
});

test ('The function should return true when both numbers are equal. Testing with 3, 3', () => {
    expect(isEqualTo(3, 3)).toBe(true);
})
test ('The function should return true when both numbers are equal. Testing with 100, 100', () => {
    expect(isEqualTo(100, 100)).toBe(true);
})

test ('The function should return false when both numbers aren\'t equal. Testing with 1, 2', () => {
    expect(isEqualTo(1, 2)).toBe(false);
})
test ('The function should return false when both numbers aren\'t equal. Testing with 10, 20', () => {
    expect(isEqualTo(10, 20)).toBe(false);
})
test ('Use three equals === to compare because we need exact match', () => {
    expect(isEqualTo(10,"10")).toBe(false);
    expect(isEqualTo("10", 10)).toBe(false);
})
