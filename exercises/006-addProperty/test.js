const rewire = require ("rewire");

test ('The function addProperty must exist', () => {
    const addProperty = rewire ('./app.js').__get__("addProperty");
    expect(addProperty).not.toBe(undefined);
})

test ("Your function must return an object", () => {
    const addProperty = rewire ('./app.js').__get__("addProperty");

    expect(typeof(addProperty({},'name'))).toEqual("object");  
})

test ('Function should set a new property on the given object and key with a value of true', () => {
    const addProperty = rewire ('./app.js').__get__("addProperty");

    let myObj = {}
    addProperty(myObj, 'isOld')
    expect(myObj.isOld).toBe(true);
})

test ('Function should return the object', () => {
    const addProperty = rewire ('./app.js').__get__("addProperty");

    let myObj = {}
    const returned = addProperty(myObj, 'isOld');
    expect(returned.isOld).toBe(true);
})
