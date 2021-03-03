const rewire = require ("rewire");

test('Function getLastElement must exist', () => {
    const getLastElement = rewire("./app.js").__get__("getLastElement");
    expect(getLastElement).not.toBe(undefined);
});

test('Function must return the last value of the array', () => {
    const getLastElement = rewire("./app.js").__get__("getLastElement");
    let output = getLastElement([95, 3])
    expect(output).toStrictEqual(3)
    output = getLastElement([1, 3, 9])
    expect(output).toStrictEqual(9)
})