const rewire = require ("rewire");

test ('function returns whether or not the given number is 10.', () => {
    const equalsTen = rewire ('./app.js').__get__("equalsTen");

    const output = equalsTen(10)
    expect(output).toBe(true);
})

test ('function should whether or not the given number is 10.', () => {
    const equalsTen = rewire ('./app.js').__get__("equalsTen");

    const output = equalsTen(9)
    expect(output).toBe(false);
})