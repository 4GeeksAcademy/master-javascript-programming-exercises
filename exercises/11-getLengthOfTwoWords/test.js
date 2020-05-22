const rewire = require ("rewire");

test ('the lenght of both words', () => {
    const getLengthOfTwoWords = rewire ('./app.js').__get__("getLengthOfTwoWords");

    const output = getLengthOfTwoWords('some', 'words');
    expect(output).toBe(9);
})

console.log = jest.fn(() => null);
test ( 'console log should return length', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(9);
})