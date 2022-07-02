const rewire = require("rewire");
const removeStringValuesLongerThan = rewire("./app.js").__get__("removeStringValuesLongerThan");

test('Function removeStringValuesLongerThan must exist', () => {
    
    expect(removeStringValuesLongerThan).not.toBe(undefined);
});
test('Function removeStringValuesLongerThan must return something', () => {
    
    expect(removeStringValuesLongerThan(1,{a:"a"})).not.toBe(undefined);
});
test('Function removeStringValuesLongerThan must return an object', () => {
    
    expect(typeof removeStringValuesLongerThan(1,{a:"a"})).toBe("object");
});

test('The function must eliminate the property whose values are strings longer than the given number.', () => { 
    let obj = {
        name: 'Tea',
        price: 5,
        location: 'Colombia',
        type: 'Mint'
    }
    removeStringValuesLongerThan(4, obj)
    expect(obj).toEqual({ name: 'Tea', price: 5, type:'Mint' })
})
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

test('The function must return the same object if no property is longer than the given number.', () => {
    var obj = {
        name: 'Tea',
        price: 5,
        location: 'Colombia',
        type: 'Mint'
    }
    removeStringValuesLongerThan(7, obj)
    expect(obj).toEqual({ name: 'Tea', price: 5, location: 'Colombia', type:'Mint' })
})