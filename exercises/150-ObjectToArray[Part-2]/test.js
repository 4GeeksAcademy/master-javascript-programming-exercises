const rewire = require("rewire");

test('Function listAllValues must exist', () => {
    const listAllValues = rewire("./app.js").__get__("listAllValues");
    expect(listAllValues).not.toBe(undefined);
});

test('The function must returns an array of all the values of the object.', () => {
    const listAllValues = rewire("./app.js").__get__("listAllValues");

    let output = listAllValues({
        name: 'Krysten',
        age: 33,
        hasPets: false
    })
    expect(output).toEqual(['Krysten', 33, false])

    output = listAllValues({
        name: 'Johnny',
        age: 57,
        role: 'actor'
    })
    expect(output).toEqual(['Johnny', 57, 'actor'])
})
