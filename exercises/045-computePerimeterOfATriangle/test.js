const rewire = require ("rewire");

test('Function computePerimeterOfATriangle must exist', () => {
    const computePerimeterOfATriangle = rewire("./app.js").__get__("computePerimeterOfATriangle");
    expect(computePerimeterOfATriangle).not.toBe(undefined);
});

test('Fuction must return the perimeter of Triangle', () => {
    const computePerimeterOfATriangle = rewire('./app.js').__get__("computePerimeterOfATriangle");
    // let output = rewire('./app.js').__get__("output");
    
    let output = computePerimeterOfATriangle(6, 4, 10)
    expect(output).toBe(20)
    // expect(computePerimeterOfATriangle(7, 4, 10)).toBe(21)
})
