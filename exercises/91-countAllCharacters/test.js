  
const rewire = require("rewire");

test('The function must return a key with the amount of times a character is repeated in a given string', () => {

    const countAllCharacters = rewire("./app.js").__get__("countAllCharacters");

    const result = countAllCharacters({b:1, a:3, n:2});
    
});