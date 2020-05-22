const rewire = require ("rewire");

test ('fuction returns key', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");

    const obj = {
        key: 'value'
    };
    expect(getProperty(obj,'key')).toEqual('value'); 
})

test ('object is undefined', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");

    const obj = {
        //key: 'value'
    };
    expect(getProperty(obj,'key')).toBe(undefined); 
})

