const rewire = require("rewire");

test('Function modulo must exist', () => {
    const modulo = rewire("./app.js").__get__("modulo");
    expect(modulo).not.toBe(undefined);
});

test('Given 2 numbers, return the remainder after dividing num1 by num2.', () => {
    const modulo = rewire("./app.js").__get__("modulo");

    expect(modulo(25, 4)).toBe(1)
    expect(modulo(5, 55)).toBe(5)
})

test('The module always returns the sign of the first number.', () => {
     const modulo = rewire("./app.js").__get__("modulo");

    expect(modulo(-25, 4)).toBe(-1)
    expect(modulo(-5, 55)).toBe(-5)
})

test('If any of the operators is NaN, then the result is NaN.', () => {
    const modulo = rewire("./app.js").__get__("modulo");

    expect(modulo(25, 'hey')).toBe(NaN)
})