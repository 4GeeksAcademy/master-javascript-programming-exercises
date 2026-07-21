const rewire = require("rewire");
const removeFromFront = rewire("./app.js").__get__("removeFromFront");

test('Function removeFromFront must exist', () => {
    expect(removeFromFront).not.toBe(undefined);
});

test('Function removeFromFront must return something', () => {    
    expect(removeFromFront([1, 2])).not.toBe(undefined);
});

test('Function removeFromFront must return a list', () => {    
    expect(typeof removeFromFront([1, 2])).toBe("object");
});

test('Function must return the given array with its first element removed. Testing with [3,6,9,12]', () => {
    let output = removeFromFront([3, 6, 9, 12])
    expect(output).toEqual([6, 9, 12])
});

test('Function must return the given array with its first element removed. Testing with [1,2,3,4]', () => {
    let output = removeFromFront([1, 2, 3, 4])
    expect(output).toEqual([2, 3, 4])
});
