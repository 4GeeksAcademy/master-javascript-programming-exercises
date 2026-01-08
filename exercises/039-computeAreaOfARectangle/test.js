const rewire = require ("rewire");
const computeAreaOfARectangle = rewire("./app.js").__get__("computeAreaOfARectangle");

test('Function computeAreaOfARectangle must exist', () => {
    expect(computeAreaOfARectangle).not.toBe(undefined);
});

test('Function computeAreaOfARectangle must return something', () => {
    expect(computeAreaOfARectangle(1,2)).not.toBe(undefined);
});
test('Function computeAreaOfARectangle must return a number', () => {
    expect(typeof computeAreaOfARectangle(1,2)).toBe("number");
});

test('Function must return the area of a rectangle. Testing with 4 and 8', () => {
    expect(computeAreaOfARectangle(4, 8)).toBe(32)
})

test('Function must return the area of a rectangle. Testing with 5 and 9', () => {
    expect(computeAreaOfARectangle(5, 9)).toBe(45)
})
