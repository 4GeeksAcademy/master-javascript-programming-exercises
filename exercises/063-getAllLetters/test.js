const rewire = require ("rewire");
const getAllLetters = rewire("./app.js").__get__("getAllLetters");

test('Function getAllLetters must exist', () => {
    expect(getAllLetters).not.toBe(undefined);
});

test('Function getAllLetters must return something', () => {    
    expect(getAllLetters("test")).not.toBe(undefined);
});

test('Function getAllLetters must return a list', () => {    
    expect(typeof getAllLetters('test')).toBe("object");
});

test('The function returns an array containing every character in the word', () => {
    let input = "Radagast"
    let output = getAllLetters(input)
    expect(output).toEqual(["R", "a", "d", "a", "g", "a", "s", "t"]);
});

test('The function returns an array containing every character in the word. Testing with different values', () => {    
    let input = "Pedro"
    let output = getAllLetters(input)
    expect(output).toEqual(["P", "e", "d", "r", "o"]);
});
