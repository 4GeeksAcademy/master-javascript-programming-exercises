const rewire = require("rewire");

test('Function squareElements must exist', () => {
    const squareElements = rewire("./app.js").__get__("squareElements");
    expect(squareElements).not.toBe(undefined);
});

test ('Function should return the square of the given number.', () => {
    const squareElements = rewire ('./app.js').__get__("squareElements");

    expect(squareElements([1, 2, 3])).toEqual([1, 4, 9]);
    expect(squareElements([4, 7, 12, 33])).toEqual([16, 49, 144, 1089]);
})