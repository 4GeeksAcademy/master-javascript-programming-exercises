const rewire = require ("rewire");
const addToBack = rewire("./app.js").__get__("addToBack");

test('Function addToBack must exist', () => {
    
    expect(addToBack).not.toBe(undefined);
});
test('Function addToBack must return something', () => {
    
    expect(addToBack([],2)).not.toBe(undefined);
});
test('Function addToBack must return an array', () => {
    
    expect(typeof addToBack([],2)).toBe("object");
});

test('The function must return the given number in the last position of the array', () => {

    expect(addToBack([1, 2], 3)).toStrictEqual([1, 2, 3]);
});

test('The function must return the given number in the last position of the array. Testing with different values', () => {

    expect(addToBack([22, 44], 11)).toStrictEqual([22, 44, 11]);
});
