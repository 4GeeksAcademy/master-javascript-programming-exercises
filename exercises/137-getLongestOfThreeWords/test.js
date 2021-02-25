const rewire = require("rewire");

test('Function getLongestOfThreeWords must exist', () => {
    const getLongestOfThreeWords = rewire("./app.js").__get__("getLongestOfThreeWords");
    expect(getLongestOfThreeWords).not.toBe(undefined);
});

test('Given 3 words, return the longest of the three words.', () => {
    const getLongestOfThreeWords = rewire("./app.js").__get__("getLongestOfThreeWords");
    
    expect(getLongestOfThreeWords('these', 'three', 'words')).toBe('these')
    expect(getLongestOfThreeWords('small', 'medium', 'large')).toBe('medium')
})

test('If they are the same length, it should return the first word found.', () => {
    const getLongestOfThreeWords = rewire("./app.js").__get__("getLongestOfThreeWords");
    
    expect(getLongestOfThreeWords('three', 'tigers', 'three', 'tigers')).toBe('tigers')
})