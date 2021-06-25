const rewire = require("rewire");

test('Function removeFromBackOfNew must exist', () => {
    const removeFromBackOfNew = rewire("./app.js").__get__("removeFromBackOfNew");
    expect(removeFromBackOfNew).not.toBe(undefined);
});

test('Function must return a new array containing all elements, but the last', () => {
    const removeFromBackOfNew = rewire('./app.js').__get__("removeFromBackOfNew");

    var output = removeFromBackOfNew([1, 2, 3])
    expect(output).toEqual([1, 2])
    output = removeFromBackOfNew([3, 6, 9, 12])
    expect(output).toEqual([3, 6, 9])
})
