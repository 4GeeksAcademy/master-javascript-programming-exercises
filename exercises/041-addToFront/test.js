const rewire = require ("rewire");

test('Function addToFront must exist', () => {
    const addToFront = rewire("./app.js").__get__("addToFront");
    expect(addToFront).not.toBe(undefined);
});

test('The function must return to the front of the array, and return the given array.', () => {
    const addToFront = rewire("./app.js").__get__("addToFront");

    const output = addToFront([1, 2], 3)
    expect(output).toStrictEqual([3, 1, 2]);
});

test('The function must return to the front of the array', () => {
    const addToFront = rewire("./app.js").__get__("addToFront");

    const output = addToFront([6, 7], 8)
    expect(output).toStrictEqual([8, 6, 7]);
});