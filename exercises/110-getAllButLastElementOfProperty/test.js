const rewire = require("rewire");

test('Function getAllButLastElementOfProperty must exist', () => {
    const getAllButLastElementOfProperty = rewire("./app.js").__get__("getAllButLastElementOfProperty");
    expect(getAllButLastElementOfProperty).not.toBe(undefined);
});

test('The function must returns an array that contains all but the last element of the array located at the given Key.', () => {
    const getAllButLastElementOfProperty = rewire("./app.js").__get__("getAllButLastElementOfProperty");
    let obj = {
        key: [3, 2, 1]
    };
    let output = getAllButLastElementOfProperty(obj, 'key')
    expect(output).toEqual([3, 2])
})

test('If the array is empty, it should return an empty array.', () => {
    const getAllButLastElementOfProperty = rewire("./app.js").__get__("getAllButLastElementOfProperty");
    let obj = {
        key: []
    };
    let output = getAllButLastElementOfProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If the property in the given key is not an array, it should return an empty array.', () => {
    const getAllButLastElementOfProperty = rewire("./app.js").__get__("getAllButLastElementOfProperty");
    let obj = {
        key: 9
    };
    let output = getAllButLastElementOfProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If there is no property on the key, it should return an empty array.', () => {
    const getAllButLastElementOfProperty = rewire("./app.js").__get__("getAllButLastElementOfProperty");
    let obj = {
    };
    let output = getAllButLastElementOfProperty(obj, 'key')
    expect(output).toEqual([])
})