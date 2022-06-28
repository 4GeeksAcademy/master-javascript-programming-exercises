const rewire = require ("rewire");
const isEvenLength = rewire ('./app.js').__get__("isEvenLength");

test('Function isEvenLength must exist', () => {
    expect(isEvenLength).not.toBe(undefined);
});

test('Function isEvenLength must return boolean', () => {
    expect(typeof(isEvenLength('some'))).toBe("boolean");
});

test ('function should return true when the length is even.', () => {
    expect(isEvenLength('hola')).toBe(true);
})
test ('function should return false when the length is odd.', () => {
    expect(isEvenLength('space')).toBe(false);
})