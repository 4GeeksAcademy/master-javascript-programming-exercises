const rewire = require ("rewire");

test('Function getFirstElement must exist', () => {
    const getFirstElement = rewire("./app.js").__get__("getFirstElement");
    expect(getFirstElement).not.toBe(undefined);
});

test('Function must return the first value of the array', () => {
    const getFirstElement = rewire("./app.js").__get__("getFirstElement");
    const output = getFirstElement([1, 3, 5], 0)
    expect(output).toStrictEqual(1)
})
test('Function must return the first value of the array', () => {
    const getFirstElement = rewire("./app.js").__get__("getFirstElement");
    const output = getFirstElement([8, 5, 3], 0)
    expect(output).toStrictEqual(8)
})
test('Function must return the first value of the array', () => {
    const getFirstElement = rewire("./app.js").__get__("getFirstElement");
    const output = getFirstElement([95, 3, 7], 0)
    expect(output).toStrictEqual(95)
})