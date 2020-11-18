const rewire = require ("rewire");

test('Function isEqualTo must exist', () => {
    const isEqualTo = rewire("./app.js").__get__("isEqualTo");
    expect(isEqualTo).not.toBe(undefined);
});

test('Function isEqualTo must return true or false', () => {
    const isEqualTo = rewire("./app.js").__get__("isEqualTo");
    expect(isEqualTo(21, 21)).not.toBe(undefined);
});

test ('function should return that num2 should not be equal to num1', () => {
    const isEqualTo = rewire ('./app.js').__get__("isEqualTo");

    expect(isEqualTo(3, 6)).toBe(false);
    expect(isEqualTo(3, 3)).toBe(true);
})

test ('Use three equals === to compare because we need exact match', () => {
    const isEqualTo = rewire ('./app.js').__get__("isEqualTo");

    expect(isEqualTo(10,"10")).toBe(false);
    expect(isEqualTo("10", 10)).toBe(false);
})