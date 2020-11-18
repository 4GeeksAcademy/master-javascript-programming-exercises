const rewire = require ("rewire");

test('Function isEven must exist', () => {
    const isEven = rewire("./app.js").__get__("isEven");
    expect(isEven).not.toBe(undefined);
});

test('Function isEven must return true or false', () => {
    const isEven = rewire("./app.js").__get__("isEven");
    expect(isEven(20)).not.toBe(undefined);
});

test ('function should return whether the number given is even.', () => {
    const isEven = rewire ('./app.js').__get__("isEven");
    
    expect(isEven(11)).toBe(false);
    expect(isEven(10)).toBe(true);
})