const rewire = require ("rewire");

test ('The function must return the first element of the array located at a given key.', () => {
    const getFirstElementOfProperty = rewire ('./app.js').__get__("getFirstElementOfProperty");
     
    var obj = {
    key: [1, 2, 4]
};
    var output = getFirstElementOfProperty(obj, 'key');
   
    expect(output).toBe(1);
})

test ('The function must return the first element of the array located at a given key.', () => {

    const getFirstElementOfProperty = rewire ('./app.js').__get__("getFirstElementOfProperty");
     
    var obj = {
    key: [9, 8, 6, 0, 2, 4]
};
    var output = getFirstElementOfProperty(obj, 'key');
   
    expect(output).toBe(9);
})

