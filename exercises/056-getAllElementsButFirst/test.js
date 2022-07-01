const rewire = require("rewire");
const getAllElementsButFirst = rewire("./app.js").__get__("getAllElementsButFirst");

test('Function getAllElementsButFirst must exist', () => {
    
    expect(getAllElementsButFirst).not.toBe(undefined);
});
test('Function getAllElementsButFirst must return something', () => {
    
    expect(getAllElementsButFirst([1,2])).not.toBe(undefined);
});
test('Function getAllElementsButFirst must return a list', () => {
    
    expect(typeof getAllElementsButFirst([1,2])).toBe("object");
});

test('Function must return an array with all elements but not the first. Testing with [3,6,9,12]', () => {

    output = getAllElementsButFirst([3, 6, 9, 12])
    expect(output).toEqual([6, 9, 12])
})
test('Function must return an array with all elements but not the first. Testing with [1,2,3,4]', () => {

    var output = getAllElementsButFirst([1, 2, 3, 4])
    expect(output).toEqual([2, 3, 4])
})