const rewire = require ("rewire");

test ('function should return that num2 should not be equal to num1', () => {
    const isEqualTo = rewire ('./app.js').__get__("isEqualTo");

    expect(isEqualTo(3, 6)).toBe(false);
    expect(isEqualTo(3, 3)).toBe(true);
})