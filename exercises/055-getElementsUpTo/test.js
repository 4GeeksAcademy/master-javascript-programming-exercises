const rewire = require("rewire");
const getElementsUpTo = rewire("./app.js").__get__("getElementsUpTo");

test('Function getElementsUpTo must exist', () => {
   
    expect(getElementsUpTo).not.toBe(undefined);
});
test('Function getElementsUpTo must return something', () => {
   
    expect(getElementsUpTo([1],0)).not.toBe(undefined);
});
test('Function getElementsUpTo must return a list', () => {
   
    expect(typeof getElementsUpTo([1],0)).toBe("object");
});

test('Function must return an array with all elements up to the given index', () => {

    let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
    expect(output).toEqual(['a', 'b', 'c'])
})

test('Function must return an array, not including the elements after the given index', () => {

    let output = getElementsUpTo(['you', 'did', 'it', 'not', 'did', 'it'], 3)
    expect(output).toEqual(['you', 'did', 'it'])
})