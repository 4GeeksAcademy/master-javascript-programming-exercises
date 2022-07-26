const rewire = require("rewire");

test('Function getIndexOf must exist', () => {
    const getIndexOf = rewire("./app.js").__get__("getIndexOf");
    expect(getIndexOf).not.toBe(undefined);
});

test('The funtion must return the first position (index) of the given character in the given string.', () => {
    const getIndexOf = rewire('./app.js').__get__("getIndexOf");

    let char = 'a';
    let str = 'I am a hacker'
    let output = getIndexOf('a', 'I am a hacker');
    expect(output).toBe(2);


    char = 'l';
    str = 'i really like soup'
    output = getIndexOf(char, str);
    expect(output).toBe(5);
})

test("The function must return -1 If the character does not exist in the string", () => {
    const getIndexOf = rewire('./app.js').__get__("getIndexOf");
    let char = 'z';
    let str = "hello"
    let output = getIndexOf(char, str);
    expect(output).toBe(-1);
})
