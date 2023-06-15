const rewire = require("rewire");
const extend = rewire("./app.js").__get__("extend");

test('Function "extend" must exist', () => {
    expect(extend).not.toBe(undefined);
});

test('The function must add the properties of the 2nd object to the first one', () => {
    let obj1 = {
        a: 1,
        b: 2
    }
    let obj2 = {
        b: 4,
        c: 3
    }
    extend(obj1, obj2)
    let output = obj1
    expect(output).toEqual({ a: 1, b: 2, c: 3 })
});

test('If the first object already has the given key, ignore it (don\'t override the property value)', () => {
    let obj1 = {
        a: 74,
        b: 22
    }
    let obj2 = {
        b: 2227,
        c: 91
    }
    extend(obj1, obj2)
    let output = obj1
    expect(output).toEqual({ a: 74, b: 22, c: 91 })
});
