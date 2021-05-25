const rewire = require("rewire");

test('Function isRotated must exist', () => {
    const isRotated = rewire("./app.js").__get__("isRotated");
    expect(isRotated).not.toBe(undefined);
});

test('The function should return true or false if there is one of the 2 given strings rotated.', () => {
    const isRotated = rewire("./app.js").__get__("isRotated");

    expect(isRotated('hello world', 'orldhello w')).toBe(true)
    expect(isRotated('hello world', 'asdmol owm')).toBe(false)
    expect(isRotated('hola mundo', 'dohola mun')).toBe(true)
})