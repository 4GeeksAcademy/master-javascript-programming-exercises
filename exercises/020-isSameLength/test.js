const rewire = require ("rewire");
const isSameLength = rewire("./app.js").__get__("isSameLength");

test('Function isSameLength must exist', () => {
    expect(isSameLength).not.toBe(undefined);
});
test('Function isSameLength must return something', () => {
    expect(isSameLength('words', 'super')).not.toBe(undefined);
});

test('Function isSameLength must return boolean', () => {
    expect(typeof(isSameLength("2","3"))).toBe("boolean");
});

test ('The function return true when the given words have the same length. Testing with "words", "super"', () => {
    expect(isSameLength('words', 'super')).toBe(true);
})

test ('The function return true when the given words have the same length. Testing with "hello", "right"', () => {
    expect(isSameLength('hello', 'right')).toBe(true);
})

test ('The function return false when the given words haven\'t the same length. Testing with "words", "superior"', () => {
    expect(isSameLength('words', 'superior')).toBe(false);
})

test ('The function return false when the given words haven\'t the same length. Testing with "when", "another"', () => {
    expect(isSameLength('when', 'another')).toBe(false);
})
