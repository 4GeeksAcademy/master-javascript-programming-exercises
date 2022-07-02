const rewire = require("rewire");
const removeStringValues = rewire("./app.js").__get__("removeStringValues");
const obj = rewire("./app.js").__get__("obj");

test('Function removeStringValues must exist', () => {
    
    expect(removeStringValues).not.toBe(undefined);
});
test('Function removeStringValues must return something', () => {
    
    expect(removeStringValues({a: 1})).not.toBe(undefined);
});
test('Function removeStringValues must return an object', () => {
    
    expect(typeof removeStringValues({a: 1})).toBe("object");
});
test('Variable obj should exist', () => {
    
    expect(obj).not.toBe(undefined);
});


test('The function must removes any properties whose values are strings.', () => {
   
    let obj = {
        name: 'Sam',
        age: 20
    }
    removeStringValues(obj)
    expect(obj).toEqual({ age: 20 })
})
test('The function must removes any properties whose values are strings.', () => {
   
    var obj = {
        a: 2,
        b: 'remaining',
        c: 4
    };
    removeStringValues(obj)
    expect(obj).toEqual({ a: 2, c: 4 })
})