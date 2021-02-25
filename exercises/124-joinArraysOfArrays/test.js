const rewire = require("rewire");

test('Function joinArrayOfArrays must exist', () => {
    const joinArrayOfArrays = rewire("./app.js").__get__("joinArrayOfArrays");
    expect(joinArrayOfArrays).not.toBe(undefined);
});

test('Function must returns a single array containing the elements of the nested arrays.', () => {
    const joinArrayOfArrays = rewire('./app.js').__get__("joinArrayOfArrays");

    let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']])
    expect(output).toEqual([1, 4, true, false, 'x', 'y']);
})

test('Function must returns a single array containing the elements of the nested arrays.', () => {
    const joinArrayOfArrays = rewire('./app.js').__get__("joinArrayOfArrays");


    let output = joinArrayOfArrays([[2, 6], [4, true]])
    expect(output).toEqual([2, 6, 4, true]);
})
