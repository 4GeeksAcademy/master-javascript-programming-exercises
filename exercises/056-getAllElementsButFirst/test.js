const rewire = require("rewire");

test('Function getAllElementsButFirst must exist', () => {
    const getAllElementsButFirst = rewire("./app.js").__get__("getAllElementsButFirst");
    expect(getAllElementsButFirst).not.toBe(undefined);
});

test('Function must return an array with all elements but not the first', () => {
    const getAllElementsButFirst = rewire('./app.js').__get__("getAllElementsButFirst");

    let output = getAllElementsButFirst([1, 2, 3, 4])
    expect(output).toEqual([2, 3, 4])

    output = getAllElementsButFirst([3, 6, 9, 12])
    expect(output).toEqual([6, 9, 12])
})