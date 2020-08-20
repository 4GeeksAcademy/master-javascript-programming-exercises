const rewire = require ("rewire");

test ('function should return the average of their lengths.', () => {
    const computeAverageLengthOfWords = rewire ('./app.js').__get__("computeAverageLengthOfWords");

    expect(computeAverageLengthOfWords('hammer', 'anvil')).toBe(5.5);
    expect(computeAverageLengthOfWords('pepito', 'forever')).toBe(6.5);
})