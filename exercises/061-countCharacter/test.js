const rewire = require("rewire");

test('Function countCharacter must exist', () => {
    const countCharacter = rewire("./app.js").__get__("countCharacter");
    expect(countCharacter).not.toBe(undefined);
});

test('Function must returns the number of occurences of a given character', () => {
    const countCharacter = rewire('./app.js').__get__("countCharacter");

    var output = countCharacter('I am a hacker', 'a')
    expect(output).toBe(3)
})


test('Function must returns the number of occurences of a given character', () => {
    const countCharacter = rewire('./app.js').__get__("countCharacter");

    var output = countCharacter("Tres tigres tristes", 's')
    expect(output).toBe(4)
})

test('Function must not return the length of the given string', () => {
    const countCharacter = rewire('./app.js').__get__("countCharacter");

    var output = countCharacter("starship", 's')
    expect(output).not.toBe(8)
})