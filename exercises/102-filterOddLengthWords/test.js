const rewire = require("rewire");

test('Function filterOddLengthWords must exist', () => {
    const filterOddLengthWords = rewire("./app.js").__get__("filterOddLengthWords");
    expect(filterOddLengthWords).not.toBe(undefined);
});


test('The function should return odd strings.', () => {
    const filterOddLengthWords = rewire("./app.js").__get__("filterOddLengthWords");

    var output = filterOddLengthWords(['you', 'can', 'do', 'it'])
    expect(output).toEqual(['you', 'can'])

    output = filterOddLengthWords(['there', 'it', 'is', 'now'])
    expect(output).toEqual(['there', 'now'])
})