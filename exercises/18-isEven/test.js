const rewire = require ("rewire");

test('Function isEven must exist', () => {
    const isEven = rewire("./app.js").__get__("isEven");
    expect(isEven).not.toBe(undefined);
});

test('Function isEven must return soomething', () => {
    const isEven = rewire("./app.js").__get__("isEven");
    expect(isEven(20)).not.toBe(undefined);
});

test('Function isEven must return a boolean (true or false)', () => {
    const isEven = rewire("./app.js").__get__("isEven");
    expect(typeof(isEven(20))).toBe("boolean");
});

test ('Tried the function with 11 and it did not return false.', () => {
    const isEven = rewire ('./app.js').__get__("isEven");
    
    expect(isEven(11)).toBe(false);
    expect(isEven(10)).toBe(true);
})