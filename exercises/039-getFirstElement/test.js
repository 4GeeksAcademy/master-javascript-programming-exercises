const rewire = require ("rewire");

test('Function getFirstElement must exist', () => {
    const getFirstElement = rewire("./app.js").__get__("getFirstElement");
    expect(getFirstElement).not.toBe(undefined);
});

test('Function must return the first value of the array', () => {
    const getFirstElement = rewire("./app.js").__get__("getFirstElement");
    const output = getFirstElement([1, 3, 5])
    expect(output).toBe(1)
})
test('Function must return the first value of the array', () => {
    const getFirstElement = rewire("./app.js").__get__("getFirstElement");
    const output = getFirstElement([8, 5, 3])
    expect(output).toBe(8)
})
test('Function must return undefined if the length of the array is empty', () => {
    const getFirstElement = rewire("./app.js").__get__("getFirstElement");
    const output = getFirstElement([], 0)
    expect(output).toBe(undefined)
})