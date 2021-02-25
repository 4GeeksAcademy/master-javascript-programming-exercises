const rewire = require("rewire");

test('Function convertObjectToList must exist', () => {
    const convertObjectToList = rewire("./app.js").__get__("convertObjectToList");
    expect(convertObjectToList).not.toBe(undefined);
});

test('The function should convert a literal object to an array and return all in to an array', () => {
    const convertObjectToList = rewire("./app.js").__get__("convertObjectToList");

    let output = convertObjectToList({
        name: 'Holly',
        age: 35,
        role: 'producer'
    })
    expect(output).toEqual([['name', 'Holly'], ['age', 35], ['role', 'producer']])
})

test('The function should convert a literal object to an array and return all in to an array', () => {
    const convertObjectToList = rewire("./app.js").__get__("convertObjectToList");

    let output = convertObjectToList({
        name: 'Johnny',
        age: 57,
        role: 'actor'
    })
    expect(output).toEqual([['name', 'Johnny'], ['age', 57], ['role', 'actor']])
})
