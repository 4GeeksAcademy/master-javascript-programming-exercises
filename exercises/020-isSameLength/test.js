const rewire = require ("rewire");

test('Function isSameLength must exist', () => {
    const isSameLength = rewire("./app.js").__get__("isSameLength");
    expect(isSameLength).not.toBe(undefined);
});

test('Function isSameLength must return boolean', () => {
    const isSameLength = rewire("./app.js").__get__("isSameLength");
    expect(typeof(isSameLength("2","3"))).toBe("boolean");
});


test ('Tried function with "words" & "super" a it should be true and ("words" & "superior") should be false', () => {
    const isSameLength = rewire ('./app.js').__get__("isSameLength");

    expect(isSameLength('words', 'super')).toBe(true);
    expect(isSameLength('words', 'superior')).toBe(false);
})
