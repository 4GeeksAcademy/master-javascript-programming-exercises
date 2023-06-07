const rewire = require ("rewire");
const isLessThan30 = rewire('./app.js').__get__('isLessThan30');

test('The function isLessThan30 must exist',()=>{
    expect(isLessThan30).toBeTruthy();
})

test('The function isLessThan30 must return something',()=>{
    expect(isLessThan30()).not.toBe(undefined)
})

test ('Function should return true if the given number is less than 30', () => {
    expect(isLessThan30(29)).toBe(true);
})
test ('Function should return false if the given number is not less than 30', () => {
    expect(isLessThan30(30)).toBe(false);
})
