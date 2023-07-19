const rewire = require ("rewire");
const getAllWords = rewire("./app.js").__get__("getAllWords");

test('Function getAllWords must exist', () => {
    expect(getAllWords).not.toBe(undefined);
});

test('Function getAllWords must return something', () => {    
    expect(getAllWords('test')).not.toBe(undefined);
});

test('Function getAllWords must return a list', () => {    
    expect(typeof getAllWords('test')).toBe("object");
});

test('The function returns an array containing every word in the sentence', () => {    
    let input = "Friday Mood"
    let output = getAllWords(input)
    expect(output).toEqual(['Friday', 'Mood']);
});

test('The function returns an array containing every word in the sentence. Testing with different values', () => {
    let input = "Radagast the Brown"
    let output = getAllWords(input)
    expect(output).toEqual(['Radagast', 'the', 'Brown']);
});
