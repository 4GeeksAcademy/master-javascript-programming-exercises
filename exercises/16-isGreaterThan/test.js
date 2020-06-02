const rewire = require ("rewire");

test ('function should return whether num2 is greater than num1.', () => {
    const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");

    const output = isGreaterThan(11, 10)
    expect(output).toBeFalsy();
})

test ('function should return whether num2 is greater than num1.', () => {
    const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");

    const output = isGreaterThan(10, 11)
    expect(output).toBeTruthy();
})