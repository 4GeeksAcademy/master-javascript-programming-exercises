const rewire = require ("rewire");

test('Function isEitherEven must exist', () => {
    const isEitherEven = rewire("./app.js").__get__("isEitherEven");
    expect(isEitherEven).not.toBe(undefined);
});


test('Function isEitherEven must return boolean', () => {
    const isEitherEven = rewire("./app.js").__get__("isEitherEven");
    expect(typeof(isEitherEven(3,3)) == "boolean" || isEitherEven(3,3) === 0).toBeTruthy()
});

test ('Tested with (7,12) & (15,17) and it should have returned true and false', () => {
    const isEitherEven = rewire ('./app.js').__get__("isEitherEven");

    expect(isEitherEven(7, 12)).toBe(true);
    expect(isEitherEven(15, 17)).toBe(false);
})