const rewire = require ("rewire");

test ('function should return number is grater', () => {
    const isGreaterThanTen = rewire ('./app.js').__get__("isGreaterThanTen");

    const output = isGreaterThanTen(11)
    expect(output).toBe(true);
})

test ('function should return number is grater', () => {
    const isGreaterThanTen = rewire ('./app.js').__get__("isGreaterThanTen");

    const output = isGreaterThanTen(9)
    expect(output).toBe(false);
})

console.log = jest.fn(() => null);
test ('function should return true', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(true);
})