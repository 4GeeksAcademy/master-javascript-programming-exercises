const rewire = require("rewire");

test('Function isOddWithoutModulo must exist', () => {
    const isOddWithoutModulo = rewire("./app.js").__get__("isOddWithoutModulo");
    expect(isOddWithoutModulo).not.toBe(undefined);
});

test('Function returns true or false if the given number is odd.', () => {
    const isOddWithoutModulo = rewire("./app.js").__get__("isOddWithoutModulo");

    expect(isOddWithoutModulo(17)).toBe(true)
    expect(isOddWithoutModulo(6)).toBe(false)
})

test('Function must work for negative numbers and zero.', () => {
    const isOddWithoutModulo = rewire("./app.js").__get__("isOddWithoutModulo");

    expect(isOddWithoutModulo(-17)).toBe(true)
    expect(isOddWithoutModulo(-6)).toBe(false)
    expect(isOddWithoutModulo(0)).toBe(false)
})