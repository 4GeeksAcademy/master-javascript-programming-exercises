const rewire = require ("rewire");

test('Function getAverageOfElementsAtProperty must exist', () => {
    const getAverageOfElementsAtProperty = rewire("./app.js").__get__("getAverageOfElementsAtProperty");
    expect(getAverageOfElementsAtProperty).not.toBe(undefined);
});

test ('The function must return the average of all the elements at the given key.', () => {
    const getAverageOfElementsAtProperty = rewire ('./app.js').__get__("getAverageOfElementsAtProperty");

    var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
    expect(output).toBe(2);
})


test ('The function must return the average of all the elements at the given key.', () => {
    const getAverageOfElementsAtProperty = rewire ('./app.js').__get__("getAverageOfElementsAtProperty");

    var obj = {
    key: [9, 7, 6, 4]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
    expect(output).toBe(6.5);
})


test ('The function must return 0 if there\'s no property at the given key.', () => {
    const getAverageOfElementsAtProperty = rewire ('./app.js').__get__("getAverageOfElementsAtProperty");

    var obj = {
    key: []
};
var output = getAverageOfElementsAtProperty(obj, 'key');
    expect(output).toBe(0);
})
