const rewire = require ("rewire");

test ('function should return length of word', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");

    const output = getLengthOfWord('some')
    expect(output).toBe(4);
})

test ('function should return length of the word "some"', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");

    const output = getLengthOfWord(4)
    expect(output).not.toBeDefined();
})

console.log = jest.fn(() => null);
test ('function should return length of word', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(4);
})