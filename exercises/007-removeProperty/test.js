const rewire = require ("rewire");

test ('The function removeProperty must exist', () => {
    const removeProperty = rewire ('./app.js').__get__("removeProperty");
    expect(removeProperty).not.toBe(undefined);
})

test ('Function removes the given key from the given object.', function () {
    const removeProperty = rewire ('./app.js').__get__("removeProperty");

    const obj = {
        name: 'Sam',
        age: 20
    }
    removeProperty(obj,'name')
    expect(obj.name).toBe(undefined);
})

test ('Testing the function with an object and a key, it should remove the key', () => {
    const removeProperty = rewire ('./app.js').__get__("removeProperty");

    let obj = {
        name: 'Sam',
        age: 20
    }
    removeProperty(obj,'age')
    expect(obj.age).toBe(undefined);
})
