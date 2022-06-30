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

test('The fuction should return the area of the rectangle multiplied by 3. Testing with 2,4', () => {
    
    expect(computeTripledAreaOfARectangle(2, 4)).toBe(24)
})
test('The fuction should return the area of the rectangle multiplied by 3. Testing with 5,3', () => {
    
    expect(computeTripledAreaOfARectangle(5, 3)).toBe(45)
})
