const rewire = require("rewire");

test('Function flipEveryNChars must exist', () => {
    const flipEveryNChars = rewire("./app.js").__get__("flipEveryNChars");
    expect(flipEveryNChars).not.toBe(undefined);
});

test('Function must create "n" characters separated according to the length of the string and mix them', () => {
    const flipEveryNChars = rewire("./app.js").__get__("flipEveryNChars");

    let output = flipEveryNChars('a short example', 5)
    expect(output).toBe('ohs axe trelpma')
})

test('Function must create "n" characters separated according to the length of the string and mix them', () => {
    const flipEveryNChars = rewire("./app.js").__get__("flipEveryNChars");

    let output = flipEveryNChars('watch my backflip', 3)
    expect(output).toBe('taw hc ymcablfkpi')
})


