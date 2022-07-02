const rewire = require("rewire");
const removeNumbersLessThan = rewire("./app.js").__get__("removeNumbersLessThan");

test('Function removeNumbersLessThan must exist', () => {
   
    expect(removeNumbersLessThan).not.toBe(undefined);
});
test('Function removeNumbersLessThan must return something', () => {
   
    expect(removeNumbersLessThan({a:1, b:2})).not.toBe(undefined);
});
test('Function removeNumbersLessThan must return a object', () => {
   
    expect(typeof removeNumbersLessThan({a:1, b:2})).not.toBe("object");
});

test('The function must remove any property whose value is a number less than the given number.', () => {
    let obj = {
        a: 8,
        b: 2,
        c: 'montana'
    }
    removeNumbersLessThan(5, obj)
    let output = (obj)
    expect(output).toEqual({ a: 8, c: 'montana' })
})
test('The function must remove any property whose value is a number less than the given number.', () => {

    let obj = {
        a: 9,
        b: 11,
        c: 'chile'
    }
    removeNumbersLessThan(10, obj)
    let output = (obj)
    expect(output).toEqual({ b: 11, c: 'chile' })
})
