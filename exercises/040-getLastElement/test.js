const rewire = require ("rewire");

test('Function getLastElement must exist', () => {
    const getLastElement = rewire("./app.js").__get__("getLastElement");
    expect(getLastElement).not.toBe(undefined);
});

test('Function must return the last value of the array', () => {
    const getLastElement = rewire("./app.js").__get__("getLastElement");
    const output = getLastElement([95, 3], 1)
    expect(output).toStrictEqual(3)
})
test('Function must return the last value of the array', () => {
    const getLastElement = rewire("./app.js").__get__("getLastElement");
    const output = getLastElement([1, 3, 9], 2)
    expect(output).toStrictEqual(9)
})
test('Function must not return the 3rd value of the array', () => {
    const getLastElement = rewire("./app.js").__get__("getLastElement");
    const output = getLastElement([1, 3, 9, 10], 2)
    expect(output).not.toBe(9)
})