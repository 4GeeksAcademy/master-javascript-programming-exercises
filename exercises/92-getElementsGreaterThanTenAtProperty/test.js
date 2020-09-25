const rewire = require ("rewire");

test('Function getElementsGreaterThan10AtProperty must exist', () => {
    const getElementsGreaterThan10AtProperty = rewire("./app.js").__get__("getElementsGreaterThan10AtProperty");
    expect(getElementsGreaterThan10AtProperty).not.toBe(undefined);
});

test ('The function must return only the elements of the array that are greater than 10.', () => {
    const getElementsGreaterThan10AtProperty = rewire ('./app.js').__get__("getElementsGreaterThan10AtProperty");
    
    var obj = {
    key: [1, 20, 30]
};


    var output = getElementsGreaterThan10AtProperty(obj, 'key');
    expect(obj.key[1]).toBe(20);
    expect(obj.key[2]).toBe(30);
   
 
})

test ('The function must return only the elements of the array that are greater than 10.', () => {
    const getElementsGreaterThan10AtProperty = rewire ('./app.js').__get__("getElementsGreaterThan10AtProperty");
    
    var obj = {
    key: [1, 60, 30, 90, 12]
};


    var output = getElementsGreaterThan10AtProperty(obj, 'key');
    expect(obj.key[1]).toBe(60);
    expect(obj.key[2]).toBe(30);
    expect(obj.key[3]).toBe(90);
    expect(obj.key[4]).toBe(12);
 
})