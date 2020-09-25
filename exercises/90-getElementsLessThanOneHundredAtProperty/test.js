const rewire = require ("rewire");

test('Function getElementsLessThan100AtProperty must exist', () => {
    const getElementsLessThan100AtProperty = rewire("./app.js").__get__("getElementsLessThan100AtProperty");
    expect(getElementsLessThan100AtProperty).not.toBe(undefined);
});

test ('The function must return every element less than 100 on a given key.', () => {
    const getElementsLessThan100AtProperty = rewire ('./app.js').__get__("getElementsLessThan100AtProperty");

var obj = {
  key: [1000, 20, 50, 500]
};

var output = getElementsLessThan100AtProperty(obj, 'key');
    expect(obj.key[1]).toBe(20);
    expect(obj.key[2]).toBe(50);
})

test ('The function must return every element less than 100 on a given key.', () => {
    const getElementsLessThan100AtProperty = rewire ('./app.js').__get__("getElementsLessThan100AtProperty");

    var obj2 = {
    key2: [1000, 10, 50, 10, 20, 6, 10, 98, 10]
};
var output = getElementsLessThan100AtProperty(obj2, 'key');
    expect(obj2.key2[1]).toBe(10);
    expect(obj2.key2[2]).toBe(50);
    expect(obj2.key2[3]).toBe(10);
    expect(obj2.key2[4]).toBe(20);
    expect(obj2.key2[5]).toBe(6);
    expect(obj2.key2[6]).toBe(10);
    expect(obj2.key2[7]).toBe(98);
    expect(obj2.key2[8]).toBe(10);
})


