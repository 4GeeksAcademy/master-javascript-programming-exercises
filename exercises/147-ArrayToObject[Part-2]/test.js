const rewire = require("rewire");

test('Function fromListToObject must exist', () => {
    const fromListToObject = rewire("./app.js").__get__("fromListToObject");
    expect(fromListToObject).not.toBe(undefined);
});

test('Function must return an object with each pair of elements as key-value.', () => {
    const fromListToObject = rewire("./app.js").__get__("fromListToObject");

    let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
    expect(output).toEqual({ make: 'Ford', model: 'Mustang', year: 1964 })
})

test('Function must return an object with each pair of elements as key-value.', () => {
    const fromListToObject = rewire("./app.js").__get__("fromListToObject");

    let output = fromListToObject([['name', 'Jerry'], ['pet', 'Cat']])
    expect(output).toEqual({ name: 'Jerry', pet: 'Cat' })
})
