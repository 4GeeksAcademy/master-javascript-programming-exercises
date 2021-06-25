const rewire = require ("rewire");

test('Function areBothOdd must exist', () => {
    const areBothOdd = rewire("./app.js").__get__("areBothOdd");
    expect(areBothOdd).not.toBe(undefined);
});

test('Function areBothOdd must return boolean', () => {
    const areBothOdd = rewire("./app.js").__get__("areBothOdd");
    expect(typeof(areBothOdd(2,3))).toBe("boolean");
});

test ('Tried with (7,11) and (8,12) and they should be true and false', () => {
    const areBothOdd = rewire ('./app.js').__get__("areBothOdd");

    expect(areBothOdd(7, 11)).toBe(true);
    expect(areBothOdd(8, 12)).toBe(false);
})