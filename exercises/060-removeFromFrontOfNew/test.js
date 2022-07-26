const rewire = require("rewire");

test('Function removeFromFrontOfNew must exist', () => {
    const removeFromFrontOfNew = rewire("./app.js").__get__("removeFromFrontOfNew");
    expect(removeFromFrontOfNew).not.toBe(undefined);
});

test('Function must returns a new array containing all elements, ignoring the first', () => {
    const removeFromFrontOfNew = rewire('./app.js').__get__("removeFromFrontOfNew");

    let output = removeFromFrontOfNew([1, 2, 3])
    expect(output).toEqual([2, 3])

    output = removeFromFrontOfNew([9, 21, 74, 33])
    expect(output).toEqual([21, 74, 33])
})
