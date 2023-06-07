const rewire = require ("rewire");
const isGreaterThanTen = rewire('./app.js').__get__('isGreaterThanTen');

test('The function isGreaterThanTen must exist',()=>{
    expect(isGreaterThanTen).toBeTruthy();
})

test('The function isGreaterThanTen must return something',()=>{
    expect(isGreaterThanTen(10)).not.toBe(undefined)
})

test ('Function should return the expected output when the number is less or equal to 10', () => {
    expect(isGreaterThanTen(10)).toBe(false);
})

test ('Function should return the expected output when the number is greater than 10', () => {
    expect(isGreaterThanTen(11)).toBe(true);
})
