const rewire = require ("rewire");

test ('function should return the length of the given word.', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");

    expect(getLengthOfWord('some')).toBe(4);
    expect(getLengthOfWord('somemorewordshere')).toBe(17);
})
