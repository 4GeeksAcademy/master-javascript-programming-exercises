const rewire = require ("rewire");

test('Function getAverageOfElementsAtProperty must exist', () => {
    const getAverageOfElementsAtProperty = rewire("./app.js").__get__("getAverageOfElementsAtProperty");
    expect(getAverageOfElementsAtProperty).not.toBe(undefined);
});

test('If array is void must return 0', () => {
    const getAverageOfElementsAtProperty = rewire('./app.js').__get__("getAverageOfElementsAtProperty");
    var obj = {
        key: []
    };
    var output = getAverageOfElementsAtProperty(obj["key"])
    expect(output).toBe(0)
})


test('Fuction returns the average of array elements', () => {
    const getAverageOfElementsAtProperty = rewire('./app.js').__get__("getAverageOfElementsAtProperty");
    var obj = {
        key: [4, 8, 6]
    };
    var output = getAverageOfElementsAtProperty(obj, 'key')
    expect(output).toBe(6)
})
test('Fuction returns the average of array elements', () => {
    const getAverageOfElementsAtProperty = rewire('./app.js').__get__("getAverageOfElementsAtProperty");
    var obj = {
        key: [10, 9, 7]
    };
    var output = getAverageOfElementsAtProperty(obj, 'key')
    expect(output).toBe(8.666666666666666)
})