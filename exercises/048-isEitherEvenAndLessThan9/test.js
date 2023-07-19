const rewire = require("rewire");
const isEitherEvenAndLessThan9 = rewire('./app.js').__get__("isEitherEvenAndLessThan9");


test('Function "isEitherEvenAndLessThan9" must exist', () => {
    expect(isEitherEvenAndLessThan9).not.toBe(undefined);
});

test('Function "isEitherEvenAndLessThan9" must return something', () => {
    expect(isEitherEvenAndLessThan9(1,2)).not.toBe(undefined);
});

test('Function "isEitherEvenAndLessThan9" must return a boolean', () => {
    expect(typeof isEitherEvenAndLessThan9(1,2)).toBe("boolean");
});

test('The function must return true if at least one number is even and both are less than 9. Testing with (3,4)', () => {
    let output = isEitherEvenAndLessThan9(3, 4);
    expect(output).toBe(true);
});

test('The function must return true if at least one number is even and both are less than 9. Testing with (2,8)', () => {
    let output = isEitherEvenAndLessThan9(2, 8);
    expect(output).toBe(true);
});

test('The function must return true if at least one number is even and both are less than 9. Testing with (0,0)', () => {
    let output = isEitherEvenAndLessThan9(0, 0);
    expect(output).toBe(true);
});

test('The function must return true if at least one number is even and both are less than 9. Testing with (72,2)', () => {
    let output = isEitherEvenAndLessThan9(72, 2);
    expect(output).toBe(false);
});

test('The function must return true if at least one number is even and both are less than 9. Testing with (72,10)', () => {
    let output = isEitherEvenAndLessThan9(72, 10);
    expect(output).toBe(false);
});

test('The function must return true if at least one number is even and both are less than 9. Testing with (9,5)', () => {
    let output = isEitherEvenAndLessThan9(9, 5);
    expect(output).toBe(false);
});
