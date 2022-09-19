const rewire = require ("rewire");
const getNthElement = rewire("./app.js").__get__("getNthElement");
test('Function getNthElement must exist', () => {
   
    expect(getNthElement).not.toBe(undefined);
});
test('Function getNthElement must return something', () => {
   
    expect(getNthElement([1],0)).not.toBe(undefined);
});

test('Function must return the value of the 2nd value position in getNthElement array', () => {
   
    const output = getNthElement([1, 3, 5], 0)
    expect(output).toStrictEqual(1)
})

test('Function must returns one integer element, within the given array.', () => {
  
    const output = getNthElement([1, 3, 5], 1)
    expect(output).toStrictEqual(3)
})

test('Function must returns one integer element, within the given array.', () => {
 
    const output = getNthElement([1, 3, 5], 2)
    expect(output).toStrictEqual(5)
})

test('Function must returns undefined, if the given array is empty.', () => {
    
    const output = getNthElement([], 3)
    expect(output).toStrictEqual(undefined)
})