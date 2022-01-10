const rewire = require("rewire");

test('Function getLengthOfShortestElement must exist', () => {
    const getLengthOfShortestElement = rewire("./app.js").__get__("getLengthOfShortestElement");
    expect(getLengthOfShortestElement).not.toBe(undefined);
});

test ('Function must returns the length of the shortest string in the array.', () => {
    const getLengthOfShortestElement = rewire ('./app.js').__get__("getLengthOfShortestElement");

    expect(getLengthOfShortestElement(['one', 'two', 'three'])).toBe(3);
    expect(getLengthOfShortestElement(['1234', 'rocky', 'eerie'])).toBe(4);
})

test('If array is empty must return 0', () => {
    const getLengthOfShortestElement = rewire('./app.js').__get__("getLengthOfShortestElement");

    var output = getLengthOfShortestElement([])
    expect(output).toBe(0)
})
