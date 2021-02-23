const rewire = require("rewire");

test('Function removeNumbersLargerThan must exist', () => {
    const removeNumbersLargerThan = rewire("./app.js").__get__("removeNumbersLargerThan");
    expect(removeNumbersLargerThan).not.toBe(undefined);
});

test('The function must remove any property whose value is a number greater than the given number.', () => {
    const removeNumbersLargerThan = rewire("./app.js").__get__("removeNumbersLargerThan");
    var obj = {
        a: 8,
        b: 2,
        c: 'montana'
    }
    removeNumbersLargerThan(5, obj)
    var output = (obj)
    expect(output).toEqual({ b: 2, c: 'montana' })
})

test('The function must remove any property whose value is a number greater than the given number.', () => {
    const removeNumbersLargerThan = rewire("./app.js").__get__("removeNumbersLargerThan");
    var obj = {
        a: 9,
        b: 11,
        c: 'chile'
    }
    removeNumbersLargerThan(10, obj)
    var output = (obj)
    expect(output).toEqual({ a: 9, c: 'chile' })
})