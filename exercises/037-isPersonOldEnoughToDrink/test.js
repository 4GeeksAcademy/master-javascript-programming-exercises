const rewire = require ("rewire");
const isPersonOldEnoughToDrink = rewire("./app.js").__get__("isPersonOldEnoughToDrink");

test('Function isPersonOldEnoughToDrink must exist', () => {

    expect(isPersonOldEnoughToDrink).not.toBe(undefined);
});
test('Function isPersonOldEnoughToDrink must return something', () => {

    expect(isPersonOldEnoughToDrink({})).not.toBe(undefined);
});

test ('Function should return false if age is less than 21. Testing with 20', () => {
   
    expect(isPersonOldEnoughToDrink({ age: 20 })).toBe(false);
})
test ('Function should return false if age is less than 21. Testing with 7', () => {
   
    expect(isPersonOldEnoughToDrink({ age: 7 })).toBe(false);
})
test ('Function should return true if age is greater than or equal to 21. Testing with 21', () => {
    
    expect(isPersonOldEnoughToDrink({ age: 21 })).toBe(true);
})
test ('Function should return true if age is greater than or equal to 21. Testing with 24', () => {
    
    expect(isPersonOldEnoughToDrink({ age: 24 })).toBe(true);
})
