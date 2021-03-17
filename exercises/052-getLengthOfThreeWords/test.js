const rewire = require("rewire");

test('Function getLengthOfThreeWords must exist', () => {
    const getLengthOfThreeWords = rewire("./app.js").__get__("getLengthOfThreeWords");
    expect(getLengthOfThreeWords).not.toBe(undefined);
});

test("The function must return the sum of its three parameter's length .", () => {
    const getLengthOfThreeWords = rewire('./app.js').__get__("getLengthOfThreeWords");

    var output = getLengthOfThreeWords('some', 'other', 'words')
    expect(output).toBe(14)

    output = getLengthOfThreeWords('he', 'he', 'Michael J')
    expect(output).toBe(13)

    output = getLengthOfThreeWords('s p a c e s', 'can', 'count')
    expect(output).toBe(19)
})