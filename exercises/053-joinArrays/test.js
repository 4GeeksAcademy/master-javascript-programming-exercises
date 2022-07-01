const rewire = require("rewire");
const joinArrays = rewire("./app.js").__get__("joinArrays");

test('Function joinArrays must exist', () => {

    expect(joinArrays).not.toBe(undefined);
});
test('Function joinArrays must return something', () => {

    expect(joinArrays([1],[1])).not.toBe(undefined);
});
test('Function joinArrays must return a joined list', () => {

    expect(typeof joinArrays([1],[2])).toBe("object");
});

test('The function must return an array with the elements of "arr1", followed by the elements of "arr2" in order', () => {

    output = joinArrays([8, 3], [5, 6, 7])
    expect(output).toStrictEqual([8, 3, 5, 6, 7])
})
test('The function must return an array with the elements of "arr1", followed by the elements of "arr2" in order', () => {

    var output = joinArrays([1, 2], [3, 4])
    expect(output).toStrictEqual([1, 2, 3, 4])
})