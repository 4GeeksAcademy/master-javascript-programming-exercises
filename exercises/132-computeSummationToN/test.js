const rewire = require("rewire");

test('Function computeSummationToN must exist', () => {
    const computeSummationToN = rewire("./app.js").__get__("computeSummationToN");
    expect(computeSummationToN).not.toBe(undefined);
});

test('The function must returns the sum of sequential numbers leading to the given number, starting at 0.', () => {
    const computeSummationToN = rewire('./app.js').__get__("computeSummationToN");

    expect(computeSummationToN(2)).toBe(3);
    expect(computeSummationToN(6)).toBe(21);
    expect(computeSummationToN(8)).toBe(36);
})