const rewire = require ("rewire");

test ('function should return whether the length of the given word is odd.', () => {
    const isOddLength = rewire ('./app.js').__get__("isOddLength");

    expect(isOddLength('special')).toBe(true);
    expect(isOddLength('speace')).toBe(false);
})