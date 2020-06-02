const rewire = require ("rewire");

test ('function should return that num2 should not be equal to num1', () => {
    const isEqualTo = rewire ('./app.js').__get__("isEqualTo");

    const output = isEqualTo(11, 10)
    expect(output).toBeFalsy();
})

test ('function should return whether num2 is equal to num1.', () => {
    const isEqualTo = rewire ('./app.js').__get__("isEqualTo");

    const output = isEqualTo(10, 10)
    expect(output).toBe(true);
})