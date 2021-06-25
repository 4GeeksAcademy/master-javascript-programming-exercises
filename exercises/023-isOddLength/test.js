const rewire = require ("rewire");

test('Function isOddLength must exist', () => {
    const isOddLength = rewire("./app.js").__get__("isOddLength");
    expect(isOddLength).not.toBe(undefined);
});

test('Function isOddLength must return boolean', () => {
    const isOddLength = rewire("./app.js").__get__("isOddLength");
    expect(typeof(isOddLength("someword")) === "boolean").toBe(true);
});

test ('We tried with "special" and "speach" and it should be true and false', () => {
    const isOddLength = rewire ('./app.js').__get__("isOddLength");

    expect(isOddLength('special')).toBe(true);
    expect(isOddLength('speace')).toBe(false);
})