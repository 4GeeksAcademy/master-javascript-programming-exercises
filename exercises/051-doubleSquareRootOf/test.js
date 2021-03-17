const rewire = require("rewire");

test('Function doubleSquareRootOf must exist', () => {
    const doubleSquareRootOf = rewire("./app.js").__get__("doubleSquareRootOf");
    expect(doubleSquareRootOf).not.toBe(undefined);
});

test('The function must return double its square root.', () => {
    const doubleSquareRootOf = rewire('./app.js').__get__("doubleSquareRootOf");

    expect(doubleSquareRootOf(121)).toBe(22)
    expect(doubleSquareRootOf(21)).toBe(9.16515138991168)
})