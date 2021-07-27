const rewire = require ("rewire");

test('Function addArrayProperty must exist', () => {
    const addArrayProperty = rewire("./app.js").__get__("addArrayProperty");
    expect(addArrayProperty).not.toBe(undefined);
});

test ("Your function must return an object", () => {
    const addArrayProperty = rewire ('./app.js').__get__("addArrayProperty");

    expect(typeof(addArrayProperty({},'name'))).toEqual("object");  
})

test ('function should set a new property on the given object and key with a value of "myArray".', () => {
    const addArrayProperty = rewire ('./app.js').__get__("addArrayProperty");

    let myObj = {}
    let myArray=[1,3]
    addArrayProperty(myObj, 'myProperty', myArray)
    expect(myObj.myProperty).toStrictEqual([1, 3]);
})

test ('function should set a new property on the given object and key with a value of "myArray".', () => {
    const addArrayProperty = rewire ('./app.js').__get__("addArrayProperty");

    let Versions = {}
    let OldVersion=[7,9]
    addArrayProperty(Versions, 'updateFrom', OldVersion)
    expect(Versions.updateFrom).toStrictEqual([7, 9]);
})