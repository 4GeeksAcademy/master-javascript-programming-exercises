const rewire = require ("rewire");

test('Function addObjectProperty must exist', () => {
    const addObjectProperty = rewire("./app.js").__get__("addObjectProperty");
    expect(addObjectProperty).not.toBe(undefined);
});

test('The function addObjectProperty must return the person2 value with the new key ', () => {
    const result = rewire("./app.js").__get__("person2");
    expect(result).toEqual({ name: 'Mr. Burns', role: 'supervisor' });
});