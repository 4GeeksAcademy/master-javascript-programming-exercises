const rewire = require("rewire");

test('Function findPairForSum must exist', () => {
    const findPairForSum = rewire("./app.js").__get__("findPairForSum");
    expect(findPairForSum).not.toBe(undefined);
});

test('the function must find a pair of numbers that add up to the goal number.', () => {
    const findPairForSum = rewire("./app.js").__get__("findPairForSum");

    expect(findPairForSum([3, 34, 4, 12, 5, 2], 9)).toEqual([4, 5])
    expect(findPairForSum([1, 2, 3, 4, 5], 7)).toBe([4, 3])
})


