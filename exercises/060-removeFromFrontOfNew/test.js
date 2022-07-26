const rewire = require("rewire");
const removeFromFrontOfNew = rewire("./app.js").__get__("removeFromFrontOfNew");

test('Function removeFromFrontOfNew must exist', () => {
    expect(removeFromFrontOfNew).not.toBe(undefined);
});

test('Function removeFromFrontOfNew must return something', () => {    
    expect(removeFromFrontOfNew([1,2])).not.toBe(undefined);
});

test('Function removeFromFrontOfNew must return a list', () => {    
    expect(typeof removeFromFrontOfNew([1,2])).toBe("object");
});

test('Function must returns a new array containing all elements, ignoring the first. Testing with [9,21,74,33]', () => {
    let output = removeFromFrontOfNew([9, 21, 74, 33])
    expect(output).toEqual([21, 74, 33])
});

test('Function must returns a new array containing all elements, ignoring the first. Testing with [1,2,3]', () => {
    let output = removeFromFrontOfNew([1, 2, 3])
    expect(output).toEqual([2, 3])
});