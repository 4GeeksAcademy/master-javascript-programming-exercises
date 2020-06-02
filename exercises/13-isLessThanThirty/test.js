const rewire = require ("rewire");

test ('function should return whether the given number is less than 30.', () => {
    const isLessThan30 = rewire ('./app.js').__get__("isLessThan30");

    const output = isLessThan30(9)
    expect(output).toBe(true);
})

test ('function should return whether the given number is less than 30.', () => {
    const isLessThan30 = rewire ('./app.js').__get__("isLessThan30");

    const output = isLessThan30(31)
    expect(output).toBe(false);
})