const rewire = require("rewire");

test('Function removeStringValuesLongerThan must exist', () => {
    const removeStringValuesLongerThan = rewire("./app.js").__get__("removeStringValuesLongerThan");
    expect(removeStringValuesLongerThan).not.toBe(undefined);
});

test('The function must eliminate the property whose values are strings longer than the given number.', () => {
    const removeStringValuesLongerThan = rewire("./app.js").__get__("removeStringValuesLongerThan");
    var obj = {
        name: 'Montana',
        age: 20,
        location: 'Texas'
    };
    removeStringValuesLongerThan(6, obj)
    expect(obj).toEqual({ age: 20, location: 'Texas' })
})

test('The function must eliminate the property whose values are strings longer than the given number.', () => {
    const removeStringValuesLongerThan = rewire("./app.js").__get__("removeStringValuesLongerThan");
    var obj = {
        name: 'Tea',
        price: 5,
        location: 'Colombia',
        type: 'Mint'
    }
    removeStringValuesLongerThan(4, obj)
    expect(obj).toEqual({ name: 'Tea', price: 5, type:'Mint' })
})