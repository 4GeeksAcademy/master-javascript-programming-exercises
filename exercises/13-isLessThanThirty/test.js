const rewire = require ("rewire");

test ('function should return whether the given number is less than 30.', () => {
    const isLessThan30 = rewire ('./app.js').__get__("isLessThan30");

    expect(isLessThan30(29)).toBe(true);
    expect(isLessThan30(30)).toBe(false);
})
