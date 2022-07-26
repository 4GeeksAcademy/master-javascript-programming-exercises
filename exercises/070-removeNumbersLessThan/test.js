const rewire = require("rewire");

test('Function removeNumbersLessThan must exist', () => {
    const removeNumbersLessThan = rewire("./app.js").__get__("removeNumbersLessThan");
    expect(removeNumbersLessThan).not.toBe(undefined);
});

test('The function must remove any property whose value is a number less than the given number.', () => {
    const removeNumbersLessThan = rewire("./app.js").__get__("removeNumbersLessThan");
    let obj = {
        a: 8,
        b: 2,
        c: 'montana'
    }
    removeNumbersLessThan(5, obj)
    let output = (obj)
    expect(output).toEqual({ a: 8, c: 'montana' })

    obj = {
        a: 9,
        b: 11,
        c: 'chile'
    }
    removeNumbersLessThan(10, obj)
    output = (obj)
    expect(output).toEqual({ b: 11, c: 'chile' })
})
