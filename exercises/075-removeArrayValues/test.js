const rewire = require("rewire");

test('Function removeArrayValues must exist', () => {
    const removeArrayValues = rewire("./app.js").__get__("removeArrayValues");
    expect(removeArrayValues).not.toBe(undefined);
});


test('The function must removes any properties whose values are arrays.', () => {
    const removeArrayValues = rewire("./app.js").__get__("removeArrayValues");
    var obj = {
        a: [1, 3, 4],
        b: 2,
        c: ['hi', 'there']
    }
    removeArrayValues(obj)
    expect(obj).toEqual({ b: 2 })

    obj = {
        a: [3, 2, 6],
        b: 55,
        c: ['let\'s', 'rock'],
        d: 13
    }
    removeArrayValues(obj)
    expect(obj).toEqual({ b: 55, d: 13 })
})
