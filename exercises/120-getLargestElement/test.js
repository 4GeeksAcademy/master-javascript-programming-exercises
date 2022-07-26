const rewire = require("rewire");

test('Function getLargestElement must exist', () => {
    const getLargestElement = rewire("./app.js").__get__("getLargestElement");
    expect(getLargestElement).not.toBe(undefined);
});

test('Function must returns the largest number within the array.', () => {
    const getLargestElement = rewire('./app.js').__get__("getLargestElement");

    expect(getLargestElement([5, 2, 8, 3])).toBe(8);
    expect(getLargestElement([15, 22, 18, 23])).toBe(23);
})

test('If array is empty must return empty string', () => {
    const getLargestElement = rewire('./app.js').__get__("getLargestElement");

    let output = getLargestElement([])
    expect(output).toBe(0)
})
