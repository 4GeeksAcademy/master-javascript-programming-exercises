const rewire = require ("rewire");

test ('function should return whether the given words have the same length.', () => {
    const isSameLength = rewire ('./app.js').__get__("isSameLength");

    const output = isSameLength('words', 'super');
    expect(output).toBe(true);
})

test ('function should return whether the given words have the same length.', () => {
    const isSameLength = rewire ('./app.js').__get__("isSameLength");

    const output = isSameLength('words', 'superior');
    expect(output).toBe(false);
})