const rewire = require ("rewire");
const getLastElement = rewire("./app.js").__get__("getLastElement");

test('Function getLastElement must exist', () => {
    
    expect(getLastElement).not.toBe(undefined);
});
test('Function getLastElement must return something', () => {
    
    expect(getLastElement([1,2])).not.toBe(undefined);
});

test('Function must return the last value of the array', () => {
   
    let output = getLastElement([95, 3])
    expect(output).toStrictEqual(3)

})
test('Function must return the last value of the array', () => {
   
    let output = getLastElement([1, 3, 9])
    expect(output).toStrictEqual(9)

})

test('Function must return undefined if the array is empty', () => {
    
    let output = getLastElement([])
    expect(output).toBe(undefined)
})