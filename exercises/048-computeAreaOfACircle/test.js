const rewire = require ("rewire");

test('Function computeAreaOfACircle must exist', () => {
    const computeAreaOfACircle = rewire("./app.js").__get__("computeAreaOfACircle");
    expect(computeAreaOfACircle).not.toBe(undefined);
});

test('Must return the area of a circle', () => {
    const computeAreaOfACircle = rewire('./app.js').__get__("computeAreaOfACircle");
    
    var output = computeAreaOfACircle(4)
    expect(output).toBe(50.26548245743669)
})

test('Must return the area of a circle', () => {
    const computeAreaOfACircle = rewire('./app.js').__get__("computeAreaOfACircle");
    
    var output = computeAreaOfACircle(1)
    expect(output).toBe(3.141592653589793)
})

test('The function will not pass if it returns static result', () => {
    const computeAreaOfACircle = rewire('./app.js').__get__("computeAreaOfACircle");     
   
    var output = computeAreaOfACircle(3)
    expect(output).not.toBe(3.32639)
})