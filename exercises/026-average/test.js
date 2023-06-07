const rewire = require ("rewire");
const average = rewire("./app.js").__get__("average");

test('Function average must exist', () => {
    expect(average).not.toBe(undefined);
});
test('Function should return a number', () => {
    expect(typeof(average(1,2))).toBe("number");
});

test ('The function should return the correct average to the given params (24, 36)', () => {
    expect(average(24, 36)).toBe(30);
})
test ('The function should return the correct average to the given params (102, 93)', () => {
    expect(average(102, 93)).toBe(97.5);
})
