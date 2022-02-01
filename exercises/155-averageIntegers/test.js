const rewire = require("rewire");
const sum = rewire("./app.js").__get__("sum");
const average = rewire("./app.js").__get__("average");

test('Function average must exist', () => {
    expect(average).not.toBe(undefined);
});
test('Function sum must exist', () => {
    expect(sum).not.toBe(undefined);
});

test('The function must sum the given numbers [4. 5] and return 9', () => {
    expect(sum([4, 5])).toBe(9)
});

test('The function must sum all the given numbers [4, 1, 12, 20, 1] and return ', () => {
    expect(sum([4, 1, 12, 20, 1])).toBe(38)
});

test('Function average must return the correct result of [5, 8]', () => {
    expect(average([5, 8])).toBe(6.5)
    
});
test('Function average must return the correct result of [5, 15, 60, 2]', () => {
    expect(average([5, 15, 60, 2])).toBe(20.5)
    
});
