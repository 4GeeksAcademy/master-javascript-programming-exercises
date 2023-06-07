const rewire = require ("rewire");
const isOddLength = rewire ('./app.js').__get__("isOddLength");

test('Function isOddLength must exist', () => {
    expect(isOddLength).not.toBe(undefined);
});

test('Function isOddLength must return a boolean', () => {
    expect(typeof(isOddLength("someword")) === "boolean").toBe(true);
});

test ('Testing with "speech" and it should return false', () => {
    expect(isOddLength('speech')).toBe(false);
})
test ('Testing with "special" and it should return true', () => {
    expect(isOddLength('special')).toBe(true);
    
})
