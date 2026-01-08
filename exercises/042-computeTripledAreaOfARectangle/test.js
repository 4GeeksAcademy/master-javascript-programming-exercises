const rewire = require ("rewire");
const computeTripledAreaOfARectangle = rewire("./app.js").__get__("computeTripledAreaOfARectangle");

test('Function computeTripledAreaOfARectangle must exist', () => {
    expect(computeTripledAreaOfARectangle).not.toBe(undefined);
});
test('Function computeTripledAreaOfARectangle must return something', () => {
    expect(computeTripledAreaOfARectangle(1,1)).not.toBe(undefined);
});
test('Function computeTripledAreaOfARectangle must return a number', () => {
    expect(typeof computeTripledAreaOfARectangle(1,1)).toBe("number");
});

test('The function should return the area of the rectangle multiplied by 3. Testing with 2 and 4', () => {
    expect(computeTripledAreaOfARectangle(2, 4)).toBe(24)
})
test('The function should return the area of the rectangle multiplied by 3. Testing with 3 and 5', () => {
    expect(computeTripledAreaOfARectangle(5, 3)).toBe(45)
})
