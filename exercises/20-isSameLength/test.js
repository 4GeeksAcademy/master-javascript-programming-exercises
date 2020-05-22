const rewire = require ("rewire");

test ('words to have the same length', () => {
    const isSameLength = rewire ('./app.js').__get__("isSameLength");

    const output = isSameLength('words', 'super');
    expect(output).toBe(true);
})

test ('words should not have the same length', () => {
    const isSameLength = rewire ('./app.js').__get__("isSameLength");

    const output = isSameLength('words', 'superior');
    expect(output).toBe(false);
})

console.log = jest.fn(() => null);
test ( 'console log should return true', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(true);
})