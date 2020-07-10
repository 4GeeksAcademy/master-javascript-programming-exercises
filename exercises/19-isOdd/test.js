const rewire = require ("rewire");

test ('function should return whether the given number is odd.', () => {
    const isOdd = rewire ('./app.js').__get__("isOdd");
 
    expect(isOdd(9)).toBe(true);
    expect(isOdd(10)).toBe(false);
})