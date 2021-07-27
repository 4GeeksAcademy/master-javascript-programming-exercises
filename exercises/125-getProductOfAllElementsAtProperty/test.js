const rewire = require("rewire");

test('Function getProductOfAllElementsAtProperty must exist', () => {
    const getProductOfAllElementsAtProperty = rewire("./app.js").__get__("getProductOfAllElementsAtProperty");
    expect(getProductOfAllElementsAtProperty).not.toBe(undefined);
});

test('Function must returns the product of all elements in the array located at the key.', () => {
    const getProductOfAllElementsAtProperty = rewire("./app.js").__get__("getProductOfAllElementsAtProperty");
    var obj = {
        key: [1, 2, 3, 4]
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key')
    expect(output).toBe(24)
})

test('Function must returns the product of all elements in the array located at the key.', () => {
    const getProductOfAllElementsAtProperty = rewire("./app.js").__get__("getProductOfAllElementsAtProperty");
    var obj = {
        key: [1, 2, 3]
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key')
    expect(output).toBe(6)
})

test('If the array is void, it should return 0.', () => {
    const getProductOfAllElementsAtProperty = rewire("./app.js").__get__("getProductOfAllElementsAtProperty");
    var obj = {
        key: []
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key')
    expect(output).toBe(0)
})

test('If the property in the given key is not an array, it should return 0.', () => {
    const getProductOfAllElementsAtProperty = rewire("./app.js").__get__("getProductOfAllElementsAtProperty");
    var obj = {
        key: 3
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key')
    expect(output).toBe(0)
})

test('If there is no property on the key, it should return 0.', () => {
    const getProductOfAllElementsAtProperty = rewire("./app.js").__get__("getProductOfAllElementsAtProperty");
    var obj = {
    };
    var output = getProductOfAllElementsAtProperty(obj, 'key')
    expect(output).toBe(0)
})