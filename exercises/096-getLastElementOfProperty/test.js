const rewire = require ("rewire");

test('Function getLastElementOfProperty must exist', () => {
    const getLastElementOfProperty = rewire("./app.js").__get__("getLastElementOfProperty");
    expect(getLastElementOfProperty).not.toBe(undefined);
});

test ('The function must return the last element of the array located at a given key.', () => {
    const getLastElementOfProperty = rewire ('./app.js').__get__("getLastElementOfProperty");
    
    var obj = {
    key: [1, 2, 5]
};
    var output = getLastElementOfProperty(obj, 'key');
    console.log(output); // --> 5
   
    expect(output).toBe(5);
})

test ('The function must return the last element of the array located at a given key.', () => {
    const getLastElementOfProperty = rewire ('./app.js').__get__("getLastElementOfProperty");
    
    var obj = {
    key: [1, 2, 5, 7, 4, 3, 9]
};
    var output = getLastElementOfProperty(obj, 'key');
    console.log(output); // --> 5
   
    expect(output).toBe(9);
})

test ('The function must return undefined if there is no property at a given key.', () => {
    const getLastElementOfProperty = rewire ('./app.js').__get__("getLastElementOfProperty");
    
    var obj = {
    key: [1, 2, 5, 7, 4, 3, 9]
};
    var output = getLastElementOfProperty(obj, 'key');
    console.log(output); // --> 5
   
    expect(obj.key[7]).toBe(undefined);
})