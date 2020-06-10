const rewire = require ("rewire");

test ('function a single string with the given first and last names', () => {
    const getFullName = rewire ('./app.js').__get__("getFullName");

    expect(getFullName('Bernado','Cubillan')).toBe('Bernado Cubillan');
    expect(getFullName('Ursulina','Bernardeski')).toBe('Ursulina Bernardeski');
})

