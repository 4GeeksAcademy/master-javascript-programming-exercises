const rewire = require("rewire");

test('Function getElementsLessThan100AtProperty must exist', () => {
    const getElementsLessThan100AtProperty = rewire("./app.js").__get__("getElementsLessThan100AtProperty");
    expect(getElementsLessThan100AtProperty).not.toBe(undefined);
});

test('The function must return every element less than 100 on a given key.', () => {
    const getElementsLessThan100AtProperty = rewire('./app.js').__get__("getElementsLessThan100AtProperty");

    var obj = {
        key: [1000, 20, 50, 500]
    };

    var output = getElementsLessThan100AtProperty(obj, 'key');
    expect(output[0]).toBe(20);
    expect(output[1]).toBe(50);
})

test('The function must return every element less than 100 on a given key.', () => {
    const getElementsLessThan100AtProperty = rewire('./app.js').__get__("getElementsLessThan100AtProperty");

    var obj = {
        key: [1000, 10, 50, 10, 20, 6, 10, 98, 10]
    };
    var output = getElementsLessThan100AtProperty(obj, 'key');
    expect(output[0]).toBe(10);
    expect(output[1]).toBe(50);
    expect(output[2]).toBe(10);
    expect(output[3]).toBe(20);
    expect(output[4]).toBe(6);
    expect(output[5]).toBe(10);
    expect(output[6]).toBe(98);
    expect(output[7]).toBe(10);
})


