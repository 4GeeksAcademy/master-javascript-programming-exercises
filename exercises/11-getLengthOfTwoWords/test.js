const rewire = require ("rewire");

test ('function should return the sum of their lengths.', () => {
    const getLengthOfTwoWords = rewire ('./app.js').__get__("getLengthOfTwoWords");

    expect(getLengthOfTwoWords('some', 'words')).toBe(9);
    expect(getLengthOfTwoWords('juana', 'lacubana')).toBe(13);
})