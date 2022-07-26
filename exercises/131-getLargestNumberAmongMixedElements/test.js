const rewire = require("rewire");

test('Function getLargestNumberAmongMixedElements must exist', () => {
    const getLargestNumberAmongMixedElements = rewire("./app.js").__get__("getLargestNumberAmongMixedElements");
    expect(getLargestNumberAmongMixedElements).not.toBe(undefined);
});

test('The function must return the largest number in the array.', () => {
    const getLargestNumberAmongMixedElements = rewire('./app.js').__get__("getLargestNumberAmongMixedElements");

    let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up'])
    expect(output).toBe(5);
})

test('If the given array, not contains number elements , it should return 0.', () => {
    const getLargestNumberAmongMixedElements = rewire('./app.js').__get__("getLargestNumberAmongMixedElements");

    let output = getLargestNumberAmongMixedElements(['1', '2', 'three'])
    expect(output).toBe(0);
})

test('If array is empty must return 0', () => {
    const getLargestNumberAmongMixedElements = rewire('./app.js').__get__("getLargestNumberAmongMixedElements");

    let output = getLargestNumberAmongMixedElements([])
    expect(output).toBe(0)
})
