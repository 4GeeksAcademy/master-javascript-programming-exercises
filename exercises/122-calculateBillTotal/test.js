const rewire = require("rewire");

test('Function calculateBillTotal must exist', () => {
    const calculateBillTotal = rewire("./app.js").__get__("calculateBillTotal");
    expect(calculateBillTotal).not.toBe(undefined);
});

test('Function must returns the total amount owed after taxes and tips.', () => {
    const calculateBillTotal = rewire('./app.js').__get__("calculateBillTotal");

    expect(calculateBillTotal(20)).toBe(24.9);
    expect(calculateBillTotal(36)).toBe(44.82);
})

