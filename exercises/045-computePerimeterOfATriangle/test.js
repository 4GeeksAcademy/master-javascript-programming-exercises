const rewire = require ("rewire");
const computePerimeterOfATriangle = rewire("./app.js").__get__("computePerimeterOfATriangle");

test('Function computePerimeterOfATriangle must exist', () => {
    expect(computePerimeterOfATriangle).not.toBe(undefined);
});
test('Function computePerimeterOfATriangle must return something', () => {
    expect(computePerimeterOfATriangle(1,1,1)).not.toBe(undefined);
});
test('Function computePerimeterOfATriangle must return a number', () => {
    expect(typeof computePerimeterOfATriangle(1,1,1)).toBe("number");
});

test('Fuction must return the perimeter of Triangle. Testing with 4, 6 and 10.', () => {
    let output = computePerimeterOfATriangle(6, 4, 10)
    expect(output).toBe(20)
})
test('Fuction must return the perimeter of Triangle. Testing with 5, 10 and 10.', () => {
    let output = computePerimeterOfATriangle(10, 5, 10)
    expect(output).toBe(25)
})
test('Fuction must return the perimeter of Triangle. Testing with 1, 3 and 5.', () => {
    let output = computePerimeterOfATriangle(1, 5, 3)
    expect(output).toBe(9)
})
