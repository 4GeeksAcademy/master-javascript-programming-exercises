const rewire = require("rewire");

test('Function computeProductOfAllElements must exist', () => {
    const computeProductOfAllElements = rewire("./app.js").__get__("computeProductOfAllElements");
    expect(computeProductOfAllElements).not.toBe(undefined);
});

test ('Function must returns the products of all the elements in the given array.', () => {
    const computeProductOfAllElements = rewire ('./app.js').__get__("computeProductOfAllElements");

    expect(computeProductOfAllElements([2, 5, 6])).toBe(60);
    expect(computeProductOfAllElements([2, 8, 6])).toBe(96);
    expect(computeProductOfAllElements([1, 2, 3])).toBe(6);
})

test ('If given array is empty, it shoud return 0', () => {
    const computeProductOfAllElements = rewire ('./app.js').__get__("computeProductOfAllElements");

    expect(computeProductOfAllElements([])).toBe(0);
})