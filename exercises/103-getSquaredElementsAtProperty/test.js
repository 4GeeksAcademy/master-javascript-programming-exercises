const rewire = require("rewire");

test('Function getSquaredElementsAtProperty must exist', () => {
    const getSquaredElementsAtProperty = rewire("./app.js").__get__("getSquaredElementsAtProperty");
    expect(getSquaredElementsAtProperty).not.toBe(undefined);
});

test('The Function must returns an array containing all the squared elements of the array, located at the given key.', () => {
    const getSquaredElementsAtProperty = rewire("./app.js").__get__("getSquaredElementsAtProperty");
    let obj = {
        key: [2, 1, 5]
    };
    let output = getSquaredElementsAtProperty(obj, 'key')
    expect(output).toEqual([4, 1, 25])

    obj = {
        key: [10, 32, 7]
    };
    output = getSquaredElementsAtProperty(obj, 'key')
    expect(output).toEqual([100, 1024, 49])
})

test('If the array is empty, it should return an empty array.', () => {
    const getSquaredElementsAtProperty = rewire("./app.js").__get__("getSquaredElementsAtProperty");
    let obj = {
        key: []
    };
    let output = getSquaredElementsAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If the property in the given key is not an array, it should return an empty array.', () => {
    const getSquaredElementsAtProperty = rewire("./app.js").__get__("getSquaredElementsAtProperty");
    let obj = {
        key: 20
    };
    let output = getSquaredElementsAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If there is no property on the key, it should return an empty array.', () => {
    const getSquaredElementsAtProperty = rewire("./app.js").__get__("getSquaredElementsAtProperty");
    let obj = {
    };
    let output = getSquaredElementsAtProperty(obj, 'key')
    expect(output).toEqual([])
})