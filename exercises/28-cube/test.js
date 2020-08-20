const rewire = require ("rewire");

test ('function should return the cube of the number given.', () => {
    const cube = rewire ('./app.js').__get__("cube");

    expect(cube(24)).toBe(13824);
    expect(cube(93)).toBe(804357);
})