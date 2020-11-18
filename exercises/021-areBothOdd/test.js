const rewire = require ("rewire");

test('Function areBothOdd must exist', () => {
    const areBothOdd = rewire("./app.js").__get__("areBothOdd");
    expect(areBothOdd).not.toBe(undefined);
});

test ('function should return whether or not both of the given numbers are odd.', () => {
    const areBothOdd = rewire ('./app.js').__get__("areBothOdd");

    expect(areBothOdd(7, 11)).toBe(true);
    expect(areBothOdd(8, 12)).toBe(false);
})