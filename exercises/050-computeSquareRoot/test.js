const rewire = require("rewire");

test('Function computeSquareRoot must exist', () => {
    const computeSquareRoot = rewire("./app.js").__get__("computeSquareRoot");
    expect(computeSquareRoot).not.toBe(undefined);
});
test('The function Should return the square root of the given number', () => {
    const computeSquareRoot = rewire('./app.js').__get__("computeSquareRoot");

    expect(computeSquareRoot(9)).toBe(3)
    expect(computeSquareRoot(21)).toBe(4.58257569495584)
})