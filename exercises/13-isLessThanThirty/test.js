const rewire = require ("rewire");

test ('function should return number is less', () => {
    const isLessThan30 = rewire ('./app.js').__get__("isLessThan30");

    const output = isLessThan30(11)
    expect(output).toBe(true);
})

test ('function should return number is grater', () => {
    const isLessThan30 = rewire ('./app.js').__get__("isLessThan30");

    const output = isLessThan30(31)
    expect(output).toBe(false);
})

console.log = jest.fn(() => null);
test ('function should return true', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(true);
})