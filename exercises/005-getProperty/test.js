const rewire = require ("rewire");

const person = {
    name: 'Alex'
};

test ('The function getProperty must exist', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");
    expect(getProperty).not.toBe(undefined);
})

test ("Your function must return someting", () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");
    expect(getProperty(person,'name')).not.toEqual(undefined);  
})

test ('returns the value of the property at the given key.', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");
    expect(getProperty(person,'name')).toEqual('Alex');  
})

test ('If there is no property at the given key, it should return undefined.', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");
    expect(getProperty(person,'lastname')).toBe(undefined);  
})

test ("Don't return the key itself, but the value of the given key inside the object", () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");
    expect(getProperty(person,'name')).not.toEqual('name');  
})