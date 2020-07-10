const rewire = require ("rewire");

test ('function should return whether or not both of the given numbers are odd.', () => {
    const areBothOdd = rewire ('./app.js').__get__("areBothOdd");

    expect(areBothOdd(7, 11)).toBe(true);
    expect(areBothOdd(8, 12)).toBe(false);
})