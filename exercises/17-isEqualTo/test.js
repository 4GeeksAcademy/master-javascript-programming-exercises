const rewire = require ("rewire");

test ('num2 should not be equal to num1', () => {
    const isEqualTo = rewire ('./app.js').__get__("isEqualTo");

    const output = isEqualTo(11, 10)
    expect(output).toBeFalsy();
})

test ('num2 is equal to num1', () => {
    const isEqualTo = rewire ('./app.js').__get__("isEqualTo");

    const output = isEqualTo(10, 10)
    expect(output).toBe(true);
})

console.log = jest.fn(() => null);
test ( 'console log should return false', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(false);
})