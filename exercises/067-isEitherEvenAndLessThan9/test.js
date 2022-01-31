const rewire = require("rewire");
const isEitherEvenAndLessThan9 = rewire('./app.js').__get__("isEitherEvenAndLessThan9");


test('Function "isEitherEvenAndLessThan9" must exist', () => {
    expect(isEitherEvenAndLessThan9).not.toBe(undefined);
});

test('The function must return true if at least one number is even and both are less than 9.', () => {
    var output = isEitherEvenAndLessThan9(3, 4);
    expect(output).toBe(true)
})
test('The function must return true if both numbers are even and both are less than 9.', () => {
    var output = isEitherEvenAndLessThan9(2, 8);
    expect(output).toBe(true)
})
test('The function must return true if both numbers are 0', () => {
    var output = isEitherEvenAndLessThan9(0, 0);
    expect(output).toBe(true)
})
test('The function must return false if both numbers are even but one is greater than 9.', () => {
    var output = isEitherEvenAndLessThan9(72, 2);
    expect(output).toBe(false)
})
test('The function must return false if both numbers are even and both are greater than 9.', () => {
    var output = isEitherEvenAndLessThan9(72, 10);
    expect(output).toBe(false)
})
test('The function must return false if both numbers are not even and both are less than 9.', () => {
    var output = isEitherEvenAndLessThan9(9, 5);
    expect(output).toBe(false)
})