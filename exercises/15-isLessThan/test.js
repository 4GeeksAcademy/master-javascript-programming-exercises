const rewire = require ("rewire");

test ('function return whether num2 is less than num1.', () => {
    const isLessThan = rewire ('./app.js').__get__("isLessThan");

    expect(isLessThan(9, 3)).toBe(true);
    expect(isLessThan(6, 12)).toBe(false);
    expect(isLessThan(6, 6)).toBe(false);
})