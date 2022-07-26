const rewire = require("rewire");

test('Function removeOddValues must exist', () => {
    const removeOddValues = rewire("./app.js").__get__("removeOddValues");
    expect(removeOddValues).not.toBe(undefined);
});

test('The function must removes any properties whose values are odd numbers.', () => {
    const removeOddValues = rewire("./app.js").__get__("removeOddValues");
    let obj = {
        a: 2,
        b: 3,
        c: 4
    };
    removeOddValues(obj)
    expect(obj).toEqual({ a: 2, c: 4})

    obj = {
        a: 5,
        b: 4,
        b: 3,
        c: 2,
        d: 1
    };
    removeOddValues(obj)
    expect(obj).toEqual({ c: 2})
})
