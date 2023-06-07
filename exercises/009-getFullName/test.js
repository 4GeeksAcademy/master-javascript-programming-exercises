const rewire = require ("rewire");

test ('The function getFullName must exist', () => {
    const getFullName = rewire ('./app.js').__get__("getFullName");
    expect(getFullName).not.toBe(undefined);
})
test ('It should return a single string with the given first and last names', () => {
    const getFullName = rewire ('./app.js').__get__("getFullName");
    
    expect(getFullName('Bernado','Cubillan')).toBe('Bernado Cubillan');
    expect(getFullName('Ursulina','Bernardeski')).toBe('Ursulina Bernardeski');
})


test ('Remember that the first and last name should be separated by a space', () => {
    const getFullName = rewire ('./app.js').__get__("getFullName");

    if(getFullName('Bernado','Cubillan')=== "BernadoCubillan") throw Error()
})
