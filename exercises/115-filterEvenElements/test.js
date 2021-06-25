const rewire = require("rewire");

test('Function filterEvenElements must exist', () => {
    const filterEvenElements = rewire("./app.js").__get__("filterEvenElements");
    expect(filterEvenElements).not.toBe(undefined);
});

test ('Function must returns an array that contains only the even numbers found in the array.', () => {
    const filterEvenElements = rewire ('./app.js').__get__("filterEvenElements");

    expect(filterEvenElements([2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filterEvenElements([6, 8, 12, 81, 92])).toEqual([ 6, 8, 12, 92 ]);
})
