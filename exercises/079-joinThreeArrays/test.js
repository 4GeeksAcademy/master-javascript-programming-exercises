const rewire = require ("rewire");
const joinThreeArrays = rewire("./app.js").__get__("joinThreeArrays");

test('Function joinThreeArrays must exist', () => {
    
    expect(joinThreeArrays).not.toBe(undefined);
});
test('Function joinThreeArrays must return something', () => {
    
    expect(joinThreeArrays([1],[2],[3])).not.toBe(undefined);
});
test('Function joinThreeArrays must return an array', () => {
    
    expect(typeof joinThreeArrays([1],[2],[3])).toBe("object");
});

test('Must return an array with the elements of arr1, arr2, arr3', () => {

    let output = joinThreeArrays([5, 2], [9, 4, 7], [32, 9, 11])
    expect(output).toStrictEqual([5, 2, 9, 4, 7, 32, 9, 11])
})
test('Must return an array with the elements of arr1, arr2, arr3', () => {
     
    let output = joinThreeArrays([1, 2], [3, 4], [5, 6])
    expect(output).toStrictEqual([1, 2, 3, 4, 5, 6])
})
