const rewire = require("rewire");

test('Function doubleSquareRootOf must exist', () => {
    const doubleSquareRootOf = rewire("./app.js").__get__("doubleSquareRootOf");
    expect(doubleSquareRootOf).not.toBe(undefined);
});

test('The function must return twice its square root.', () => {
    const doubleSquareRootOf = rewire('./app.js').__get__("doubleSquareRootOf");

    var output = doubleSquareRootOf(121)
    expect(output).toBe(22)
})
test('The function must return twice its square root.', () => {
    const doubleSquareRootOf = rewire('./app.js').__get__("doubleSquareRootOf");

    var output = doubleSquareRootOf(21)
    expect(output).toBe(9.16515138991168)
})