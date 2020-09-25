const rewire = require ("rewire");

test('Function getIndexOf must exist', () => {
    const getIndexOf = rewire("./app.js").__get__("getIndexOf");
    expect(getIndexOf).not.toBe(undefined);
});

test ('The funtion must return the first position (index) of the given character in the given string.', () => {
    const getIndexOf = rewire ('./app.js').__get__("getIndexOf");
    
    let char = 'a';
    let str =  'I am a hacker'
    var output = getIndexOf('a', 'I am a hacker');
    expect(char).toBe(str[2]);
})

test ('The funtion must return the first position (index) of the given character in the given string.', () => {
    const getIndexOf = rewire ('./app.js').__get__("getIndexOf");
    
    let char = 'l';
    let str =  'i really like soup'
    var output = getIndexOf('a', 'I am a hacker');
    expect(char).toBe(str[5]);
})


