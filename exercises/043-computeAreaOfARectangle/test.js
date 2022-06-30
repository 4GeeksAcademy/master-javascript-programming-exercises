const rewire = require ("rewire");
const computeAreaOfARectangle = rewire("./app.js").__get__("computeAreaOfARectangle");

test('Function computeAreaOfARectangle must exist', () => {
    
    expect(computeAreaOfARectangle).not.toBe(undefined);
});

test('Function computeAreaOfARectangle must return something', () => {
    
    expect(computeAreaOfARectangle(1,2)).not.toBe(undefined);
});
test('Function computeAreaOfARectangle must return a number', () => {
    
    expect(typeof computeAreaOfARectangle(1,2)).toBe("number");
});

test('Fuction must return the area of Rectangle', () => {
    
    expect(computeAreaOfARectangle(4, 8)).toBe(32)
})

test('Fuction must return the area of Rectangle', () => {
    
    expect(computeAreaOfARectangle(5, 9)).toBe(45)
})