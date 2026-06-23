const rewire = require ("rewire");
const addObjectProperty = rewire("./app.js").__get__("addObjectProperty");

test('Function addObjectProperty must exist', () => {
    expect(addObjectProperty).not.toBe(undefined);
});

test('Function addObjectProperty must return something', () => {
    expect(addObjectProperty({},'test',{})).not.toBe(undefined);
});

test ("The function must return the 1st object with the new key", () => {   
    let person1 = {
    name: 'Joe Blow',
    role: 'schlub'
    };
    let person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
    };


   const result = addObjectProperty(person1, 'manager', person2);
   expect(result.manager).toStrictEqual({"name": "Mr. Burns", "role": "supervisor"});
})

test ("The function must return the 1st object with the new key. Testing with different values", () => {
   
    let person1 = {
    name: 'Johny',
    role: 'schlub'
    };
    let person2 = {
    name: 'Scott',
    role: 'supervisor'
    };


   const result = addObjectProperty(person1, 'manager', person2);
   expect(result.manager).toStrictEqual({"name": "Scott", "role": "supervisor"});
})
