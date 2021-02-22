const rewire = require("rewire");

test('Function getElementsUpTo must exist', () => {
    const getElementsUpTo = rewire("./app.js").__get__("getElementsUpTo");
    expect(getElementsUpTo).not.toBe(undefined);
});

test('Function must return an array with all elements up to the given index', () => {
    const getElementsUpTo = rewire('./app.js').__get__("getElementsUpTo");

    var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
    expect(output).toEqual(['a', 'b', 'c'])
})

test('Function must return an array, but not including the elements after the given index', () => {
    const getElementsUpTo = rewire('./app.js').__get__("getElementsUpTo");

    var output = getElementsUpTo(['you', 'did', 'it', 'not', 'did', 'it'], 3)
    expect(output).toEqual(['you', 'did', 'it'])
})