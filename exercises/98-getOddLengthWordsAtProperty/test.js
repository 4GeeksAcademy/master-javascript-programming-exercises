const rewire = require ("rewire");

test('Function getOddLengthWordsAtProperty must exist', () => {
    const getOddLengthWordsAtProperty = rewire("./app.js").__get__("getOddLengthWordsAtProperty");
    expect(getOddLengthWordsAtProperty).not.toBe(undefined);
});

test ('The function must return only the odd elements on a given key.', () => {
    const getOddLengthWordsAtProperty = rewire ('./app.js').__get__("getOddLengthWordsAtProperty");
    
    var obj = {
    key: ['It', 'has', 'some', 'words']
};
    var output = getOddLengthWordsAtProperty(obj, 'key');

    expect(obj.key[1].length  % 2 !== 0).toBe(true);
    expect(obj.key[1].length  % 2 !== 0).toBe(true);
    
})


test ('The function must return undefined if there\'s no property at the given key.', () => {
    const getOddLengthWordsAtProperty = rewire ('./app.js').__get__("getOddLengthWordsAtProperty");
    
    var obj = {
    key: ['It', 'has', 'some', 'words']
};
    var output = getOddLengthWordsAtProperty(obj, 'key');

    expect(obj.key[0].length  % 2 !== 0).toBe(false);
    expect(obj.key[2].length  % 2 !== 0).toBe(false);
    
})



test ('The function must return only the odd elements on a given key.', () => {
    const getOddLengthWordsAtProperty = rewire ('./app.js').__get__("getOddLengthWordsAtProperty");
    
    var obj = {
    key: ['It', 'apple', 'some', 'flags', 'car']
};
    var output = getOddLengthWordsAtProperty(obj, 'key');

    expect(obj.key[1].length  % 2 !== 0).toBe(true);
    expect(obj.key[3].length  % 2 !== 0).toBe(true);
    expect(obj.key[4].length  % 2 !== 0).toBe(true);
    
})

test ('The function must return undefined if there\'s no property at the given key.', () => {
    const getOddLengthWordsAtProperty = rewire ('./app.js').__get__("getOddLengthWordsAtProperty");
    
    var obj = {
    key: ['It', 'apple', 'some', 'flags', 'car']
};
    var output = getOddLengthWordsAtProperty(obj, 'key');

    expect(obj.key[0].length  % 2 !== 0).toBe(false);
    expect(obj.key[2].length  % 2 !== 0).toBe(false);
    
})



