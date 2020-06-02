const rewire = require ("rewire");

test ('sets a new property on the given object with a value of true.', () => {
    const addProperty = rewire ('./app.js').__get__("addProperty");

    const myObj = {};
    expect(addProperty(myObj, 'myProperty')).toBe(true);
})

test ('fuction should pass a value of true not a string', () => {
    const addProperty = rewire ('./app.js').__get__("addProperty");

    const myObj = {};
    expect(addProperty(myObj, 'myProperty')).not.toBe("true");
})