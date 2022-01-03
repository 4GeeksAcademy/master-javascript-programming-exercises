const rewire = require("rewire");

test('Function getLargestElementAtProperty must exist', () => {
    const getLargestElementAtProperty = rewire("./app.js").__get__("getLargestElementAtProperty");
    expect(getLargestElementAtProperty).not.toBe(undefined);
});

test('The function must returns the largest element of the array located in the key.', () => {
    const getLargestElementAtProperty = rewire("./app.js").__get__("getLargestElementAtProperty");
    var obj = {
        key: [1, 2, 4]
    };
    var output = getLargestElementAtProperty(obj, 'key')
    expect(output).toBe(4)
})

test('If the array is empty, it should return an empty array.', () => {
    const getLargestElementAtProperty = rewire("./app.js").__get__("getLargestElementAtProperty");
    var obj = {
        key: []
    };
    var output = getLargestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If the property in the given key is not an array, it should return an empty array.', () => {
    const getLargestElementAtProperty = rewire("./app.js").__get__("getLargestElementAtProperty");
    var obj = {
        key: 9
    };
    var output = getLargestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If there is no property on the key, it should return an empty array.', () => {
    const getLargestElementAtProperty = rewire("./app.js").__get__("getLargestElementAtProperty");
    var obj = {
    };
    var output = getLargestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})