const rewire = require("rewire");
const doubleSquareRootOf = rewire("./app.js").__get__("doubleSquareRootOf");

test('Function doubleSquareRootOf must exist', () => {
    expect(doubleSquareRootOf).not.toBe(undefined);
});

test('Function doubleSquareRootOf must return something', () => {
    expect(doubleSquareRootOf(1)).not.toBe(undefined);
});

test('Function doubleSquareRootOf must return a number', () => {
    expect(typeof doubleSquareRootOf(1)).toBe("number");
});

test('The function must return double its square root. Testing with 21', () => {
    expect(doubleSquareRootOf(21)).toBe(9.16515138991168)
})
test('The function must return double its square root. Testing with 121', () => {
    expect(doubleSquareRootOf(121)).toBe(22)
})