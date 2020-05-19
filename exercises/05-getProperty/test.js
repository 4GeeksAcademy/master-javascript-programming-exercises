const rewire = require ("rewire");

test ('if fuction is undefined', () => {
    const getProperty = rewire ('./app.js').__get__("getProperty");

     expect(getProperty('value')).toBeUndefined();
})

