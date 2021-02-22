const rewire = require ("rewire");

test('Function addObjectProperty must exist', () => {
    const addObjectProperty = rewire("./app.js").__get__("addObjectProperty");
    expect(addObjectProperty).not.toBe(undefined);
});

test ("The function must return the 2nd array values with the new key ", () => {
    const addObjectProperty = rewire("./app.js").__get__("addObjectProperty");
    var person1 = {
    name: 'Joe Blow',
    role: 'schlub'
    };
    var person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
    };


   const result = addObjectProperty(person1, 'manager', person2);
   expect(result.manager).toStrictEqual({"name": "Mr. Burns", "role": "supervisor"});
})