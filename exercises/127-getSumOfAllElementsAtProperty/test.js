const rewire = require("rewire");

test('Function getSumOfAllElementsAtProperty must exist', () => {
    const getSumOfAllElementsAtProperty = rewire("./app.js").__get__("getSumOfAllElementsAtProperty");
    expect(getSumOfAllElementsAtProperty).not.toBe(undefined);
});

test('Function must returns the sum of all elements in the array located at the given key.', () => {
    const getSumOfAllElementsAtProperty = rewire("./app.js").__get__("getSumOfAllElementsAtProperty");
    let obj = {
        key: [2, 3, 4]
    };
    let output = getSumOfAllElementsAtProperty(obj, 'key')
    expect(output).toBe(9)
})

test('If the array is empty, it should return 0.', () => {
    const getSumOfAllElementsAtProperty = rewire("./app.js").__get__("getSumOfAllElementsAtProperty");
    let obj = {
        key: []
    };
    let output = getSumOfAllElementsAtProperty(obj, 'key')
    expect(output).toBe(0)
})

test('If the property in the given key is not an array, it should return 0.', () => {
    const getSumOfAllElementsAtProperty = rewire("./app.js").__get__("getSumOfAllElementsAtProperty");
    let obj = {
        key: 4
    };
    let output = getSumOfAllElementsAtProperty(obj, 'key')
    expect(output).toBe(0)
})

test('If there is no property on the key, it should return 0.', () => {
    const getSumOfAllElementsAtProperty = rewire("./app.js").__get__("getSumOfAllElementsAtProperty");
    let obj = {
    };
    let output = getSumOfAllElementsAtProperty(obj, 'key')
    expect(output).toBe(0)
})