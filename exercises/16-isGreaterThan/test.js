const rewire = require ("rewire");

test ('num2 to be greater than num1', () => {
    const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");

    const output = isGreaterThan(11, 10)
    expect(output).toBeFalsy();
})

test ('num2 to be greater than num1', () => {
    const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");

    const output = isGreaterThan(10, 11)
    expect(output).toBeTruthy();
})

console.log = jest.fn(() => null);
test ( 'console log should return false', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(false);
})