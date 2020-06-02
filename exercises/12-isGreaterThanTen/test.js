const rewire = require ("rewire");

test ('function should return whether it is greater than 10.', () => {
    const isGreaterThanTen = rewire ('./app.js').__get__("isGreaterThanTen");

    const output = isGreaterThanTen(11)
    expect(output).toBe(true);
})

test ('function should return whether it is greater than 10.', () => {
    const isGreaterThanTen = rewire ('./app.js').__get__("isGreaterThanTen");

    const output = isGreaterThanTen(9)
    expect(output).toBe(false);
})