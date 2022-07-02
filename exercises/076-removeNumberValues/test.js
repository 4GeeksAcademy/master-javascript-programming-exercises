const rewire = require("rewire");
const removeNumberValues = rewire("./app.js").__get__("removeNumberValues");
const obj = rewire("./app.js").__get__("obj");

test('Function removeNumberValues must exist', () => {
    
    expect(removeNumberValues).not.toBe(undefined);
});
test('Function removeNumberValues must return something', () => {
    
    expect(removeNumberValues({a: 'test'})).not.toBe(undefined);
});
test('Function removeNumberValues must return an object', () => {
    
    expect(typeof removeNumberValues({a: 'test'})).toBe("object");
});
test('Variable obj should exist', () => {
    
    expect(obj).not.toBe(undefined);
});


test('The function must removes any properties whose values are numbers.', () => {
   
    let obj = {
        a: 2,
        b: 'remaining',
        c: 4
    };
    removeNumberValues(obj)
    expect(obj).toEqual({ b: 'remaining' })
})
test('The function must removes any properties whose values are numbers.', () => {
    
    let obj = {
        a: [3, 2, 6, 'hello'],
        b: 'u can',
        c: 4,
        d: 'do it',
        e: 8
    }
    removeNumberValues(obj)
    expect(obj).toEqual({ a: [3, 2, 6, 'hello'], b: 'u can', d: 'do it' })
})