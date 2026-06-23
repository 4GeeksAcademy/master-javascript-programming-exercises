const rewire = require("rewire");
const removeNumbersLargerThan = rewire("./app.js").__get__("removeNumbersLargerThan");

test('Function removeNumbersLargerThan must exist', () => {
    expect(removeNumbersLargerThan).not.toBe(undefined);
});

test('The function must remove any property whose value is a number greater than the given number', () => {
    let obj = {
        a: 9,
        b: 11,
        c: 'chile'
    }
    removeNumbersLargerThan(10, obj)
    let output = obj
    expect(output).toEqual({ a: 9, c: 'chile' })
});

test('The function must remove any property whose value is a number greater than the given number. Testing with different values', () => {
    let obj = {
        a: 8,
        b: 2,
        c: 'montana'
    }
    removeNumbersLargerThan(5, obj)
    let output = obj
    expect(output).toEqual({ b: 2, c: 'montana' })
})
