const rewire = require ("rewire");
const cube = rewire("./app.js").__get__("cube");

test('Function cube must exist', () => {
    expect(cube).not.toBe(undefined);
});
test('Function cube should return a number', () => {
    expect(typeof cube(1)).toBe('number');
});

test ('The function should return the cube of the number given. Testing with (93)', () => {
    expect(cube(93)).toBe(804357);
})
test ('function should return the cube of the number given. Testing with (24)', () => {
    expect(cube(24)).toBe(13824);
})