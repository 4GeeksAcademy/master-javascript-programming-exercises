const rewire = require ("rewire");
const isGreaterThanTen = rewire('./app.js').__get__('isGreaterThanTen');

test('The function isGreaterThanTen must exist.',()=>{
    expect(isGreaterThanTen).toBeTruthy();
})

test('The function isGreaterThanTen must return something.',()=>{
    expect(isGreaterThanTen()).not.toBe(undefined)
})

test ('function should return the expected output when the number is less or equal than 10.', () => {
    expect(isGreaterThanTen(10)).toBe(false);
})

test ('function should return the expected output when the number is grater than 10.', () => {
    expect(isGreaterThanTen(11)).toBe(true);
})
