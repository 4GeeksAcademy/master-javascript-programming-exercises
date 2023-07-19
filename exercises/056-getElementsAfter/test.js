const rewire = require("rewire");
const getElementsAfter = rewire("./app.js").__get__("getElementsAfter");

test('Function getElementsAfter must exist', () => {
    expect(getElementsAfter).not.toBe(undefined);
});

test('Function getElementsAfter must return something', () => {
    expect(getElementsAfter([1, 2],1)).not.toBe(undefined);
});

test('Function getElementsAfter must return a list', () => {
    expect(typeof getElementsAfter([1, 2],1)).toBe("object");
});

test('Function must return a new array with all the elements after the given index', () => {
    let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2)
    expect(output).toEqual(['d', 'e'])
})

test('The function must not return the other elements of the array', () => {
    let output = getElementsAfter(['you', 'can', 'do', 'it'], 1)
    expect(output).toEqual(['do', 'it'])
})
