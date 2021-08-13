const rewire = require("rewire");

test('Function sumDigits must exist', () => {
    const sumDigits = rewire("./app.js").__get__("sumDigits");
    expect(sumDigits).not.toBe(undefined);
});

test('Function must returns the sum of all its digits.', () => {
    const sumDigits = rewire("./app.js").__get__("sumDigits");

    expect(sumDigits(316)).toBe(10)
    expect(sumDigits(124)).toBe(7)
})

test('If the number is negative, the first digit must count as negative.', () => {
    const sumDigits = rewire("./app.js").__get__("sumDigits");

    expect(sumDigits(-316)).toBe(4)
    expect(sumDigits(-124)).toBe(5)
})
