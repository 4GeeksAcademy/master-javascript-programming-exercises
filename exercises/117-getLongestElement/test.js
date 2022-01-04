const rewire = require("rewire");

test('Function getLongestElement must exist', () => {
    const getLongestElement = rewire("./app.js").__get__("getLongestElement");
    expect(getLongestElement).not.toBe(undefined);
});

test('Function must returns the length of the longest string in the array.', () => {
    const getLongestElement = rewire('./app.js').__get__("getLongestElement");

    expect(getLongestElement(['one', 'two', 'three'])).toBe('three');
})
test('If there are strings with the same length, must returns the first element found.', () => {
    const getLongestElement = rewire('./app.js').__get__("getLongestElement");
    expect(getLongestElement(['1234', 'rocky', 'eerie'])).toBe('rocky');
})

test('If array is empty must return empty string ', () => {
    const getLongestElement = rewire('./app.js').__get__("getLongestElement");

    var output = getLongestElement([])
    expect(output).toBe('')
})
