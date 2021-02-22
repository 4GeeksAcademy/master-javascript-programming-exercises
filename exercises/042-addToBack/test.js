const rewire = require ("rewire");

test('Function addToBack must exist', () => {
    const addToBack = rewire("./app.js").__get__("addToBack");
    expect(addToBack).not.toBe(undefined);
});

test('The function must return a new element in the last position of the array and return the given array.', () => {
    const addToBack = rewire("./app.js").__get__("addToBack");

    const output = addToBack([1, 2], 3)
    expect(output).toStrictEqual([1, 2, 3]);
});

test('The function must return a new element in the last position of the array', () => {
    const addToBack = rewire("./app.js").__get__("addToBack");

    const output = addToBack([22, 44], 11)
    expect(output).toStrictEqual([22, 44, 11]);
});
