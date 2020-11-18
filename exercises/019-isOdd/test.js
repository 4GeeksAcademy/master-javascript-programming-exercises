const rewire = require ("rewire");

test('Function isOdd must exist', () => {
    const isOdd = rewire("./app.js").__get__("isOdd");
    expect(isOdd).not.toBe(undefined);
});

test('Function isOdd must return true or false', () => {
    const isOdd = rewire("./app.js").__get__("isOdd");
    expect(isOdd(20)).not.toBe(undefined);
});

test ('function should return whether the given number is odd.', () => {
    const isOdd = rewire ('./app.js').__get__("isOdd");
 
    expect(isOdd(9)).toBe(true);
    expect(isOdd(10)).toBe(false);
})