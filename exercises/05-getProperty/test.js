const rewire = require ("rewire");

test ('returns the value of the property at the given key.', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");

    const obj = {
        key: 'value'
    };
    expect(getProperty(obj,'key')).toEqual('value'); 
})

test ('If there is no property at the given key, it should return undefined.', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");

    const obj = {
        //key: 'value'
    };
    expect(getProperty(obj,'key')).toBe(undefined); 
})

