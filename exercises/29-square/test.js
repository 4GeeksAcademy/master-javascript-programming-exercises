const rewire = require ("rewire");

test ('function should return the square of the given number.', () => {
    const square = rewire ('./app.js').__get__("square");

    expect(square(225)).toBe(50625);
    expect(square(108)).toBe(11664);
})