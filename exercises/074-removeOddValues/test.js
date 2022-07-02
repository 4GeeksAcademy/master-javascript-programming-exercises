const rewire = require("rewire");
const removeOddValues = rewire("./app.js").__get__("removeOddValues");

test('Function removeOddValues must exist', () => {
    
    expect(removeOddValues).not.toBe(undefined);
});
test('Function removeOddValues must return something', () => {
    
    expect(removeOddValues({a: 1, b: 2})).not.toBe(undefined);
});
test('Function removeOddValues must return an object', () => {
    
    expect(typeof removeOddValues({a: 1, b: 2})).toBe("object");
});

test('The function must removes any properties whose values are odd numbers.', () => {
    
    var obj = {
        a: 2,
        b: 3,
        c: 4
    };
    removeOddValues(obj)
    expect(obj).toEqual({ a: 2, c: 4})
})
test('The function must removes any properties whose values are odd numbers.', () => {

    let obj = {
        a: 5,
        b: 4,
        b: 3,
        c: 2,
        d: 1
    };
    removeOddValues(obj)
    expect(obj).toEqual({ c: 2})
})
