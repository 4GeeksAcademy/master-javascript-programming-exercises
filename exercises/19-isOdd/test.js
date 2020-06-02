const rewire = require ("rewire");

test ('function should return whether the given number is odd.', () => {
    const isOdd = rewire ('./app.js').__get__("isOdd");

    const output = isOdd(9)
    expect(output).toBe(true);
})

test ('function should return whether the given number is odd.', () => {
    const isOdd = rewire ('./app.js').__get__("isOdd");

    const output = isOdd(10)
    expect(output).toBe(false);
})