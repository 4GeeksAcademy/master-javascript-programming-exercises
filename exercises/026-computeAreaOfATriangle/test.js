const rewire = require ("rewire");
const computeAreaOfATriangle = rewire("./app.js").__get__("computeAreaOfATriangle");


test('Function computeAreaOfATriangle must exist', () => {
    expect(computeAreaOfATriangle).not.toBe(undefined);
});
test('Function computeAreaOfATriangle should return a number', () => {
    expect(typeof computeAreaOfATriangle(1,2)).toBe('number');
});

test ('The function should return the area of a triangle. Testing with (102, 93)', () => {
    expect(computeAreaOfATriangle(102, 93)).toBe(4743);
})
test ('The function should return the area of a triangle. Testing with (24, 36)', () => {
    expect(computeAreaOfATriangle(24, 36)).toBe(432);
})
