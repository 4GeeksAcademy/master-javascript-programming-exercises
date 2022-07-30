const rewire = require ("rewire");
const computePerimeterOfACircle = rewire("./app.js").__get__("computePerimeterOfACircle");

test('Function computePerimeterOfACircle must exist', () => {
    expect(computePerimeterOfACircle).not.toBe(undefined);
});
test('Function computePerimeterOfACircle must return something', () => {
    expect(computePerimeterOfACircle(1)).not.toBe(undefined);
});
test('Function computePerimeterOfACircle must return a number', () => {
    expect(typeof computePerimeterOfACircle(1)).toBe("number");
});

test('Must return the perimeter of a circle. Testing with 4', () => {    
    let output = computePerimeterOfACircle(4)
    expect(output).toBe(25.132741228718345)
})

test('Must return the perimeter of a circle. Testing with 33', () => {
    let output = computePerimeterOfACircle(33)
    expect(output).toBe(207.34511513692635)
})
