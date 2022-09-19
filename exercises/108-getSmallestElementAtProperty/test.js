const rewire = require("rewire");
const getSmallestElementAtProperty = rewire("./app.js").__get__("getSmallestElementAtProperty");

test('Function getSmallestElementAtProperty must exist', () => {
    expect(getSmallestElementAtProperty).not.toBe(undefined);
});

test('Function getSmallestElementAtProperty must return something', () => {
    expect(getSmallestElementAtProperty({ key: [1, 2, 3] }, 'key')).not.toBe(undefined);
});

test('Function getSmallestElementAtProperty must return a number', () => {
    expect(typeof getSmallestElementAtProperty({ key: [1, 2, 3] }, 'key')).toBe(
        'number'
    );
});

test('The function must returns the smallest element of the array located in the key.', () => {
    let obj = {
        key: [2, 1, 5]
    };
    let output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toBe(1)
})

test('If the property in the given key is an empty array, it should return an empty array [].', () => {
    let obj = {
        key: []
    };
    let output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If the property in the given key is a number, it should return an empty array [].', () => {
    let obj = {
        key: 3
    };
    let output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If the property in the given key is not an array, it should return an empty array [].', () => {
    let obj = {
        key: {}
    }
    let output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If the property in the given key is {}, it should return an empty array [].', () => {
    let obj = {
        key: {}
    }
    let output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If there is no property on the key, it should return an empty array.', () => {
    let obj = {};
    let output = getSmallestElementAtProperty(obj, 'key')
    expect(output).toEqual([])
})
