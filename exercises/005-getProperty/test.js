const rewire = require ("rewire");

test ("Your function must return someting", () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");

    const person = {
        name: 'Alex'
    };
    expect(getProperty(person,'name')).not.toEqual(undefined);  
})

test ('returns the value of the property at the given key.', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");

    const person = {
        name: 'Alex'
    };
    expect(getProperty(person,'name')).toEqual('Alex');  
})

test ('If there is no property at the given key, it should return undefined.', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");

    const person = {
        name: 'Alex'
    };
    expect(getProperty(person,'lastname')).toBe(undefined);  
})

test ("Don't return the key itself, but the value of the given key inside the object", () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");

    const person = {
        name: 'Alex'
    };
    expect(getProperty(person,'name')).not.toEqual('name');  
})