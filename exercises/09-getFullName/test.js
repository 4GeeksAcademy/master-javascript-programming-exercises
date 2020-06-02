const rewire = require ("rewire");

test ('function a single string with the given first and last names', () => {
    const getFullName = rewire ('./app.js').__get__("getFullName");

    const output = getFullName('Joe','Smith')
    expect(output).toBe('Joe Smith');
})

