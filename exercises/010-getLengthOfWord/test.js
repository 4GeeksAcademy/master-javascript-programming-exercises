const rewire = require ("rewire");

test ('The function getLengthOfWord must exist', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");
    expect(getLengthOfWord).not.toBe(undefined);
})
test ('The function should return a number', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");
    expect(typeof getLengthOfWord('some')).toBe(typeof 4);
})
test ('Function should return the length of the given word. Tested with: some', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");

    expect(getLengthOfWord('some')).toBe(4);
})

test ('Function should return the length of the given word. Tested with: somemorewordshere', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");
    expect(getLengthOfWord('somemorewordshere')).toBe(17);
})

