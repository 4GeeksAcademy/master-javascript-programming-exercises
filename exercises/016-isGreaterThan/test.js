const rewire = require ("rewire");

test ('Create a function isGreaterThan', () => {
    const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");
    expect(typeof(isGreaterThan)).not.toBe(undefined);
})

test ('Your function must return something', () => {
    const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");

    expect(isGreaterThan(9, 6)).not.toBe(undefined);
})

test ('Your function must return a boolean (true or false)', () => {
    const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");

    expect(typeof(isGreaterThan(9, 6))).toBe("boolean");
})

test ('Tested your function with num2=9 and num1=6 and it did not return false', () => {
    const isGreaterThan = rewire ('./app.js').__get__("isGreaterThan");

    expect(isGreaterThan(9, 6)).toBe(false);
    expect(isGreaterThan(9, 12)).toBe(true);
})