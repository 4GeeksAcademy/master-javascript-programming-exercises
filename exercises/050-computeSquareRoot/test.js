const rewire = require("rewire");
const computeSquareRoot = rewire("./app.js").__get__("computeSquareRoot");

test('Function computeSquareRoot must exist', () => {
    
    expect(computeSquareRoot).not.toBe(undefined);
});
test('Function computeSquareRoot must return something', () => {
    
    expect(computeSquareRoot(1)).not.toBe(undefined);
});
test('Function computeSquareRoot must return a number', () => {
    
    expect(typeof computeSquareRoot(1)).toBe("number");
});
test('The function Should return the square root of the given number. Testing with 21', () => {

    expect(computeSquareRoot(21)).toBe(4.58257569495584)
})
test('The function Should return the square root of the given number. Testing with 9', () => {

    expect(computeSquareRoot(9)).toBe(3)
})