const rewire = require("rewire");

test('Function findShortestOfThreeWords must exist', () => {
    const findShortestOfThreeWords = rewire("./app.js").__get__("findShortestOfThreeWords");
    expect(findShortestOfThreeWords).not.toBe(undefined);
});

test('Given 3 words, return the shortest of the three words.', () => {
    const findShortestOfThreeWords = rewire("./app.js").__get__("findShortestOfThreeWords");
    
    expect(findShortestOfThreeWords('a', 'two', 'three')).toBe('a')
    expect(findShortestOfThreeWords('small', 'medium', 'large')).toBe('small')
})

test('If they are the same length, it should return the first word found.', () => {
    const findShortestOfThreeWords = rewire("./app.js").__get__("findShortestOfThreeWords");
    
    expect(findShortestOfThreeWords('three', 'tigers', 'three', 'tigers')).toBe('three')
})