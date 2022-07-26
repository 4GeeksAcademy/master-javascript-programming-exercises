const rewire = require("rewire");

test('Function getElementsAfter must exist', () => {
    const getElementsAfter = rewire("./app.js").__get__("getElementsAfter");
    expect(getElementsAfter).not.toBe(undefined);
});

test('Function must return a new array with all the elements after the given index.', () => {
    const getElementsAfter = rewire('./app.js').__get__("getElementsAfter");

    let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2)
    expect(output).toEqual(['d', 'e'])
})

test('The function must not return the other elements of the array.', () => {
    const getElementsAfter = rewire('./app.js').__get__("getElementsAfter");

    let output = getElementsAfter(['you', 'can', 'do', 'it'], 1)
    expect(output).toEqual(['do', 'it'])
})