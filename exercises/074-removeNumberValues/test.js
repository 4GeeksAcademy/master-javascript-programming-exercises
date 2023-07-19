const rewire = require("rewire");
const removeNumberValues = rewire("./app.js").__get__("removeNumberValues");

test('Function removeNumberValues must exist', () => {
    expect(removeNumberValues).not.toBe(undefined);
});

test('The function must remove any properties whose values are numbers', () => {
    let obj = {
        a: 2,
        b: 'remaining',
        c: 4
    };
    removeNumberValues(obj)
    expect(obj).toEqual({ b: 'remaining' })
});

test('The function must remove any properties whose values are numbers. Testing with different values', () => {
    let obj = {
        a: [3, 2, 6, 'hello'],
        b: 'u can',
        c: 4,
        d: 'do it',
        e: 8
    }
    removeNumberValues(obj)
    expect(obj).toEqual({ a: [3, 2, 6, 'hello'], b: 'u can', d: 'do it' })
});
