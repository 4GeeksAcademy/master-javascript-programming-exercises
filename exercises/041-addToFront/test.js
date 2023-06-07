const rewire = require ("rewire");
const addToFront = rewire("./app.js").__get__("addToFront");

test('Function addToFront must exist', () => {
    
    expect(addToFront).not.toBe(undefined);
});

test('Function addToFront must return something', () => {
    
    expect(addToFront([],1)).not.toBe(undefined);
});

test('Function addToFront must return an array', () => {
    
    expect(typeof addToFront([],1)).toBe("object");
});

test('The function must return the given number at the front of the array. Testing with different values', () => {

    expect(addToFront([6, 7], 8)).toStrictEqual([8, 6, 7]);
});

test('The function must return the given number at the front of the array. Testing with different values', () => {

    expect(addToFront([], 8)).toStrictEqual([8]);
});

test('The function must return the given number at the front of the array. Testing with different values', () => {

    expect(addToFront([1, 2], 3)).toStrictEqual([3, 1, 2]);
});
