const rewire = require("rewire");

test('Function transformEmployeeData must exist', () => {
    const transformEmployeeData = rewire("./app.js").__get__("transformEmployeeData");
    expect(transformEmployeeData).not.toBe(undefined);
});

test('The function must transform employee data from one format to { key: value }.', () => {
    const transformEmployeeData = rewire("./app.js").__get__("transformEmployeeData");

    let output = transformEmployeeData([
        [
            ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
        ],
        [
            ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
        ]
    ])
    expect(output).toEqual([
        { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
        { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
    ])


    output = transformEmployeeData([
        [
            ['firstName', 'Johnny'], ['lastName', 'Depp'], ['age', 57], ['role', 'actor']
        ]
    ])
    expect(output).toEqual([
        { firstName: 'Johnny', lastName: 'Depp', age: 57, role: 'actor' }
    ])
})