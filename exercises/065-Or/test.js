const rewire = require("rewire");

test('Function "or" must exist', () => {
    const or = rewire("./app.js").__get__("or");
    expect(or).not.toBe(undefined);
});

test('Function must return true or false', () => {
    const or = rewire('./app.js').__get__("or");

    var output = or(true, false);
    expect(!(!output && !output)).toBeTruthy()

    var output = or(false, false);
    expect(!(!output && !output)).toBeFalsy()
})