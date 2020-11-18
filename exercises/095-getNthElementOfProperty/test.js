const rewire = require ("rewire");

test('Function getNthElementOfProperty must exist', () => {
    const getNthElementOfProperty = rewire("./app.js").__get__("getNthElementOfProperty");
    expect(getNthElementOfProperty).not.toBe(undefined);
});

test ('The function must return ONLY the nth element located at a given key in the given array.', () => {
    const getNthElementOfProperty = rewire ('./app.js').__get__("getNthElementOfProperty");
    
    var obj = {
    key: [1, 2, 6]
};
    var output = getNthElementOfProperty(obj, 'key', 1);
   
    expect(output).toBe(2);
})

test ('The function must return ONLY the nth element located at a given key in the given array.', () => {
    const getNthElementOfProperty = rewire ('./app.js').__get__("getNthElementOfProperty");
    
    var obj = {
    key: [4, 6, 8, 3, 5, 9]
};
    var output = getNthElementOfProperty(obj, 'key', 3);
   
    expect(output).toBe(3);
})

test ('If there\'s no property at the given key the function should return undefined.', () => {
    const getNthElementOfProperty = rewire ('./app.js').__get__("getNthElementOfProperty");
    
    var obj = {
    key: [4, 6, 8,]
};
    var output = getNthElementOfProperty(obj, 'key', 3);
   
    expect(output).toBe(undefined);
})