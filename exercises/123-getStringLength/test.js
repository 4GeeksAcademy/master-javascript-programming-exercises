const rewire = require("rewire");

test('Function getStringLength must exist', () => {
    const getStringLength = rewire("./app.js").__get__("getStringLength");
    expect(getStringLength).not.toBe(undefined);
});

test('Function must returns the length of the string.', () => {
    const getStringLength = rewire('./app.js').__get__("getStringLength");

    expect(getStringLength('hello')).toBe(5);
    expect(getStringLength('world wide web')).toBe(14);
    expect(getStringLength('python')).not.toBe(3);
})