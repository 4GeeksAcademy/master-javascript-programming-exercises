const rewire = require ("rewire");

test('Function getAllLetters must exist', () => {
    const getAllLetters = rewire("./app.js").__get__("getAllLetters");
    expect(getAllLetters).not.toBe(undefined);
});

test ('The function returns an array containing every character in the word.', () => {
    const getAllLetters = rewire ('./app.js').__get__("getAllLetters");
    
    var input = "Radagast"
    var output = getAllLetters(input)
    expect(output).toEqual(["R", "a", "d", "a", "g", "a", "s", "t"]);

    input = "Pedro"
    output = getAllLetters(input)
    expect(output).toEqual(["P", "e", "d", "r", "o"]);
})