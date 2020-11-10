const rewire = require ("rewire");

test('Function findMinLengthOfThreeWords must exist', () => {
    const findMinLengthOfThreeWords = rewire("./app.js").__get__("findMinLengthOfThreeWords");
    expect(findMinLengthOfThreeWords).not.toBe(undefined);
});

test ('The function should return the element with less characters.', () => {
    const findMinLengthOfThreeWords = rewire ('./app.js').__get__("findMinLengthOfThreeWords");
    var output = findMinLengthOfThreeWords('past', 'present', 'future');
    expect(output).toBe(4) 
    var output2 = findMinLengthOfThreeWords('Toyota', 'Honda', 'Chevrolet');
    expect(output2).toBe(5)

    })

