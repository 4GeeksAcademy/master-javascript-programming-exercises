const rewire = require("rewire");

test("Function findPairForSum should exist", function(){
  const file = rewire("./app.js");
  const findPairForSum = file.__get__('findPairForSum');
  expect(findPairForSum).toBeTruthy();
});

test("Function findPairForSum should return something", function(){
  const file = rewire("./app.js");
  const findPairForSum = file.__get__('findPairForSum');
  expect(findPairForSum([3, 34, 4], 7)).toBeTruthy();
});

test('The function must return a pair of numbers that add up to the goal number.', () => {
    const file = rewire("./app.js");
    const findPairForSum = file.__get__('findPairForSum');
    expect(findPairForSum([3, 34, 4, 12, 5, 2], 9)).toContain(4)
    expect(findPairForSum([3, 34, 4, 12, 5, 2], 9)).toContain(5)
})

test('The function must return a pair of numbers that add up to the goal number. Trying with different values', () => {
    const file = rewire("./app.js");
    const findPairForSum = file.__get__('findPairForSum');
    expect(findPairForSum([3, 34, 4, 12, 5, 2, 6], 5)).toContain(3)
    expect(findPairForSum([3, 34, 4, 12, 5, 2, 6], 5)).toContain(2)
})