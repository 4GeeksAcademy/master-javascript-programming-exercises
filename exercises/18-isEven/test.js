const rewire = require ("rewire");

test ('function should return whether the number given is even.', () => {
    const isEven = rewire ('./app.js').__get__("isEven");
    
    expect(isEven(11)).toBe(false);
    expect(isEven(10)).toBe(true);
})