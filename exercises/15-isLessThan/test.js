const rewire = require ("rewire");

test ('function returns number less than', () => {
    const isLessThan = rewire ('./app.js').__get__("isLessThan");

    const output = isLessThan(9, 4)
    expect(output).toBe(true);
})

test ('function should return if more than, false', () => {
    const isLessThan = rewire ('./app.js').__get__("isLessThan");

    const output = isLessThan(4, 9)
    expect(output).toBe(false);
})

console.log = jest.fn(() => null);
test ( 'console log should return true', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(true);
})