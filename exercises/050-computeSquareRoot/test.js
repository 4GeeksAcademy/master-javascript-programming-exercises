const rewire = require("rewire");

test('Function computeSquareRoot must exist', () => {
    const computeSquareRoot = rewire("./app.js").__get__("computeSquareRoot");
    expect(computeSquareRoot).not.toBe(undefined);
});
test('Should return the square root of the given number', () => {
    const computeSquareRoot = rewire('./app.js').__get__("computeSquareRoot");

    var output = computeSquareRoot(9)
    expect(output).toBe(3)
})
test('Should return the square root of the given number', () => {
    const computeSquareRoot = rewire('./app.js').__get__("computeSquareRoot");

    var output = computeSquareRoot(21)
    expect(output).toBe(4.58257569495584)
})