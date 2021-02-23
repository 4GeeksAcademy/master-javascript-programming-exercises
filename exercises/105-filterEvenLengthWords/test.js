const rewire = require("rewire");

test('Function filterEvenLengthWords must exist', () => {
    const filterEvenLengthWords = rewire("./app.js").__get__("filterEvenLengthWords");
    expect(filterEvenLengthWords).not.toBe(undefined);
});

test('The function should return only the elements of the array whose length is an even number.', () => {
    const filterEvenLengthWords = rewire("./app.js").__get__("filterEvenLengthWords");

    var output = filterEvenLengthWords(['word', 'words', 'word', 'words'])
    expect(output).toEqual(['word', 'word'])
})

test('The function should return only the elements of the array whose length is an even number.', () => {
    const filterEvenLengthWords = rewire("./app.js").__get__("filterEvenLengthWords");

    var output = filterEvenLengthWords(['tres', 'tigres', 'tristes'])
    expect(output).toEqual(['tres', 'tigres'])
})