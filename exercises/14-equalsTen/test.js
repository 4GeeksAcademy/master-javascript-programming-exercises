const rewire = require ("rewire");

test ('function returns whether or not the given number is 10.', () => {
    const equalsTen = rewire ('./app.js').__get__("equalsTen");

    expect(equalsTen(10)).toBe(true);
    expect(equalsTen(9)).toBe(false);
})

test ('Use three equals === to compare because we need exact match', () => {
    const equalsTen = rewire ('./app.js').__get__("equalsTen");

    expect(equalsTen("10")).toBe(false);
})