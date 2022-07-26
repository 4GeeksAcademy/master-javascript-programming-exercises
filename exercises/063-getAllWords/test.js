const rewire = require ("rewire");

test('Function getAllWords must exist', () => {
    const getAllWords = rewire("./app.js").__get__("getAllWords");
    expect(getAllWords).not.toBe(undefined);
});

test ('The function returns an array containing every word in the sentence.', () => {
    const getAllWords = rewire ('./app.js').__get__("getAllWords");
    
    let input = "Radagast the Brown"
    let output = getAllWords(input)
    expect(output).toEqual(['Radagast', 'the', 'Brown']);

    input = "Friday Mood"
    output = getAllWords(input)
    expect(output).toEqual(['Friday', 'Mood']);
})