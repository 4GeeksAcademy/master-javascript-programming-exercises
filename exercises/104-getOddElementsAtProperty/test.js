const rewire = require("rewire");

test('Function getOddElementsAtProperty must exist', () => {
    const getOddElementsAtProperty = rewire("./app.js").__get__("getOddElementsAtProperty");
    expect(getOddElementsAtProperty).not.toBe(undefined);
});

test('The function must return the odd elements of the array located in the given key.', () => {
    const getOddElementsAtProperty = rewire("./app.js").__get__("getOddElementsAtProperty");
    var obj = {
        key: [1, 2, 3, 4, 5]
    };
    var output = getOddElementsAtProperty(obj, 'key')
    expect(output).toEqual([1, 3, 5])
})

test('If the array is void, it should return an void array.', () => {
    const getOddElementsAtProperty = rewire("./app.js").__get__("getOddElementsAtProperty");
    var obj = {
        key: []
    };
    var output = getOddElementsAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If the property in the given key is not an array, it should return an empty array.', () => {
    const getOddElementsAtProperty = rewire("./app.js").__get__("getOddElementsAtProperty");
    var obj = {
        key: 20
    };
    var output = getOddElementsAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If there is no property on the key, it should return an empty array.', () => {
    const getOddElementsAtProperty = rewire("./app.js").__get__("getOddElementsAtProperty");
    var obj = {
    };
    var output = getOddElementsAtProperty(obj, 'key')
    expect(output).toEqual([])
})