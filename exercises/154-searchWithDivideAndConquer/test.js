const rewire = require("rewire");

test('Function search must exist', () => {
    const search = rewire("./app.js").__get__("search");
    expect(search).not.toBe(undefined);
});

test('The function must return the index of the number within the array.', () => {
    const search = rewire("./app.js").__get__("search");

    let arr = [1, 3, 16, 22, 31, 33, 34]

    expect(search(arr, 31)).toBe(4)
    expect(search(arr, 16)).toBe(2)
    expect(search(arr, 34)).toBe(6)
    expect(search(arr, 38)).toBe(null)
})