const rewire = require("rewire");

test('Function multiply must exist', () => {
    const multiply = rewire("./app.js").__get__("multiply");
    expect(multiply).not.toBe(undefined);
});

test('Given 2 whole numbers, multiply and return the total.', () => {
    const multiply = rewire("./app.js").__get__("multiply");

    expect(multiply(4, 7)).toBe(28)
    expect(multiply(5, -5)).toBe(-25)
})

test('Must not use the * operator', () => {
    const multiply = rewire("./app.js").__get__("multiply");

    let multiplyOperator = '\*'
    expect(multiplyOperator).not.toBe(multiply)
})