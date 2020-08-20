const rewire = require ("rewire");

test ('function should return whether the length of the given word is even.', () => {
    const isEvenLength = rewire ('./app.js').__get__("isEvenLength");

    expect(isEvenLength('space')).toBe(false);
    expect(isEvenLength('hola')).toBe(true);
})