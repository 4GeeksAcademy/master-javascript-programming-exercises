const rewire = require ("rewire");
const getFirstElement = rewire("./app.js").__get__("getFirstElement");
test('Function getFirstElement must exist', () => {
   
    expect(getFirstElement).not.toBe(undefined);
});
test('Function getFirstElement must return something', () => {
   
    expect(getFirstElement([1])).not.toBe(undefined);
});

test('Function must return the first value of the array', () => {
    
    const output = getFirstElement([1, 3, 5])
    expect(output).toBe(1)
})
test('Function must return the first value of the array', () => {
   
    const output = getFirstElement([8, 5, 3])
    expect(output).toBe(8)
})
test('Function must return undefined if the length of the array is empty', () => {
   
    const output = getFirstElement([], 0)
    expect(output).toBe(undefined)
})