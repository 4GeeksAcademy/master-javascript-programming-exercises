const rewire = require ("rewire");

test ('function returns number equal to 10', () => {
    const equalsTen = rewire ('./app.js').__get__("equalsTen");

    const output = equalsTen(10)
    expect(output).toBe(true);
})

test ('function should return number is not equal 10', () => {
    const equalsTen = rewire ('./app.js').__get__("equalsTen");

    const output = equalsTen(9)
    expect(output).toBe(false);
})

console.log = jest.fn(() => null);
test ( 'console log should return false', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(false);
})