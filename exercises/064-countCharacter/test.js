const rewire = require("rewire");
const countCharacter = rewire("./app.js").__get__("countCharacter");

test('Function countCharacter must exist', () => {
    expect(countCharacter).not.toBe(undefined);
});

test('Function countCharacter must return something', () => {    
    expect(countCharacter('hello', 'l')).not.toBe(undefined);
});

test('Function countCharacter must return a number', () => {    
    expect(typeof countCharacter('hello', 'l')).toBe("number");
});

test('Function must return the number of occurences of a given character', () => {
    let output = countCharacter("Tres tigres tristes", 's')
    expect(output).toBe(4)
});

test('Function must return the number of occurences of a given character. Testing with different values', () => {
    let output = countCharacter('I am a hacker', 'a')
    expect(output).toBe(3)
});

test('Function must not return the length of the given string', () => {
    let output = countCharacter("array", 'r')
    expect(output).not.toBe(4)
});
