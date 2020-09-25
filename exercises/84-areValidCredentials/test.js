const rewire = require ("rewire");

test('Function areValidCredentials must exist', () => {
    const areValidCredentials = rewire("./app.js").__get__("areValidCredentials");
    expect(areValidCredentials).not.toBe(undefined);
});

test ('The name should have more than 3 characters.', () => {
    const areValidCredentials = rewire ('./app.js').__get__("areValidCredentials");
     
    var output = areValidCredentials('Ritu', 'mylongpassword')
    expect(name.length > 3).toBe(true) && expect(password.length >= 8).toBe(true)
})


