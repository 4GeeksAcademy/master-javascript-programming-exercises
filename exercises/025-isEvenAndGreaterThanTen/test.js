const rewire = require ("rewire");

test('Function isEvenAndGreaterThanTen must exist', () => {
    const isEvenAndGreaterThanTen = rewire("./app.js").__get__("isEvenAndGreaterThanTen");
    expect(isEvenAndGreaterThanTen).not.toBe(undefined);
});

test ('function should return whether it is both even and greater than 10.', () => {
    const isEvenAndGreaterThanTen = rewire ('./app.js').__get__("isEvenAndGreaterThanTen");

    expect(isEvenAndGreaterThanTen(13)).toBe(false);
    expect(isEvenAndGreaterThanTen(12)).toBe(true);
})