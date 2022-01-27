const rewire = require("rewire");
const joinArrayOfArrays = rewire('./app.js').__get__("joinArrayOfArrays");
const path = require('path');
const fs = require('fs');
const app_content = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');



test('Function joinArrayOfArrays must exist', () => {
    expect(joinArrayOfArrays).not.toBe(undefined);
});

test('You should use concat in your function', () => {
    expect(app_content).toMatch(/\.concat/gm);
});

test('Function must returns a single array containing the elements of the nested arrays.', () => {
    expect(joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']])).toEqual([1, 4, true, false, 'x', 'y']);
})

test("your solution works with other examples. Testing with [[2, 6], [4, true]]", () => {
    expect(joinArrayOfArrays([[2, 6], [4, true]])).toEqual([2, 6, 4, true]);
})

