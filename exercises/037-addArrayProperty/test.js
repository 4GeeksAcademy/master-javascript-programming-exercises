const rewire = require ("rewire");
const addArrayProperty = rewire("./app.js").__get__("addArrayProperty");

test('Function addArrayProperty must exist', () => {
    
    expect(addArrayProperty).not.toBe(undefined);
});
test('Function addArrayProperty must return something', () => {
    
    expect(addArrayProperty({},'')).not.toBe(undefined);
});

test ("Your function must return an object", () => {

    expect(typeof(addArrayProperty({},'name'))).toEqual("object");  
})

test ('function should set a new property on the given object and key with a value of the given atrray.', () => {

    let myObj = {}
    let myArray=[1,3]
    addArrayProperty(myObj, 'myProperty', myArray)
    expect(myObj.myProperty).toStrictEqual([1, 3]);
})

test ('function should set a new property on the given object and key with a value of the given array.', () => {
    const addArrayProperty = rewire ('./app.js').__get__("addArrayProperty");

    let Versions = {}
    let OldVersion=[7,9]
    addArrayProperty(Versions, 'updateFrom', OldVersion)
    expect(Versions.updateFrom).toStrictEqual([7, 9]);
})