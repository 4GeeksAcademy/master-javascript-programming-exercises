const rewire = require ("rewire");

test('Function isEvenLength must exist', () => {
    const isEvenLength = rewire("./app.js").__get__("isEvenLength");
    expect(isEvenLength).not.toBe(undefined);
});

test ('function should return whether the length of the given word is even.', () => {
    const isEvenLength = rewire ('./app.js').__get__("isEvenLength");

    expect(isEvenLength('space')).toBe(false);
    expect(isEvenLength('hola')).toBe(true);
})