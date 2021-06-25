const rewire = require("rewire");

test('Function findSmallestElement must exist', () => {
    const findSmallestElement = rewire("./app.js").__get__("findSmallestElement");
    expect(findSmallestElement).not.toBe(undefined);
});

test('Function must returns the smallest number within the array.', () => {
    const findSmallestElement = rewire('./app.js').__get__("findSmallestElement");

    expect(findSmallestElement([4, 1, 9, 10])).toBe(1);
    expect(findSmallestElement([11, 32, 8, 19, 51, 13])).toBe(8);
})

test('If array is void must return 0', () => {
    const findSmallestElement = rewire('./app.js').__get__("findSmallestElement");

    var output = findSmallestElement([])
    expect(output).toBe(0)
})
