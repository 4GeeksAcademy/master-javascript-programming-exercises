const rewire = require ("rewire");

test ('function removes the given key from the given object.', function () {
    const removeProperty = rewire ('./app.js').__get__("removeProperty");

    const obj = {
        name: 'Sam',
        age: 20
    }
    removeProperty(obj,'name')
    expect(obj.name).toBe(undefined);
})

test ('Tried the function with key age, it should remove it', () => {
    const removeProperty = rewire ('./app.js').__get__("removeProperty");

    var obj = {
        name: 'Sam',
        age: 20
    }
    removeProperty(obj,'age')
    expect(obj.age).toBe(undefined);
})