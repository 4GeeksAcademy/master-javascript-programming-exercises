const rewire = require ("rewire");

test('Function computeAreaOfACircle must exist', () => {
    const computeAreaOfACircle = rewire("./app.js").__get__("computeAreaOfACircle");
    expect(computeAreaOfACircle).not.toBe(undefined);
});

test('Must return the area of a circle', () => {
    const computeAreaOfACircle = rewire('./app.js').__get__("computeAreaOfACircle");
    
    expect(computeAreaOfACircle(4)).toBe(50.26548245743669)
    expect(computeAreaOfACircle(1)).toBe(3.141592653589793)
})

// test('Must return the area of a circle', () => {
//     const computeAreaOfACircle = rewire('./app.js').__get__("computeAreaOfACircle");

// })
