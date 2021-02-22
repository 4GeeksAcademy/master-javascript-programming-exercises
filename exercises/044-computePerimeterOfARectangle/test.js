const rewire = require ("rewire");

test('Function computePerimeterOfARectangle must exist', () => {
    const computePerimeterOfARectangle = rewire("./app.js").__get__("computePerimeterOfARectangle");
    expect(computePerimeterOfARectangle).not.toBe(undefined);
});


test('Fuction must return the perimeter of Rectangle', () => {
    const computePerimeterOfARectangle = rewire('./app.js').__get__("computePerimeterOfARectangle");
    
    var output = computePerimeterOfARectangle(5, 2)
    expect(output).toBe(14)
})
test('Fuction must return the perimeter Rectangle', () => {
    const computePerimeterOfARectangle = rewire('./app.js').__get__("computePerimeterOfARectangle");
    
    var output = computePerimeterOfARectangle(7, 4)
    expect(output).toBe(22)
})

test('The function will not pass if it returns static result', () => {
    const computePerimeterOfARectangle = rewire('./app.js').__get__("computePerimeterOfARectangle");     
   
    var output = computePerimeterOfARectangle(7, 4)
    expect(output).not.toBe(12)
})