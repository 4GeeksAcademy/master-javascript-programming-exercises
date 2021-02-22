const rewire = require ("rewire");

test('Function computePower must exist', () => {
    const computePower = rewire("./app.js").__get__("computePower");
    expect(computePower).not.toBe(undefined);
});

test('Must return the number raised to the exponent', () => {
    const computePower = rewire('./app.js').__get__("computePower");
    
    var output = computePower(2, 3)
    expect(output).toBe(8)
})

test('Must return the number raised to the exponent', () => {
    const computePower = rewire('./app.js').__get__("computePower");
    
    var output = computePower(5, 7)
    expect(output).toBe(78125)
})

test('The function will not pass if it returns static result', () => {
    const computePower = rewire('./app.js').__get__("computePower");     
   
    var output = computePower(2, 8)
    expect(output).not.toBe(20)
})