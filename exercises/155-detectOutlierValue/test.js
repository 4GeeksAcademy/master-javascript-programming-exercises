const rewire = require("rewire");

test('Function detectOutlierValue must exist', () => {
    const detectOutlierValue = rewire("./app.js").__get__("detectOutlierValue");
    expect(detectOutlierValue).not.toBe(undefined);
});

test('The function must find the position of the only odd or even number', () => {
    const detectOutlierValue = rewire("./app.js").__get__("detectOutlierValue");

    expect(detectOutlierValue("2 4 7 8 10")).toBe(3)
    expect(detectOutlierValue("1 10 1 1")).toBe(2)
    expect(detectOutlierValue("1 2 8 4")).toBe(1)
})


