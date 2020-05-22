const rewire = require ("rewire");

test ('fuction removed object name', function () {
    const removeProperty = rewire ('./app.js').__get__("removeProperty");

    const obj = {
        name: 'Sam',
        age: 20
    }
    const expected = removeProperty(obj,'name')
    expect(expected).toBe(undefined);
})

test ('fuction should not read name', () => {
    const removeProperty = rewire ('./app.js').__get__("removeProperty");

    var obj = {
        name: 'Sam',
        age: 20
    }
    removeProperty(obj, 'name');
    expect(obj.name).not.toBe('Sam');
})

test ('fuction should not read age', () => {
    const removeProperty = rewire ('./app.js').__get__("removeProperty");

    var obj = {
        name: 'Sam',
        age: 20
    }
    removeProperty(obj, 'age');
    expect(obj.age).not.toBe(Number);
})

console.log = jest.fn(() => null);
test ( 'console log should return Undefined', function(){
    
    require("./app.js");
    
    expect(console.log).toHaveBeenCalledWith(undefined);
})