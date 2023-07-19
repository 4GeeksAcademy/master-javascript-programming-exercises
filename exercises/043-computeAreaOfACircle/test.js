const rewire = require ("rewire");
const computeAreaOfACircle = rewire("./app.js").__get__("computeAreaOfACircle");

test('Function computeAreaOfACircle must exist', () => {
    expect(computeAreaOfACircle).not.toBe(undefined);
});
test('Function computeAreaOfACircle must return something', () => {
    expect(computeAreaOfACircle(1)).not.toBe(undefined);
});
test('Function computeAreaOfACircle must return a number', () => {
    expect(typeof computeAreaOfACircle(1)).toBe("number");
});

test('Must return the area of a circle. Testing with 4', () => {
    expect(computeAreaOfACircle(4)).toBe(50.26548245743669)
})
test('Must return the area of a circle. Testing 2', () => {
    expect(computeAreaOfACircle(2)).toBe(12.566370614359172)
})
