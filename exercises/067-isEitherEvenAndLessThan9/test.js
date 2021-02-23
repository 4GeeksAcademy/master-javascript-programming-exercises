const rewire = require("rewire");

test('Function "isEitherEvenAndLessThan9" must exist', () => {
    const isEitherEvenAndLessThan9 = rewire("./app.js").__get__("isEitherEvenAndLessThan9");
    expect(isEitherEvenAndLessThan9).not.toBe(undefined);
});

test('The function must return true if it is even or both are less than 9.', () => {
    const isEitherEvenAndLessThan9 = rewire('./app.js').__get__("isEitherEvenAndLessThan9");

    var output = isEitherEvenAndLessThan9(2, 4);
    expect(output).toBe(true)
    var output = isEitherEvenAndLessThan9(5, 8);
    expect(output).toBe(true)
})

test('The function should return false if it is not even or both are greater than 9.', () => {
    const isEitherEvenAndLessThan9 = rewire('./app.js').__get__("isEitherEvenAndLessThan9");

    var output = isEitherEvenAndLessThan9(72, 2);
    expect(output).toBe(false)
    var output = isEitherEvenAndLessThan9(21, 33);
    expect(output).toBe(false)
})