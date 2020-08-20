const rewire = require ("rewire");

test ('function should return whether num2 is greater than num1.', () => {
    const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");

    expect(isGreaterThan(9, 6)).toBe(false);
    expect(isGreaterThan(9, 12)).toBe(true);
})