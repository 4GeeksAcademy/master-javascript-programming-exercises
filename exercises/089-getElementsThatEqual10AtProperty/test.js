const rewire = require ("rewire");

test('Function getElementsThatEqual10AtProperty must exist', () => {
    const getElementsThatEqual10AtProperty = rewire("./app.js").__get__("getElementsThatEqual10AtProperty");
    expect(getElementsThatEqual10AtProperty).not.toBe(undefined);
});


test ('The function must return every element equal to 10 on a given key.', () => {
    const getElementsThatEqual10AtProperty = rewire ('./app.js').__get__("getElementsThatEqual10AtProperty");

    var obj = {
    key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
    expect(obj.key[1]).toBe(10);
    expect(obj.key[3]).toBe(10);
})

test ('The function must return every element equal to 10 on a given key.', () => {
    const getElementsThatEqual10AtProperty = rewire ('./app.js').__get__("getElementsThatEqual10AtProperty");

    var obj = {
    key: [1000, 10, 50, 10, 20, 6, 10, 98, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
    expect(obj.key[1]).toBe(10);
    expect(obj.key[3]).toBe(10);
    expect(obj.key[6]).toBe(10);
    expect(obj.key[8]).toBe(10);
})



    



