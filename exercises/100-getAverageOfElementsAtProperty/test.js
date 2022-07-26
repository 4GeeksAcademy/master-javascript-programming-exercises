const rewire = require("rewire");

test('Function getAverageOfElementsAtProperty must exist', () => {
    const getAverageOfElementsAtProperty = rewire("./app.js").__get__("getAverageOfElementsAtProperty");
    expect(getAverageOfElementsAtProperty).not.toBe(undefined);
});

test('If array is empty must return 0', () => {
    const getAverageOfElementsAtProperty = rewire('./app.js').__get__("getAverageOfElementsAtProperty");
    let obj = {
        key: []
    };
    let output = getAverageOfElementsAtProperty(obj["key"])
    expect(output).toBe(0)
})


test('Fuction returns the average of array elements', () => {
    const getAverageOfElementsAtProperty = rewire('./app.js').__get__("getAverageOfElementsAtProperty");
    let obj = {
        key: [4, 8, 6]
    };
    let output = getAverageOfElementsAtProperty(obj, 'key')
    expect(output).toBe(6)


    obj = {
        key: [10, 9, 7]
    };
    output = getAverageOfElementsAtProperty(obj, 'key')
    expect(output).toBe(8.666666666666666)
})
