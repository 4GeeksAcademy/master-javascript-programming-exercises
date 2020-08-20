const rewire = require ("rewire");

test ('function should return whether it is greater than 10.', () => {
    const isGreaterThanTen = rewire ('./app.js').__get__("isGreaterThanTen");

    expect(isGreaterThanTen(11)).toBe(true);
    expect(isGreaterThanTen(10)).toBe(false);
})