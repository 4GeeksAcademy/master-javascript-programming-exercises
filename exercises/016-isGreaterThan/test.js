const rewire = require ("rewire");
const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");
test ('Create a function isGreaterThan', () => {
    expect((isGreaterThan)).toBeTruthy();
})

test ('Your function must return something', () => {
    expect(isGreaterThan()).not.toBe(undefined);
})

test ('Your function must return a boolean (true or false)', () => {
    expect(typeof(isGreaterThan(9, 6))).toBe("boolean");
})

test ('The function should return true if num2 is bigger than num1', () => {
    expect(isGreaterThan(9, 12)).toBe(true);
})
test ('The function should return true if num2 is bigger than num1', () => {
    expect(isGreaterThan(1, 2)).toBe(true);
})
test ('The function should return false if num2 is less than num1', () => {
    expect(isGreaterThan(2, 1)).toBe(false);
})
test ('The function should return false if num2 is less than num1', () => {
    expect(isGreaterThan(99, 12)).toBe(false);
})