const rewire = require("rewire");
const removeStringValues = rewire("./app.js").__get__("removeStringValues");

test('Function removeStringValues must exist', () => {
    expect(removeStringValues).not.toBe(undefined);
});

test('The function must remove any properties whose values are strings', () => {
    let obj = {
        name: 'Sam',
        age: 20
    }
    removeStringValues(obj)
    expect(obj).toEqual({ age: 20 })
});

test('The function must remove any properties whose values are strings. Testing with different values', () => {
    let obj = {
        a: 2,
        b: 'remaining',
        c: 4
    };
    removeStringValues(obj)
    expect(obj).toEqual({ a: 2, c: 4 })
});
