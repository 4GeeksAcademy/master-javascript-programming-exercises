const rewire = require("rewire");

test('Function computeCompoundInterest must exist', () => {
    const computeCompoundInterest = rewire("./app.js").__get__("computeCompoundInterest");
    expect(computeCompoundInterest).not.toBe(undefined);
});

test('Function must return  the amount of compound interest generated .', () => {
    const computeCompoundInterest = rewire("./app.js").__get__("computeCompoundInterest");
    
    expect(computeCompoundInterest(1500, .043, 4, 6)).toBe(438.83682213410543)
    expect(computeCompoundInterest(600, .021, 2, 4)).toBe(52.29161102351213)
})