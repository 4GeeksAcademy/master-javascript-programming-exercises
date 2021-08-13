const rewire = require("rewire");

test('Function isEvenWithoutModulo must exist', () => {
    const isEvenWithoutModulo = rewire("./app.js").__get__("isEvenWithoutModulo");
    expect(isEvenWithoutModulo).not.toBe(undefined);
});

test('Function returns true or false if the given number is even.', () => {
    const isEvenWithoutModulo = rewire("./app.js").__get__("isEvenWithoutModulo");

    expect(isEvenWithoutModulo(8)).toBe(true)
    expect(isEvenWithoutModulo(17)).toBe(false)
    expect(isEvenWithoutModulo(6)).toBe(true)
})

test('Function must work for negative numbers and zero.', () => {
    const isEvenWithoutModulo = rewire("./app.js").__get__("isEvenWithoutModulo");

    expect(isEvenWithoutModulo(-17)).toBe(false)
    expect(isEvenWithoutModulo(-6)).toBe(true)
    expect(isEvenWithoutModulo(0)).toBe(true)
})