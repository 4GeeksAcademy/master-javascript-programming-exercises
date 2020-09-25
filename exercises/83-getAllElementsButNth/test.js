const rewire = require ("rewire");

test('Function getAllElementsButNth must exist', () => {
    const getAllElementsButNth = rewire("./app.js").__get__("getAllElementsButNth");
    expect(getAllElementsButNth).not.toBe(undefined);
});

test ('The array returned should .', () => {
    const getAllElementsButNth = rewire ('./app.js').__get__("getAllElementsButNth");
     
     var output = getAllElementsButNth(['a', 'b', 'c'], 1);
     expect(output).toContain(output[0],[2]);
})

