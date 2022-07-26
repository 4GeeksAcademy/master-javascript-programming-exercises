const rewire = require ("rewire");

test('Function joinThreeArrays must exist', () => {
    const joinThreeArrays = rewire("./app.js").__get__("joinThreeArrays");
    expect(joinThreeArrays).not.toBe(undefined);
});

test('Must return an array with the elements of arr1, arr2, arr3', () => {
    const joinThreeArrays = rewire('./app.js').__get__("joinThreeArrays");
    
     
    let output = joinThreeArrays([1, 2], [3, 4], [5, 6])
    expect(output).toStrictEqual([1, 2, 3, 4, 5, 6])

    output = joinThreeArrays([5, 2], [9, 4, 7], [32, 9, 11])
    expect(output).toStrictEqual([5, 2, 9, 4, 7, 32, 9, 11])
})
