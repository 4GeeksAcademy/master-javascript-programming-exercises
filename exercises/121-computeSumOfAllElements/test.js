const rewire = require("rewire");

test('Function computeSumOfAllElements must exist', () => {
    const computeSumOfAllElements = rewire("./app.js").__get__("computeSumOfAllElements");
    expect(computeSumOfAllElements).not.toBe(undefined);
});

test('Function must returns the sum of all elements of the array.', () => {
    const computeSumOfAllElements = rewire('./app.js').__get__("computeSumOfAllElements");

    expect(computeSumOfAllElements([1, 2, 3])).toBe(6);
    expect(computeSumOfAllElements([5, 3, 9])).toBe(17);
})

