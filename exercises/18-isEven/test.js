const rewire = require ("rewire");

test ('not to be even', () => {
    const isEven = rewire ('./app.js').__get__("isEven");

    const output = isEven(11)
    expect(output).toBe(false);
})

test ('to be even', () => {
    const isEven = rewire ('./app.js').__get__("isEven");

    const output = isEven(10)
    expect(output).toBe(true);
})

console.log = jest.fn(() => null);
test ( 'console log should return false', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(false);
})