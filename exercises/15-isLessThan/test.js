const rewire = require ("rewire");

test ('function return whether num2 is less than num1.', () => {
    const isLessThan = rewire ('./app.js').__get__("isLessThan");

    const output = isLessThan(9, 4)
    expect(output).toBe(true);
})

test ('function should return whether num2 is less than num1.', () => {
    const isLessThan = rewire ('./app.js').__get__("isLessThan");

    const output = isLessThan(4, 9)
    expect(output).toBe(false);
})