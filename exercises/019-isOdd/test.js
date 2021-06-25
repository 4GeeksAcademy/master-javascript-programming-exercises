const rewire = require ("rewire");

test('Function isOdd must exist', () => {
    const isOdd = rewire("./app.js").__get__("isOdd");
    expect(isOdd).not.toBe(undefined);
});

test('Function isOdd must return something', () => {
    const isOdd = rewire("./app.js").__get__("isOdd");
    expect(isOdd(20)).not.toBe(undefined);
});

test('Function isOdd must return boolean', () => {
    const isOdd = rewire("./app.js").__get__("isOdd");
    expect(typeof(isOdd(20))).toBe("boolean");
});

test ('Tested with 9 and 10 it didn\'t return true and false', () => {
    const isOdd = rewire ('./app.js').__get__("isOdd");
 
    expect(isOdd(9)).toBe(true);
    expect(isOdd(10)).toBe(false);
})