const rewire = require ("rewire");

test ('number to be odd', () => {
    const isOdd = rewire ('./app.js').__get__("isOdd");

    const output = isOdd(9)
    expect(output).toBe(true);
})

test ('number not to be odd', () => {
    const isOdd = rewire ('./app.js').__get__("isOdd");

    const output = isOdd(10)
    expect(output).toBe(false);
})

console.log = jest.fn(() => null);
test ( 'console log should return false', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(true);
})