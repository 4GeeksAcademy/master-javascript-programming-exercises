const rewire = require("rewire");

test('Function getEvenLengthWordsAtProperty must exist', () => {
    const getEvenLengthWordsAtProperty = rewire("./app.js").__get__("getEvenLengthWordsAtProperty");
    expect(getEvenLengthWordsAtProperty).not.toBe(undefined);
});


test('If the array is empty, it should return an void array.', () => {
    const getEvenLengthWordsAtProperty = rewire("./app.js").__get__("getEvenLengthWordsAtProperty");
    var obj = {
        key: []
    };
    var output = getEvenLengthWordsAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If it does not contain any elements whose length is even, it must return an empty array.', () => {
    const getEvenLengthWordsAtProperty = rewire("./app.js").__get__("getEvenLengthWordsAtProperty");
    var obj = {
        key: ['a', 'b', 'c']
    };
    var output = getEvenLengthWordsAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If the property in the given key is not an array, it should return an empty array.', () => {
    const getEvenLengthWordsAtProperty = rewire("./app.js").__get__("getEvenLengthWordsAtProperty");
    var obj = {
        key: 3
    };
    var output = getEvenLengthWordsAtProperty(obj, 'key')
    expect(output).toEqual([])
})

test('If there is no property on the key, it should return an empty array.', () => {
    const getEvenLengthWordsAtProperty = rewire("./app.js").__get__("getEvenLengthWordsAtProperty");
    var obj = {
    };
    var output = getEvenLengthWordsAtProperty(obj, 'key')
    expect(output).toEqual([])
})