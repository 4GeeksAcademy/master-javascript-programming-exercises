const rewire = require("rewire");

test('Function getSmallestElementAtProperty must exist', () => {
    const getSmallestElementAtProperty = rewire("./app.js").__get__("getSmallestElementAtProperty");
    expect(getSmallestElementAtProperty).not.toBe(undefined);
});

test('If the array is void, it should return an void array.', () => {
    const getSmallestElementAtProperty = rewire("./app.js").__get__("getSmallestElementAtProperty");
    var obj = {
        key: [2, 1, 5]
    };
    var output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toBe(1)
})

test('If the array is void, it should return an void array.', () => {
    const getSmallestElementAtProperty = rewire("./app.js").__get__("getSmallestElementAtProperty");
    var obj = {
        key: []
    };
    var output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If the property in the given key is not an array, it should return an empty array.', () => {
    const getSmallestElementAtProperty = rewire("./app.js").__get__("getSmallestElementAtProperty");
    var obj = {
        key: 3
    };
    var output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If there is no property on the key, it should return an empty array.', () => {
    const getSmallestElementAtProperty = rewire("./app.js").__get__("getSmallestElementAtProperty");
    var obj = {
    };
    var output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})