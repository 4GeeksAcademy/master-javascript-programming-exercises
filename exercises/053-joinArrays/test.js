const rewire = require("rewire");

test('Function joinArrays must exist', () => {
    const joinArrays = rewire("./app.js").__get__("joinArrays");
    expect(joinArrays).not.toBe(undefined);
});

test('The function must return an array with the elements of "arr1", followed by the elements of "arr2" in order', () => {
    const joinArrays = rewire('./app.js').__get__("joinArrays");

    var output = joinArrays([1, 2], [3, 4])
    expect(output).toStrictEqual([1, 2, 3, 4])

    output = joinArrays([8, 3], [5, 6, 7])
    expect(output).toStrictEqual([8, 3, 5, 6, 7])
})