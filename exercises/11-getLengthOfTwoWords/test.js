const rewire = require ("rewire");

test ('function should return the sum of their lengths.', () => {
    const getLengthOfTwoWords = rewire ('./app.js').__get__("getLengthOfTwoWords");

    const output = getLengthOfTwoWords('some', 'words');
    expect(output).toBe(9);
})