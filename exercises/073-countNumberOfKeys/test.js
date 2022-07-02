const rewire = require("rewire");
const countNumberOfKeys = rewire("./app.js").__get__("countNumberOfKeys");

test('Function countNumberOfKeys must exist', () => {
    
    expect(countNumberOfKeys).not.toBe(undefined);
});
test('Function countNumberOfKeys must return something', () => {
    
    expect(countNumberOfKeys({a:1})).not.toBe(undefined);
});
test('Function countNumberOfKeys must return a number', () => {
    
    expect(typeof countNumberOfKeys({a:1})).toBe("number");
});


test('The function must returns how many properties the given object has.', () => {

    let obj = {
        a: 5,
        b: 4,
        b: 3,
        c: 2,
        d: 1
    };
    output = countNumberOfKeys(obj)
    expect(output).toBe(4)
})
test('The function must returns how many properties the given object has.', () => {
    
    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    let output = countNumberOfKeys(obj)
    expect(output).toBe(3)
})
test('The function must returns how many properties the given object has.', () => {
    
    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    let output = countNumberOfKeys(obj)
    expect(output).not.toBe(2)
})