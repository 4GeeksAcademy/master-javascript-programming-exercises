  
const rewire = require("rewire");

test('Function countAllCharacters must exist', () => {
    const countAllCharacters = rewire("./app.js").__get__("countAllCharacters");
    expect(countAllCharacters).not.toBe(undefined);
});

test('The function must return a key with the amount of times a character is repeated in a given string', () => {

    const countAllCharacters = rewire("./app.js").__get__("countAllCharacters");
     expect(countAllCharacters("banana")).toEqual({ b: 1, a: 3, n: 2 });
     expect(countAllCharacters("ciao")).toEqual({ c: 1, i: 1, a: 1 , o: 1});
});