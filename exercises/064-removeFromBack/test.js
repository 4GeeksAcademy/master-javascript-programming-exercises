const rewire = require("rewire");
const removeFromBack = rewire("./app.js").__get__("removeFromBack");

test('Function removeFromBack must exist', () => {
    expect(removeFromBack).not.toBe(undefined);
});

test('Function removeFromBack must return something', () => {    
    expect(removeFromBack[1,2,3]).not.toBe(undefined);
});

test('Function removeFromBack must return a list', () => {    
    expect(typeof removeFromBack[1,2,3]).toBe("object");
});

test('Function must return an array with all elements, but not the last', () => {
    let output = removeFromBack([4, 5, 6])
    expect(output).toEqual([4, 5])
});

test('Function must return an array with all elements, but not the last. Testing with different values.', () => {
    let output = removeFromBack([9, 3, 7, 16])
    expect(output).toEqual([9, 3, 7])
});