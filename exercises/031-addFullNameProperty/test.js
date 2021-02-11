const rewire = require ("rewire");

test('Function addFullNameProperty must exist', () => {
    const addFullNameProperty = rewire("./app.js").__get__("addFullNameProperty");
    expect(addFullNameProperty).not.toBe(undefined);
});


test('The function addFullNameProperty must return new object called "fullName"', () => {
    const person = rewire("./app.js").__get__("person");
    expect(person).toEqual({firstName: "Jade", lastName: "Smith", fullName: "Jade Smith"});
});

test('Must have person object', () => {
    const addFullNameProperty = rewire("./app.js").__get__("addFullNameProperty");
    let person = {
    firstName: 'Jade',
    lastName: 'Smith'
};
    let output = addFullNameProperty(person)
    expect(output).toBe('Jade Smith');
});
