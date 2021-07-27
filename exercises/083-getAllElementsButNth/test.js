const rewire = require("rewire");

test('Function getAllElementsButNth must exist', () => {
    const getAllElementsButNth = rewire("./app.js").__get__("getAllElementsButNth");
    expect(getAllElementsButNth).not.toBe(undefined);
});

test('The function must returns an array with all elements except the nth .', () => {
    const getAllElementsButNth = rewire('./app.js').__get__("getAllElementsButNth");

    expect(getAllElementsButNth(['a', 'b', 'c'], 1)).toEqual(['a', 'c'])
    expect(getAllElementsButNth(['f', 'c', 'q'], 1)).toEqual(['f', 'q'])
})