const rewire = require("rewire");

test('Function removeFromBack must exist', () => {
    const removeFromBack = rewire("./app.js").__get__("removeFromBack");
    expect(removeFromBack).not.toBe(undefined);
});

test('Function must return an array with all elements, but not the last', () => {
    const removeFromBack = rewire('./app.js').__get__("removeFromBack");

    var output = removeFromBack([1, 2, 3])
    expect(output).toEqual([1, 2])
    
    output = removeFromBack([9, 3, 7, 16])
    expect(output).toEqual([9, 3, 7])
})