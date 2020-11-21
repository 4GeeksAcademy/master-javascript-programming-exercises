const rewire = require ("rewire");

test('Function addToBackOfNew must exist', () => {
    const addToBackOfNew = rewire("./app.js").__get__("addToBackOfNew");
    expect(addToBackOfNew).not.toBe(undefined);
});

test ('The given object should be the same as the returned array by the function.', () => {
    const addToBackOfNew = rewire ('./app.js').__get__("addToBackOfNew");
     
    var input = [1, 2];
    var output = addToBackOfNew(input, 3);
     expect(output !== input).toBe(true);
})

test ('The returned array should have one more item than the original one .', () => {
    const addToBackOfNew = rewire ('./app.js').__get__("addToBackOfNew");
     
    var input = [1, 2];
    var output = addToBackOfNew(input, 3);
     expect(output.length>input.length).toBe(true);
})

test ('The returned array should have the number 3 as the first element of the array .', () => {
    const addToBackOfNew = rewire ('./app.js').__get__("addToBackOfNew");
     
    var input = [1, 2];
    var output = addToBackOfNew(input, 3);
     expect(output[2]).toBe(3);
})