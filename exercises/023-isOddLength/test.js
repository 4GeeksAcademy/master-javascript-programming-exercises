const rewire = require ("rewire");
const isOddLength = rewire ('./app.js').__get__("isOddLength");

test('Function isOddLength must exist', () => {
    expect(isOddLength).not.toBe(undefined);
});

test('Function isOddLength must return boolean', () => {
    expect(typeof(isOddLength("someword")) === "boolean").toBe(true);
});

test ('We tried with "speach" and it should be false', () => {
    expect(isOddLength('speach')).toBe(false);
})
test ('We tried with "special" and it should be true', () => {
    expect(isOddLength('special')).toBe(true);
    
})