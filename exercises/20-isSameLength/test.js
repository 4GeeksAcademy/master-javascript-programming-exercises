const rewire = require ("rewire");

test('Function isSameLength must exist', () => {
    const isSameLength = rewire("./app.js").__get__("isSameLength");
    expect(isSameLength).not.toBe(undefined);
});


test ('function should return whether the given words have the same length.', () => {
    const isSameLength = rewire ('./app.js').__get__("isSameLength");

    expect(isSameLength('words', 'super')).toBe(true);
    expect(isSameLength('words', 'superior')).toBe(false);
})
