const rewire = require("rewire");

test('Function computeFactorialOfN must exist', () => {
    const computeFactorialOfN = rewire("./app.js").__get__("computeFactorialOfN");
    expect(computeFactorialOfN).not.toBe(undefined);
});

test('Given an integer greater than 0, returns a factorial number.', () => {
    const computeFactorialOfN = rewire('./app.js').__get__("computeFactorialOfN");
   
    expect(computeFactorialOfN(3)).toBe(6);
    expect(computeFactorialOfN(4)).toBe(24);
    expect(computeFactorialOfN(12)).toBe(479001600);
})