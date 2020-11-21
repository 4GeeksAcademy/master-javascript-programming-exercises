const rewire = require ("rewire");

test('Function isEitherEven must exist', () => {
    const isEitherEven = rewire("./app.js").__get__("isEitherEven");
    expect(isEitherEven).not.toBe(undefined);
});

test ('function should return whether or not either one of the given numbers is even', () => {
    const isEitherEven = rewire ('./app.js').__get__("isEitherEven");

    expect(isEitherEven(7, 12)).toBe(true);
    expect(isEitherEven(15, 17)).toBe(false);
})