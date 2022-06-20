const rewire = require ("rewire");
const square = rewire("./app.js").__get__("square");

test('Function square must exist', () => {
    expect(square).not.toBe(undefined);
});
test('Function square should return a number', () => {
    expect(typeof square(2)).toBe("number");
});

test ('The function should return the square of the given number. Testing with (108)', () => {
    expect(square(108)).toBe(11664);
})
test ('The function should return the square of the given number. Testing with (108)', () => {
    expect(square(225)).toBe(50625);
})