const rewire = require ("rewire");

test ('The array returned should .', () => {
    const getAllElementsButNth = rewire ('./app.js').__get__("getAllElementsButNth");
     
     var output = getAllElementsButNth(['a', 'b', 'c'], 1);
     expect(output).toContain(output[0],[2]);
})

