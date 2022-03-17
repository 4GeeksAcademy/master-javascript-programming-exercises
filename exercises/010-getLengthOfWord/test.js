const rewire = require ("rewire");

test('The funciton getLengthOfWord must exist.',()=>{
    const getLengthOfWord = rewire('./app.js').__get__('getLengthOfWord');
    expect(getLengthOfWord).toBeTruthy();
})
test('The funciton getLengthOfWord must return something.',()=>{
    const getLengthOfWord = rewire('./app.js').__get__('getLengthOfWord');
    expect(getLengthOfWord()).not.toBe(undefined);
})

test ('function should return the length of the given word.', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");

    expect(getLengthOfWord('some')).toBe(4);
    
})
test ('function should return the length of the given word. Testing with somemorewordshere', () => {
    const getLengthOfWord = rewire ('./app.js').__get__("getLengthOfWord");

    expect(getLengthOfWord('somemorewordshere')).toBe(17);
    
})
