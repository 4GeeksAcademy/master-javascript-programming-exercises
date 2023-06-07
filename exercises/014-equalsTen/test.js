const rewire = require ("rewire");
const equalsTen = rewire('./app.js').__get__('equalsTen');
test('The function equalsTen must exist',()=>{
    expect(equalsTen).toBeTruthy();
})

test('The function equalsTen should return something',()=>{
    expect(equalsTen()).not.toBe(undefined);
})

test ('The function returns false when the given number is not 10', () => {
    const equalsTen = rewire ('./app.js').__get__("equalsTen");
    expect(equalsTen(9)).toBe(false);
})

test ('The function returns true when the given number is 10', () => {
    const equalsTen = rewire ('./app.js').__get__("equalsTen");
    expect(equalsTen(10)).toBe(true);
})
