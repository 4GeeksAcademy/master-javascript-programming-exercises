const rewire = require("rewire");

test('Function removeNumberValues must exist', () => {
    const removeNumberValues = rewire("./app.js").__get__("removeNumberValues");
    expect(removeNumberValues).not.toBe(undefined);
});


test('The function must removes any properties whose values are numbers.', () => {
    const removeNumberValues = rewire("./app.js").__get__("removeNumberValues");
    let obj = {
        a: 2,
        b: 'remaining',
        c: 4
    };
    removeNumberValues(obj)
    expect(obj).toEqual({ b: 'remaining' })

    obj = {
        a: [3, 2, 6, 'hello'],
        b: 'u can',
        c: 4,
        d: 'do it',
        e: 8
    }
    removeNumberValues(obj)
    expect(obj).toEqual({ a: [3, 2, 6, 'hello'], b: 'u can', d: 'do it' })
})