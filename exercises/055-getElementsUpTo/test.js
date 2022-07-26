const rewire = require("rewire");

test('Function getElementsUpTo must exist', () => {
    const getElementsUpTo = rewire("./app.js").__get__("getElementsUpTo");
    expect(getElementsUpTo).not.toBe(undefined);
});

test('Function must return an array with all elements up to the given index', () => {
    const getElementsUpTo = rewire('./app.js').__get__("getElementsUpTo");

    let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
    expect(output).toEqual(['a', 'b', 'c'])
})

test('Function must return an array, not including the elements after the given index', () => {
    const getElementsUpTo = rewire('./app.js').__get__("getElementsUpTo");

    let output = getElementsUpTo(['you', 'did', 'it', 'not', 'did', 'it'], 3)
    expect(output).toEqual(['you', 'did', 'it'])
})