const rewire = require ("rewire");

test('Function areValidCredentials must exist', () => {
    const areValidCredentials = rewire("./app.js").__get__("areValidCredentials");
    expect(areValidCredentials).not.toBe(undefined);
});

test ('The name should have more than 3 characters. and, the password is at least 8 characters long', () => {
    const areValidCredentials = rewire ('./app.js').__get__("areValidCredentials");
     
    let output = areValidCredentials('Ritu', 'mylongpassword')
    expect(name.length > 3).toBe(true) && expect(password.length >= 8).toBe(true)

    output = areValidCredentials('ko', '123321')
    expect(name.length < 3).toBe(false) && expect(password.length <= 8).toBe(false)
})
