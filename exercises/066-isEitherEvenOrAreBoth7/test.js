const rewire = require("rewire");

test('Function "isEitherEvenOrAreBoth7" must exist', () => {
    const isEitherEvenOrAreBoth7 = rewire("./app.js").__get__("isEitherEvenOrAreBoth7");
    expect(isEitherEvenOrAreBoth7).not.toBe(undefined);
});

test('Function must return parameter true or false if is even or is both are 7', () => {
    const isEitherEvenOrAreBoth7 = rewire('./app.js').__get__("isEitherEvenOrAreBoth7");

    var output = isEitherEvenOrAreBoth7(3, 7);
    expect(output).toBe(false)
    var output = isEitherEvenOrAreBoth7(2, 3);
    expect(output).toBe(true)
})

test('Function must return parameter true or false if is even or is both are 7', () => {
    const isEitherEvenOrAreBoth7 = rewire('./app.js').__get__("isEitherEvenOrAreBoth7");

    var output = isEitherEvenOrAreBoth7(5, 10);
    expect(output).toBe(true)
    var output = isEitherEvenOrAreBoth7(21, 33);
    expect(output).toBe(false)
})