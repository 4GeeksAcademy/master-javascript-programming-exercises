const rewire = require("rewire");

test('Function computeSumBetween must exist', () => {
    const computeSumBetween = rewire("./app.js").__get__("computeSumBetween");
    expect(computeSumBetween).not.toBe(undefined);
});

test('The function must return the sum of all numbers, between the two given integers, starting at num1 and excluding num2.', () => {
    const computeSumBetween = rewire("./app.js").__get__("computeSumBetween");

    expect(computeSumBetween(2, 5)).toBe(9)
    expect(computeSumBetween(4, 8)).toBe(22)
})

test('If num2 is not greater than num1, it should return 0.', () => {
    const computeSumBetween = rewire("./app.js").__get__("computeSumBetween");

    expect(computeSumBetween(3, 2)).toBe(0)
    expect(computeSumBetween(5, 3)).toBe(0)
})