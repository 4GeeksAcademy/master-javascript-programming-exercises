const rewire = require("rewire");
const getAverageOfElementsAtProperty = rewire("./app.js").__get__("getAverageOfElementsAtProperty");

test('Function getAverageOfElementsAtProperty must exist', () => {
    expect(getAverageOfElementsAtProperty).not.toBe(undefined);
});

test('Function getAverageOfElementsAtProperty must return something', () => {    
    expect(getAverageOfElementsAtProperty([1])).not.toBe(undefined);
});

test('Function getAverageOfElementsAtProperty must return an array', () => {    
    expect(typeof getAverageOfElementsAtProperty([1])).toBe("object");
});

test('The function must return the average of all the elements in the array located at given key.', () => {
    let obj = {
        key: [9, 7, 6, 4]
    };
    let output = getAverageOfElementsAtProperty(obj, 'key');
    expect(output).toBe(6.5);
});

test('The function must return the average of all the elements in the array located at given key.', () => {
    let obj = {
        key: [15, 4, 10, 5, 20, 6]
    };
    let output = getAverageOfElementsAtProperty(obj, 'key');
    expect(output).toBe(10);
});

test('The function must return 0 if there\'s no property at the given key.', () => {
    let obj = {
        key: []
    };
    let output = getAverageOfElementsAtProperty(obj, 'key');
    expect(output).toBe(0);
});