const rewire = require("rewire");
const removeArrayValues = rewire("./app.js").__get__("removeArrayValues");

test('Function removeArrayValues must exist', () => {
    expect(removeArrayValues).not.toBe(undefined);
});

test('The function must remove any properties whose values are arrays.', () => {
    let obj = {
        a: [1, 3, 4],
        b: 2,
        c: ['hi', 'there']
    }
    removeArrayValues(obj)
    expect(obj).toEqual({ b: 2 })
});

test('The function must removes any properties whose values are arrays.', () => {
    let obj = {
        a: [3, 2, 6],
        b: ['let\'s', 'rock'],
        c: 55,
        d: 13
    }
    removeArrayValues(obj)
    expect(obj).toEqual({ c: 55, d: 13 })
});