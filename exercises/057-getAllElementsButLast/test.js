const rewire = require("rewire");
const getAllElementsButLast = rewire("./app.js").__get__("getAllElementsButLast");

test('Function getAllElementsButLast must exist', () => {
    
    expect(getAllElementsButLast).not.toBe(undefined);
});
test('Function getAllElementsButLast must return something', () => {
    
    expect(getAllElementsButLast([1,2])).not.toBe(undefined);
});
test('Function getAllElementsButLast must return a list', () => {
    
    expect(typeof getAllElementsButLast([1,2])).toBe("object");
});

test('Function must return an array with all elements but not the last. Testing with [3,6,9,12]', () => {

    let output = getAllElementsButLast([3, 6, 9, 12])
    expect(output).toEqual([3, 6, 9])
})
test('Function must return an array with all elements but not the last. Testing with [1,2,3,4]', () => {

    let output = getAllElementsButLast([1, 2, 3, 4])
    expect(output).toEqual([1, 2, 3])
})
