const rewire = require ("rewire");
const isLessThan = rewire('./app.js').__get__('isLessThan');

test('The function isLessThan must exist.',()=>{
    expect(isLessThan).toBeTruthy();
})
test('The function isLessThan should return something.',()=>{
    expect(isLessThan).not.toBe(undefined);
})

test ('The function return true if num1 is bigger than num2.', () => {
    const isLessThan = rewire ('./app.js').__get__("isLessThan");
    expect(isLessThan(9, 3)).toBe(true);
})
test ('The function return true if num1 is bigger than num2.', () => {
    const isLessThan = rewire ('./app.js').__get__("isLessThan");
    expect(isLessThan(3, 2)).toBe(true);
})

test('The function return false if num1 is less than num2', ()=>{
    expect(isLessThan(6, 12)).toBe(false);
})

test('The function return false if num1 is less than num2', ()=>{
    expect(isLessThan(66, 84)).toBe(false);
})