const rewire = require ("rewire");

test('Function addToFrontOfNew must exist', () => {
    const addToFrontOfNew = rewire("./app.js").__get__("addToFrontOfNew");
    expect(addToFrontOfNew).not.toBe(undefined);
});

test ('The returned array should have one more item than the original one .', () => {
    const addToFrontOfNew = rewire ('./app.js').__get__("addToFrontOfNew");
     
    var input = [1, 2];
    var output = addToFrontOfNew(input, 3);
     expect(output.length>input.length).toBe(true);
})

test ('Function returns a new array containing all the elements of the given array, with the given element added to the front.', () => {
    const addToFrontOfNew = rewire ('./app.js').__get__("addToFrontOfNew");
     
     expect(addToFrontOfNew([1, 2], 3)).toEqual([3, 1, 2]);
     expect(addToFrontOfNew([12, 16], 10)).toEqual([10, 12, 16]);
})
