const rewire = require ("rewire");

test('Function addToBackOfNew must exist', () => {
    const addToBackOfNew = rewire("./app.js").__get__("addToBackOfNew");
    expect(addToBackOfNew).not.toBe(undefined);
});

test ('The returned array should have one more item than the original one .', () => {
    const addToBackOfNew = rewire ('./app.js').__get__("addToBackOfNew");
     
    var input = [1, 2];
    var output = addToBackOfNew(input, 3);
     expect(output.length>input.length).toBe(true);
})

test ('The returned array should have the new number as the last element of the array.', () => {
    const addToBackOfNew = rewire ('./app.js').__get__("addToBackOfNew");
    
     expect(addToBackOfNew([1, 2], 3)).toEqual([1, 2, 3]);
     expect(addToBackOfNew([10, 12], 15)).toEqual([10, 12, 15]);
})