const rewire = require("rewire");

test('Function getAllKeys must exist', () => {
    const getAllKeys = rewire("./app.js").__get__("getAllKeys");
    expect(getAllKeys).not.toBe(undefined);
});

test('The function must returns an array of all keys on the entry object.', () => {
    const getAllKeys = rewire("./app.js").__get__("getAllKeys");

    let output = getAllKeys({
        name: 'Sam',
        age: 25,
        hasPets: true
    })
    expect(output).toEqual(['name', 'age', 'hasPets'])

    output = getAllKeys({
        name: 'Johnny',
        age: 57,
        role: 'actor'
    })
    expect(output).toEqual(['name', 'age', 'role'])
})
