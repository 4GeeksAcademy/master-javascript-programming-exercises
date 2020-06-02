const rewire = require ("rewire");

test ('function should return whether the number given is even.', () => {
    const isEven = rewire ('./app.js').__get__("isEven");

    const output = isEven(11)
    expect(output).toBe(false);
})

test ('function should return whether the number given is even.', () => {
    const isEven = rewire ('./app.js').__get__("isEven");

    const output = isEven(10)
    expect(output).toBe(true);
})