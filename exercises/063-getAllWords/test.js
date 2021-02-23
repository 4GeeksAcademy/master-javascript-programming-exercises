const rewire = require ("rewire");

test('Function getAllWords must exist', () => {
    const getAllWords = rewire("./app.js").__get__("getAllWords");
    expect(getAllWords).not.toBe(undefined);
});

test ('The function returns an array containing every word in the sentence.', () => {
    const getAllWords = rewire ('./app.js').__get__("getAllWords");
    
    var input = "Radagast the Brown"
    var output = getAllWords(input)

    expect(output).toEqual(['Radagast', 'the', 'Brown']);
})
test ('The function returns an array containing every word in the sentence.', () => {
    const getAllWords = rewire ('./app.js').__get__("getAllWords");
    
    var input = "Friday Mood"
    var output = getAllWords(input)

    expect(output).toEqual(['Friday', 'Mood']);
})