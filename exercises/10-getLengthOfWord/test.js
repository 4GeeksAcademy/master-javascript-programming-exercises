const rewire = require ("rewire");

test ('function should return the length of the given word.', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");

    const output = getLengthOfWord('some')
    expect(output).toBe(4);
})

test ('function should return the length of the given word.', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");

    const output = getLengthOfWord(4)
    expect(output).not.toBeDefined();
})