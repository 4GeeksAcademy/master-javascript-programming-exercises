const rewire = require("rewire");

test('Function average must exist', () => {
    const average = rewire("./app.js").__get__("average");
    expect(average).not.toBe(undefined);
});

test('Function average must exist', () => {
    const average = rewire("./app.js").__get__("average");

    expect(average(5, 8)).toBe(6.5)
    expect(average(5, 15)).toBe(10)
});

test('Function sum must exist', () => {
    const sum = rewire("./app.js").__get__("sum");
    expect(sum).not.toBe(undefined);
});

test('Function must sum given numbers', () => {
    const sum = rewire("./app.js").__get__("sum");
    
    expect(sum(4, 5)).toBe(9)
    expect(sum(2, 1)).toBe(3)
});