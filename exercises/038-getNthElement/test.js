const rewire = require ("rewire");

test('Function getNthElement must exist', () => {
    const getNthElement = rewire("./app.js").__get__("getNthElement");
    expect(getNthElement).not.toBe(undefined);
});

test('Function must return the value of the 2nd value position in getNthElement array', () => {
    const getNthElement = rewire("./app.js").__get__("getNthElement");
    const output = getNthElement([1, 3, 5], 0)
    expect(output).toStrictEqual(1)
})

test('Function must return the value of the 2nd value position in getNthElement array', () => {
    const getNthElement = rewire("./app.js").__get__("getNthElement");
    const output = getNthElement([1, 3, 5], 1)
    expect(output).toStrictEqual(3)
})

test('Function must return the value of the 2nd value position in getNthElement array', () => {
    const getNthElement = rewire("./app.js").__get__("getNthElement");
    const output = getNthElement([1, 3, 5], 2)
    expect(output).toStrictEqual(5)
})

test('Function must return the value of the 2nd value position in getNthElement array', () => {
    const getNthElement = rewire("./app.js").__get__("getNthElement");
    const output = getNthElement([1, 3, 5], 3)
    expect(output).toStrictEqual(undefined)
})