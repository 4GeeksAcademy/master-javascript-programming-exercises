const rewire = require("rewire");

test('Function getElementOfArrayProperty must exist', () => {
    const getElementOfArrayProperty = rewire("./app.js").__get__("getElementOfArrayProperty");
    expect(getElementOfArrayProperty).not.toBe(undefined);
});

test('The function must returns the value of an element in the index provided within the Object in the given Key.', () => {
    const getElementOfArrayProperty = rewire("./app.js").__get__("getElementOfArrayProperty");
    var obj = {
        key: ['Vladimir', 'Jimmy', 'Harris']
    };
    var output = getElementOfArrayProperty(obj, 'key', 0)
    expect(output).toBe('Vladimir')
})

test('If the array is void, it should return an void array.', () => {
    const getElementOfArrayProperty = rewire("./app.js").__get__("getElementOfArrayProperty");
    var obj = {
        key: []
    };
    var output = getElementOfArrayProperty(obj, 'key')
    expect(output).toBe(undefined)
})

test('If the property in the given key is not an array, it should return an empty array.', () => {
    const getElementOfArrayProperty = rewire("./app.js").__get__("getElementOfArrayProperty");
    var obj = {
        key: 9
    };
    var output = getElementOfArrayProperty(obj, 'key')
    expect(output).toBe(undefined)
})

test('If there is no property on the key, it should return an empty array.', () => {
    const getElementOfArrayProperty = rewire("./app.js").__get__("getElementOfArrayProperty");
    var obj = {
    };
    var output = getElementOfArrayProperty(obj, 'key')
    expect(output).toBe(undefined)
})