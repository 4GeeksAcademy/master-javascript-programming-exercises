const rewire = require ("rewire");
const computePerimeterOfARectangle = rewire("./app.js").__get__("computePerimeterOfARectangle");

test('Function computePerimeterOfARectangle must exist', () => {
    expect(computePerimeterOfARectangle).not.toBe(undefined);
});

test('Function computePerimeterOfARectangle must return something', () => {
    expect(computePerimeterOfARectangle(1,2)).not.toBe(undefined);
});
test('Function computePerimeterOfARectangle must return a number', () => {
    expect(typeof computePerimeterOfARectangle(1,2)).toBe("number");
});

test('Fuction must return the perimeter of Rectangle. Testing with 4 and 7.', () => {
    expect(computePerimeterOfARectangle(7, 4)).toBe(22)
});

test('Fuction must return the perimeter of Rectangle. Testing with 2 and 5.', () => {
    expect(computePerimeterOfARectangle(5, 2)).toBe(14)
});
