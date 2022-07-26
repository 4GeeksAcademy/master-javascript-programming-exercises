const rewire = require ("rewire");

test('Function computePerimeterOfACircle must exist', () => {
    const computePerimeterOfACircle = rewire("./app.js").__get__("computePerimeterOfACircle");
    expect(computePerimeterOfACircle).not.toBe(undefined);
});

test('Must return the perimeter of a circle', () => {
    const computePerimeterOfACircle = rewire('./app.js').__get__("computePerimeterOfACircle");
    
    let output = computePerimeterOfACircle(4)
    expect(output).toBe(25.132741228718345)
})

test('Must return the perimeter of a circle', () => {
    const computePerimeterOfACircle = rewire('./app.js').__get__("computePerimeterOfACircle");
    
    let output = computePerimeterOfACircle(33)
    expect(output).toBe(207.34511513692635)
})
