const rewire = require ("rewire");

const isEvenAndGreaterThanTen = rewire("./app.js").__get__("isEvenAndGreaterThanTen");
test('Function isEvenAndGreaterThanTen must exist', () => {
    expect(isEvenAndGreaterThanTen).not.toBe(undefined);
});

test('Function isEvenAndGreaterThanTen must return a boolean', () => {
    expect(typeof(isEvenAndGreaterThanTen(100))).toBe("boolean");
});

test ('The function should return true if the given number is greater and even than ten.', () => {
    expect(isEvenAndGreaterThanTen(12)).toBe(true);
})

test ('The function should return false when the given number isn\'t greater than ten or odd.', () => {
    expect(isEvenAndGreaterThanTen(13)).toBe(false);
})

test ('The function should return false when the given number isn\'t greater than ten or odd.', () => {
    expect(isEvenAndGreaterThanTen(3)).toBe(false);
})

test ('The function should return false when the given number isn\'t greater than ten or odd.', () => {
    expect(isEvenAndGreaterThanTen(6)).toBe(false);
})
