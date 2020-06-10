const rewire = require ("rewire");

test ('function should return whether the given words have the same length.', () => {
    const isSameLength = rewire ('./app.js').__get__("isSameLength");

    expect(isSameLength('words', 'super')).toBe(true);
    expect(isSameLength('words', 'superior')).toBe(false);
})
