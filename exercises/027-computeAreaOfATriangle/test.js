const rewire = require ("rewire");

test('Function computeAreaOfATriangle must exist', () => {
    const computeAreaOfATriangle = rewire("./app.js").__get__("computeAreaOfATriangle");
    expect(computeAreaOfATriangle).not.toBe(undefined);
});

test ('function should return the area of a triangle.', () => {
    const computeAreaOfATriangle = rewire ('./app.js').__get__("computeAreaOfATriangle");

    expect(computeAreaOfATriangle(24, 36)).toBe(432);
    expect(computeAreaOfATriangle(102, 93)).toBe(4743);
})