const rewire = require("rewire");

test('Function findSmallestNumberAmongMixedElements must exist', () => {
    const findSmallestNumberAmongMixedElements = rewire("./app.js").__get__("findSmallestNumberAmongMixedElements");
    expect(findSmallestNumberAmongMixedElements).not.toBe(undefined);
});

test('Function must returns the smallest number within the array.', () => {
    const findSmallestNumberAmongMixedElements = rewire('./app.js').__get__("findSmallestNumberAmongMixedElements");

    let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus'])
    expect(output).toBe(4);

    output = findSmallestNumberAmongMixedElements(['a', 'b', 2, 3, 'clear'])
    expect(output).toBe(2);
})

test('If the given array contains no number elements, it should return 0.', () => {
    const findSmallestNumberAmongMixedElements = rewire('./app.js').__get__("findSmallestNumberAmongMixedElements");
    
    let output = findSmallestNumberAmongMixedElements(['a', 'b', 'clear'])
    expect(output).toBe(0);
})

test('If array is empty must return 0', () => {
    const findSmallestNumberAmongMixedElements = rewire('./app.js').__get__("findSmallestNumberAmongMixedElements");

    let output = findSmallestNumberAmongMixedElements([])
    expect(output).toBe(0)
})
