const rewire = require ("rewire");

test('Function addToFront must exist', () => {
    const addToFront = rewire("./app.js").__get__("addToFront");
    expect(addToFront).not.toBe(undefined);
});

test('The function must return the given number to the front of the array', () => {
    const addToFront = rewire("./app.js").__get__("addToFront");

    expect(addToFront([1, 2], 3)).toStrictEqual([3, 1, 2]);
    expect(addToFront([6, 7], 8)).toStrictEqual([8, 6, 7]);
});