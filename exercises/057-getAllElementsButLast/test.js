const rewire = require("rewire");

test('Function getAllElementsButLast must exist', () => {
    const getAllElementsButLast = rewire("./app.js").__get__("getAllElementsButLast");
    expect(getAllElementsButLast).not.toBe(undefined);
});

test('Function must return an array with all elements but not the last', () => {
    const getAllElementsButLast = rewire('./app.js').__get__("getAllElementsButLast");

    let output = getAllElementsButLast([1, 2, 3, 4])
    expect(output).toEqual([1, 2, 3])

    output = getAllElementsButLast([3, 6, 9, 12])
    expect(output).toEqual([3, 6, 9])
})
