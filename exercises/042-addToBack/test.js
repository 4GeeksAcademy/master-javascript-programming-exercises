const rewire = require ("rewire");

test('Function addToBack must exist', () => {
    const addToBack = rewire("./app.js").__get__("addToBack");
    expect(addToBack).not.toBe(undefined);
});

test('The function must return the given number in the last position of the array', () => {
    const addToBack = rewire("./app.js").__get__("addToBack");

    expect(addToBack([1, 2], 3)).toStrictEqual([1, 2, 3]);
    expect(addToBack([22, 44], 11)).toStrictEqual([22, 44, 11]);
});
