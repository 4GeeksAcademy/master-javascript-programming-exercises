const rewire = require("rewire");

test('Function repeatString must exist', () => {
    const repeatString = rewire("./app.js").__get__("repeatString");
    expect(repeatString).not.toBe(undefined);
});

test('Given a string and a number, it returns the given string as many times as the given number.', () => {
    const repeatString = rewire('./app.js').__get__("repeatString");
   
    expect(repeatString('code', 3)).toBe('codecodecode');
    expect(repeatString('muda', 6)).toBe('mudamudamudamudamudamuda');

})