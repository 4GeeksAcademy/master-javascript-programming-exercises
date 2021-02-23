const rewire = require("rewire");

test('Function "or" must exist', () => {
    const or = rewire("./app.js").__get__("or");
    expect(or).not.toBe(undefined);
});

test('Function must return true or false', () => {
    const or = rewire('./app.js').__get__("or");

    var output = or(true, false);
    expect(output).toBe(true)
})
test('Function must return false, only if the value is false', () => {
    const or = rewire('./app.js').__get__("or");

    var output = or(false);
    expect(output).not.toBe(true)
    expect(output).toBe(false)
})

test('Function must return false, only if the value is true', () => {
    const or = rewire('./app.js').__get__("or");

    var output = or(true);
    expect(output).not.toBe(false)
    expect(output).toBe(true)
})