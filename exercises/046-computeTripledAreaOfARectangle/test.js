const rewire = require ("rewire");

test('Function computeTripledAreaOfARectangle must exist', () => {
    const computeTripledAreaOfARectangle = rewire("./app.js").__get__("computeTripledAreaOfARectangle");
    expect(computeTripledAreaOfARectangle).not.toBe(undefined);
});

test('The fuction should return the area of the rectangle multiplied by 3', () => {
    const computeTripledAreaOfARectangle = rewire('./app.js').__get__("computeTripledAreaOfARectangle");
    
    expect(computeTripledAreaOfARectangle(2, 4)).toBe(24)
    expect(computeTripledAreaOfARectangle(5, 3)).toBe(45)
})

test('The function will not pass if it returns static result', () => {
    const computeTripledAreaOfARectangle = rewire('./app.js').__get__("computeTripledAreaOfARectangle");     
   
    var output = computeTripledAreaOfARectangle(44, 3)
    expect(output).not.toBe(132)
})