const rewire = require ("rewire");

test('Function computePerimeterOfATriangle must exist', () => {
    const computePerimeterOfATriangle = rewire("./app.js").__get__("computePerimeterOfATriangle");
    expect(computePerimeterOfATriangle).not.toBe(undefined);
});

test('Fuction must return the perimeter of Triangle', () => {
    const computePerimeterOfATriangle = rewire('./app.js').__get__("computePerimeterOfATriangle");
    
    expect(computePerimeterOfATriangle(6, 4, 10)).toBe(20)
    expect(computePerimeterOfATriangle(7, 4, 10)).toBe(21)
})

test('The function will not pass if it returns static result', () => {
    const computePerimeterOfATriangle = rewire('./app.js').__get__("computePerimeterOfATriangle");     
   
    var output = computePerimeterOfATriangle(44, 3, 6)
    expect(output).not.toBe(20)
})