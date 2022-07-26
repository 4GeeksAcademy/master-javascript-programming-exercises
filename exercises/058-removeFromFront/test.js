const rewire = require("rewire");

test('Function removeFromFront must exist', () => {
    const removeFromFront = rewire("./app.js").__get__("removeFromFront");
    expect(removeFromFront).not.toBe(undefined);
});

test('Function must return the given array with its first element removed.', () => {
    const removeFromFront = rewire('./app.js').__get__("removeFromFront");

    let output = removeFromFront([1, 2, 3, 4])
    expect(output).toEqual([2, 3, 4])

    output = removeFromFront([3, 6, 9, 12])
    expect(output).toEqual([6, 9, 12])
})
