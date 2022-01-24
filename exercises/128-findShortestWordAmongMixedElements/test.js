const rewire = require("rewire");

test('Function findShortestWordAmongMixedElements must exist', () => {
    const findShortestWordAmongMixedElements = rewire("./app.js").__get__("findShortestWordAmongMixedElements");
    expect(findShortestWordAmongMixedElements).not.toBe(undefined);
});

test('Function must return the shortest string within the array.', () => {
    const findShortestWordAmongMixedElements = rewire('./app.js').__get__("findShortestWordAmongMixedElements");

    var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three'])
    expect(output).toBe('two');
})

test('If there are strings with the same length, then it should return the first element found.', () => {
    const findShortestWordAmongMixedElements = rewire('./app.js').__get__("findShortestWordAmongMixedElements");

    expect(findShortestWordAmongMixedElements([ 1, 'i', 2, 'a'])).toBe('i');
})

test('If the given array contains no string, it should return an empty string.', () => {
    const findShortestWordAmongMixedElements = rewire('./app.js').__get__("findShortestWordAmongMixedElements");

    expect(findShortestWordAmongMixedElements([ 1, 2, 3, 4])).toBe('');
})

test('If array is empty must return empty string', () => {
    const findShortestWordAmongMixedElements = rewire('./app.js').__get__("findShortestWordAmongMixedElements");

    var output = findShortestWordAmongMixedElements([])
    expect(output).toBe('')
})
