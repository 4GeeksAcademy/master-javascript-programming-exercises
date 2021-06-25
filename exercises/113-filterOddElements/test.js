const rewire = require("rewire");

test('Function filterOddElements must exist', () => {
    const filterOddElements = rewire("./app.js").__get__("filterOddElements");
    expect(filterOddElements).not.toBe(undefined);
});

test ('Function must returns an array containing only the odd numbers of the given array.', () => {
    const filterOddElements = rewire ('./app.js').__get__("filterOddElements");

    expect(filterOddElements([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    expect(filterOddElements([3, 9, 12, 37])).toEqual([3, 9, 37]);
})