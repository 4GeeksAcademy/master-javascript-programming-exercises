const rewire = require("rewire");
const removeEvenValues = rewire("./app.js").__get__("removeEvenValues");

test('Function removeEvenValues must exist', () => {
    
    expect(removeEvenValues).not.toBe(undefined);
});
test('Function removeEvenValues must return something', () => {
    
    expect(removeEvenValues({a: 2, b: 2})).not.toBe(undefined);
});
test('Function removeEvenValues must return an object', () => {
    
    expect(typeof removeEvenValues({a: 2, b: 1})).toBe("object");
});

test('The function must return the object with properties that are an odd number.', () => {
    let obj = {
        a: 1,
        b: 3,
        c: 5
    };
    removeEvenValues(obj)
    expect(obj).toEqual({ a: 1, b: 3, c: 5 })
})


test('The function must removes any properties whose values are even numbers', () => {

    let obj = {
        a: 3,
        b: 7,
        c: 9
    };
    removeEvenValues(obj)
    expect(obj).toEqual({ a: 3, b: 7, c: 9 })
})
test('The function must removes any properties whose values are even numbers', () => {
    let obj = {
        a: 2,
        b: 3,
        c: 4
    };
    removeEvenValues(obj)
    expect(obj).toEqual({ b: 3 })
})

