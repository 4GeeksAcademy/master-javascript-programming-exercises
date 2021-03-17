const rewire = require("rewire");

test('Function countNumberOfKeys must exist', () => {
    const countNumberOfKeys = rewire("./app.js").__get__("countNumberOfKeys");
    expect(countNumberOfKeys).not.toBe(undefined);
});


test('The function must returns how many properties the given object has.', () => {
    const countNumberOfKeys = rewire("./app.js").__get__("countNumberOfKeys");
    var obj = {
        a: 1,
        b: 2,
        c: 3
    };
    let output = countNumberOfKeys(obj)
    expect(output).toBe(3)

    obj = {
        a: 5,
        b: 4,
        b: 3,
        c: 2,
        d: 1
    };
    output = countNumberOfKeys(obj)
    expect(output).toBe(4)
})