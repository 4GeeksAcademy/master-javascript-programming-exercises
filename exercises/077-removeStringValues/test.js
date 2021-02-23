const rewire = require("rewire");

test('Function removeStringValues must exist', () => {
    const removeStringValues = rewire("./app.js").__get__("removeStringValues");
    expect(removeStringValues).not.toBe(undefined);
});


test('The function must removes any properties whose values are strings.', () => {
    const removeStringValues = rewire("./app.js").__get__("removeStringValues");
    var obj = {
        a: 2,
        b: 'remaining',
        c: 4
    };
    removeStringValues(obj)
    expect(obj).toEqual({ a: 2, c:4 })
})

test('The function must ignore any properties whose values are strings.', () => {
    const removeStringValues = rewire("./app.js").__get__("removeStringValues");
    var obj = {
        name: 'Sam',
        age: 20
    }
    removeStringValues(obj)
    expect(obj).toEqual({ age: 20 })
})