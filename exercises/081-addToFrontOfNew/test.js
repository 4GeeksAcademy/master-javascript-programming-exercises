const rewire = require ("rewire");

test('Function addToFrontOfNew must exist', () => {
    const addToFrontOfNew = rewire("./app.js").__get__("addToFrontOfNew");
    expect(addToFrontOfNew).not.toBe(undefined);
});

test ('The given object should be the same as the returned array by the function.', () => {
    const addToFrontOfNew = rewire ('./app.js').__get__("addToFrontOfNew");
     
    var input = [1, 2];
    var output = addToFrontOfNew(input, 3);
     expect(output !== input).toBe(true);
})

test ('The returned array should have one more item than the original one .', () => {
    const addToFrontOfNew = rewire ('./app.js').__get__("addToFrontOfNew");
     
    var input = [1, 2];
    var output = addToFrontOfNew(input, 3);
     expect(output.length>input.length).toBe(true);
})

test ('The returned array should have the given number as the first element of the array .', () => {
    const addToFrontOfNew = rewire ('./app.js').__get__("addToFrontOfNew");
     
    var input = [1, 2];
    var output = addToFrontOfNew(input, 3);
     expect(output[0]).toBe(3);
})


