const rewire = require ("rewire");

test('Function computeAreaOfARectangle must exist', () => {
    const computeAreaOfARectangle = rewire("./app.js").__get__("computeAreaOfARectangle");
    expect(computeAreaOfARectangle).not.toBe(undefined);
});

test('Fuction must return the area of Rectangle', () => {
    const computeAreaOfARectangle = rewire('./app.js').__get__("computeAreaOfARectangle");
    
    expect(computeAreaOfARectangle(4, 8)).toBe(32)
    expect(computeAreaOfARectangle(5, 9)).toBe(45)
})
