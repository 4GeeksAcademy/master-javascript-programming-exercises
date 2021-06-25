const rewire = require("rewire");

test('Function multiplyBetween must exist', () => {
    const multiplyBetween = rewire("./app.js").__get__("multiplyBetween");
    expect(multiplyBetween).not.toBe(undefined);
});

test('Function must return the product multiplied of all numbers, between the two given integers, starting at num1 and excluding num2.', () => {
    const multiplyBetween = rewire("./app.js").__get__("multiplyBetween");

    expect(multiplyBetween(2, 5)).toBe(24)
    expect(multiplyBetween(4, 8)).toBe(840)
})

test('If num2 is not greater than num1, it should return 0.', () => {
    const multiplyBetween = rewire("./app.js").__get__("multiplyBetween");

    expect(multiplyBetween(3, 2)).toBe(0)
})