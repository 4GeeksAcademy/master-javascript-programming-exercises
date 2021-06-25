const rewire = require ("rewire");

test('Function computePower must exist', () => {
    const computePower = rewire("./app.js").__get__("computePower");
    expect(computePower).not.toBe(undefined);
});

test('Must return the number raised to the exponent', () => {
    const computePower = rewire('./app.js').__get__("computePower");
    
    expect(computePower(2, 3)).toBe(8)
    expect(computePower(5, 7)).toBe(78125)
})