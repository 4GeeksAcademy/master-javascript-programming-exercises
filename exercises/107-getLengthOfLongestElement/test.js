const rewire = require("rewire");

test('Function getLengthOfLongestElement must exist', () => {
    const getLengthOfLongestElement = rewire("./app.js").__get__("getLengthOfLongestElement");
    expect(getLengthOfLongestElement).not.toBe(undefined);
});

test('Must returns 0 if the array is void.', () => {
    const getLengthOfLongestElement = rewire("./app.js").__get__("getLengthOfLongestElement");

    var output = getLengthOfLongestElement([])
    expect(output).toBe(0)
})

test('Must returns the length of the longest string in the array.', () => {
    const getLengthOfLongestElement = rewire("./app.js").__get__("getLengthOfLongestElement");

    var output = getLengthOfLongestElement(['one', 'two', 'three'])
    expect(output).toBe(5)
})

test('Must returns the length of the longest string in the array.', () => {
    const getLengthOfLongestElement = rewire("./app.js").__get__("getLengthOfLongestElement");

    var output = getLengthOfLongestElement(['es', 'hora', 'de', 'comer'])
    expect(output).toBe(5)
})
