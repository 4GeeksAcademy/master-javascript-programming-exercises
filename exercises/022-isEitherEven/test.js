const rewire = require ("rewire");
const isEitherEven = rewire ('./app.js').__get__("isEitherEven");
test('Function isEitherEven must exist', () => {
    expect(isEitherEven).not.toBe(undefined);
});


test('Function isEitherEven must return boolean', () => {
    expect(typeof(isEitherEven(3,3)) == "boolean" || isEitherEven(3,3) === 0).toBeTruthy()
});

test ('The function must return true when one of the given numbers is even. Tested with (7,12)', () => {
    expect(isEitherEven(7, 12)).toBe(true);
})
test ('The function must return true when one of the given numbers is even. Tested with (122,3)', () => {
    expect(isEitherEven(122, 3)).toBe(true);
})
test ('The function must return false when none of the given numbers is even. Tested with (99,5)', () => {
    expect(isEitherEven(99, 5)).toBe(false);
})