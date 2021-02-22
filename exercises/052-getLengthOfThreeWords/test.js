const rewire = require("rewire");

test('Function getLengthOfThreeWords must exist', () => {
    const getLengthOfThreeWords = rewire("./app.js").__get__("getLengthOfThreeWords");
    expect(getLengthOfThreeWords).not.toBe(undefined);
});

test('The function must return the length of three words.', () => {
    const getLengthOfThreeWords = rewire('./app.js').__get__("getLengthOfThreeWords");

    var output = getLengthOfThreeWords('some', 'other', 'words')
    expect(output).toBe(14)
})
test('The function must return the length of three words.', () => {
    const getLengthOfThreeWords = rewire('./app.js').__get__("getLengthOfThreeWords");

    var output = getLengthOfThreeWords('he', 'he', 'Michael J')
    expect(output).toBe(13)
})
test('The function must return the length of three words.', () => {
    const getLengthOfThreeWords = rewire('./app.js').__get__("getLengthOfThreeWords");

    var output = getLengthOfThreeWords('s p a c e s', 'can', 'count')
    expect(output).toBe(19)
})